from io import BytesIO
from pathlib import Path
from time import sleep
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import HTTPError

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
CAR_DIR = ROOT / "public" / "image" / "cars"
API_URL = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "Sakalli01RentACarWebsite/1.0 (local asset preparation)"

ASSETS = [
    {
        "slug": "renault-clio",
        "title": "File:Renault Clio 0.9 TCe Dynamique 2017 (37006128596).jpg",
        "crop_bias": "center",
    },
    {
        "slug": "fiat-egea",
        "title": "File:Fiat Egea in Pendik Istanbul.jpg",
        "crop_bias": "center",
    },
    {
        "slug": "toyota-corolla",
        "title": "File:2020 Toyota Corolla LE sedan.jpg",
        "crop_bias": "center",
    },
    {
        "slug": "volkswagen-passat",
        "title": "File:2020 Volkswagen Passat Business 140TSI front.jpg",
        "crop_bias": "center",
    },
    {
        "slug": "peugeot-3008",
        "title": "File:Peugeot 3008 Puretech Allure 2022 (54401874358).jpg",
        "crop_bias": "center",
    },
    {
        "slug": "mercedes-c-serisi",
        "title": "File:2018 Mercedes-Benz C300 4Matic in Black, front right.jpg",
        "crop_bias": "center",
    },
]


def fetch_json(title):
    params = urlencode(
        {
            "action": "query",
            "format": "json",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": "1800",
        }
    )
    request = Request(f"{API_URL}?{params}", headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        return response.read()


def fetch_bytes(url):
    request = Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(5):
        try:
            with urlopen(request, timeout=60) as response:
                return response.read()
        except HTTPError as error:
            if error.code != 429 or attempt == 4:
                raise
            sleep(5 + attempt * 5)


def image_url_for(title):
    import json

    data = json.loads(fetch_json(title))
    pages = data["query"]["pages"]
    page = next(iter(pages.values()))
    info = page["imageinfo"][0]
    return info.get("thumburl") or info["url"]


def cover_crop(image, target_size=(1400, 900), crop_bias="center"):
    image = ImageOps.exif_transpose(image.convert("RGB"))
    target_w, target_h = target_size
    source_w, source_h = image.size
    target_ratio = target_w / target_h
    source_ratio = source_w / source_h

    if source_ratio > target_ratio:
      new_w = int(source_h * target_ratio)
      left = (source_w - new_w) // 2
      if crop_bias == "left":
          left = 0
      elif crop_bias == "right":
          left = source_w - new_w
      image = image.crop((left, 0, left + new_w, source_h))
    else:
      new_h = int(source_w / target_ratio)
      top = max((source_h - new_h) // 2, 0)
      image = image.crop((0, top, source_w, top + new_h))

    image = image.resize(target_size, Image.Resampling.LANCZOS)
    overlay = Image.new("RGBA", target_size, (0, 0, 0, 0))
    gradient = Image.new("L", (1, target_h))
    for y in range(target_h):
        edge = max(0, abs(y - target_h / 2) - target_h * 0.25)
        alpha = int(min(74, edge / (target_h * 0.25) * 74))
        gradient.putpixel((0, y), alpha)
    alpha = gradient.resize(target_size)
    overlay.putalpha(alpha)
    image = Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")
    return image


def main():
    CAR_DIR.mkdir(parents=True, exist_ok=True)
    for asset in ASSETS:
        out_path = CAR_DIR / f"{asset['slug']}.jpg"
        if out_path.exists():
            print(f"{asset['slug']}: exists -> {out_path}")
            continue
        url = image_url_for(asset["title"])
        image = Image.open(BytesIO(fetch_bytes(url)))
        image = cover_crop(image, crop_bias=asset["crop_bias"])
        image.save(out_path, "JPEG", quality=90, optimize=True)
        print(f"{asset['slug']}: {url} -> {out_path}")
        sleep(3)


if __name__ == "__main__":
    main()
