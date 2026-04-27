from pathlib import Path
from math import sin

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public" / "image"
CAR_DIR = IMAGE_DIR / "cars"
SECTION_DIR = IMAGE_DIR / "sections"


def mix(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def vertical_gradient(draw, width, height, top, bottom):
    for y in range(height):
        t = y / max(height - 1, 1)
        draw.line([(0, y), (width, y)], fill=mix(top, bottom, t))


def add_glow(image, box, color, blur=80, opacity=120):
    layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse(box, fill=(*color, opacity))
    image.alpha_composite(layer.filter(ImageFilter.GaussianBlur(blur)))


def draw_floor(draw, x, y, w, h, color=(213, 173, 79), alpha=44):
    draw.ellipse([x, y, x + w, y + h], fill=(*color, alpha))
    draw.ellipse([x + w * 0.08, y + h * 0.2, x + w * 0.92, y + h * 0.82], fill=(0, 0, 0, 95))


def draw_wheel(draw, cx, cy, r):
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(5, 5, 6, 255))
    draw.ellipse([cx - r * 0.72, cy - r * 0.72, cx + r * 0.72, cy + r * 0.72], fill=(38, 41, 47, 255))
    draw.ellipse([cx - r * 0.48, cy - r * 0.48, cx + r * 0.48, cy + r * 0.48], outline=(218, 217, 209, 210), width=max(2, int(r * 0.04)))
    for i in range(8):
        angle = i * 0.78
        x2 = cx + r * 0.45 * sin(angle)
        y2 = cy + r * 0.45 * sin(angle + 1.57)
        draw.line([cx, cy, x2, y2], fill=(218, 217, 209, 150), width=max(2, int(r * 0.035)))
    draw.ellipse([cx - r * 0.13, cy - r * 0.13, cx + r * 0.13, cy + r * 0.13], fill=(213, 173, 79, 255))


def draw_car(draw, x, y, w, h, body, accent=(213, 173, 79), variant="sedan"):
    body = (*body, 255)
    accent = (*accent, 255)
    shadow_y = y + h * 0.76
    draw_floor(draw, x + w * 0.03, shadow_y, w * 0.94, h * 0.22)

    if variant == "suv":
        cabin = [
            (x + w * 0.28, y + h * 0.24),
            (x + w * 0.64, y + h * 0.21),
            (x + w * 0.82, y + h * 0.46),
            (x + w * 0.18, y + h * 0.49),
        ]
        body_box = [x + w * 0.06, y + h * 0.45, x + w * 0.95, y + h * 0.74]
        wheel_y = y + h * 0.73
    elif variant == "compact":
        cabin = [
            (x + w * 0.3, y + h * 0.26),
            (x + w * 0.58, y + h * 0.22),
            (x + w * 0.76, y + h * 0.48),
            (x + w * 0.16, y + h * 0.5),
        ]
        body_box = [x + w * 0.08, y + h * 0.48, x + w * 0.92, y + h * 0.74]
        wheel_y = y + h * 0.74
    else:
        cabin = [
            (x + w * 0.31, y + h * 0.25),
            (x + w * 0.62, y + h * 0.22),
            (x + w * 0.79, y + h * 0.48),
            (x + w * 0.19, y + h * 0.5),
        ]
        body_box = [x + w * 0.05, y + h * 0.48, x + w * 0.96, y + h * 0.74]
        wheel_y = y + h * 0.74

    draw.rounded_rectangle(body_box, radius=int(h * 0.08), fill=body)
    draw.polygon(
        [
            (x + w * 0.08, y + h * 0.55),
            (x + w * 0.2, y + h * 0.42),
            (x + w * 0.83, y + h * 0.43),
            (x + w * 0.96, y + h * 0.55),
            (x + w * 0.9, y + h * 0.63),
            (x + w * 0.12, y + h * 0.65),
        ],
        fill=body,
    )
    draw.polygon(cabin, fill=(10, 11, 14, 255), outline=(215, 216, 211, 150))
    draw.line([cabin[0], cabin[1], cabin[2]], fill=(255, 255, 247, 95), width=max(2, int(h * 0.012)))
    draw.line([(x + w * 0.52, y + h * 0.25), (x + w * 0.5, y + h * 0.49)], fill=(215, 216, 211, 100), width=max(2, int(h * 0.008)))
    draw.line([(x + w * 0.13, y + h * 0.54), (x + w * 0.9, y + h * 0.49)], fill=(255, 255, 247, 115), width=max(3, int(h * 0.012)))
    draw.line([(x + w * 0.2, y + h * 0.66), (x + w * 0.84, y + h * 0.65)], fill=accent, width=max(2, int(h * 0.01)))
    draw.polygon(
        [
            (x + w * 0.83, y + h * 0.53),
            (x + w * 0.95, y + h * 0.55),
            (x + w * 0.9, y + h * 0.59),
            (x + w * 0.82, y + h * 0.58),
        ],
        fill=(245, 235, 181, 245),
    )
    draw.polygon(
        [
            (x + w * 0.08, y + h * 0.56),
            (x + w * 0.18, y + h * 0.55),
            (x + w * 0.15, y + h * 0.6),
            (x + w * 0.06, y + h * 0.6),
        ],
        fill=(149, 32, 28, 210),
    )

    wheel_r = w * (0.082 if variant != "suv" else 0.092)
    draw_wheel(draw, x + w * 0.26, wheel_y, wheel_r)
    draw_wheel(draw, x + w * 0.74, wheel_y, wheel_r)
    draw.arc([x + w * 0.18, wheel_y - wheel_r * 1.24, x + w * 0.34, wheel_y + wheel_r * 0.66], 180, 360, fill=(255, 255, 247, 105), width=max(2, int(h * 0.01)))
    draw.arc([x + w * 0.66, wheel_y - wheel_r * 1.24, x + w * 0.82, wheel_y + wheel_r * 0.66], 180, 360, fill=(255, 255, 247, 105), width=max(2, int(h * 0.01)))


def save_canvas(image, path, size):
    image = image.convert("RGB").resize(size, Image.Resampling.LANCZOS)
    image.save(path, quality=95, optimize=True)


def create_card_asset(filename, body, variant="sedan", glow=(213, 173, 79)):
    scale = 2
    w, h = 1400 * scale, 900 * scale
    image = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    draw = ImageDraw.Draw(image)
    vertical_gradient(draw, w, h, (12, 13, 15), (3, 3, 4))
    add_glow(image, [w * 0.48, h * 0.06, w * 1.18, h * 0.88], glow, blur=120 * scale, opacity=84)
    add_glow(image, [-w * 0.2, h * 0.16, w * 0.48, h * 0.94], (231, 229, 220), blur=150 * scale, opacity=28)
    draw = ImageDraw.Draw(image)
    for i in range(8):
        y = int(h * (0.18 + i * 0.078))
        draw.line([(w * 0.08, y), (w * 0.92, y - h * 0.08)], fill=(231, 229, 220, 12), width=2 * scale)
    draw_car(draw, w * 0.1, h * 0.22, w * 0.8, h * 0.55, body, variant=variant)
    save_canvas(image, CAR_DIR / filename, (1400, 900))


def create_hero():
    scale = 2
    w, h = 2200 * scale, 1300 * scale
    image = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    draw = ImageDraw.Draw(image)
    vertical_gradient(draw, w, h, (15, 16, 18), (1, 1, 2))
    add_glow(image, [w * 0.52, -h * 0.22, w * 1.18, h * 0.82], (213, 173, 79), blur=190 * scale, opacity=96)
    add_glow(image, [w * 0.24, h * 0.22, w * 0.88, h * 1.04], (231, 229, 220), blur=180 * scale, opacity=30)
    draw = ImageDraw.Draw(image)
    for i in range(10):
        x1 = w * (0.42 + i * 0.055)
        draw.line([(x1, h * 0.13), (x1 + w * 0.24, h * 0.86)], fill=(240, 207, 118, 18), width=2 * scale)
    draw.polygon([(0, h * 0.78), (w, h * 0.63), (w, h), (0, h)], fill=(5, 5, 6, 210))
    for i in range(5):
        draw.line([(w * 0.42, h * (0.84 + i * 0.04)), (w * 0.98, h * (0.74 + i * 0.025))], fill=(231, 229, 220, 22), width=2 * scale)
    draw_car(draw, w * 0.43, h * 0.43, w * 0.52, h * 0.42, (10, 11, 13), accent=(240, 207, 118), variant="sedan")
    save_canvas(image, IMAGE_DIR / "hero-premium.png", (2200, 1300))


def create_about():
    scale = 2
    w, h = 1600 * scale, 1120 * scale
    image = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    draw = ImageDraw.Draw(image)
    vertical_gradient(draw, w, h, (20, 21, 24), (4, 4, 5))
    add_glow(image, [w * 0.14, h * 0.0, w * 0.88, h * 0.86], (213, 173, 79), blur=140 * scale, opacity=70)
    draw = ImageDraw.Draw(image)
    for i in range(7):
        x = w * (0.08 + i * 0.14)
        draw.rectangle([x, h * 0.06, x + w * 0.018, h * 0.78], fill=(231, 229, 220, 16))
    draw.rounded_rectangle([w * 0.08, h * 0.16, w * 0.92, h * 0.82], radius=18 * scale, outline=(231, 229, 220, 58), width=2 * scale)
    draw_car(draw, w * 0.12, h * 0.34, w * 0.76, h * 0.42, (12, 13, 15), accent=(240, 207, 118), variant="suv")
    save_canvas(image, SECTION_DIR / "about-premium.png", (1600, 1120))


def main():
    CAR_DIR.mkdir(parents=True, exist_ok=True)
    SECTION_DIR.mkdir(parents=True, exist_ok=True)
    create_hero()
    create_about()
    create_card_asset("renault-clio.png", (42, 43, 48), "compact", (213, 173, 79))
    create_card_asset("fiat-egea.png", (56, 59, 64), "sedan", (200, 205, 211))
    create_card_asset("toyota-corolla.png", (28, 31, 36), "sedan", (143, 199, 165))
    create_card_asset("volkswagen-passat.png", (10, 12, 15), "sedan", (213, 173, 79))
    create_card_asset("peugeot-3008.png", (36, 39, 43), "suv", (240, 207, 118))
    create_card_asset("mercedes-c-serisi.png", (8, 8, 10), "sedan", (240, 207, 118))


if __name__ == "__main__":
    main()
