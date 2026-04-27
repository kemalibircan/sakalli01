export const brandName = "Sakallı01 Rent A Car";

export const contactInfo = {
  phoneDisplay: "+90 (212) 000 01 01",
  phoneHref: "tel:+902120000101",
  whatsappNumber: "905320000101",
  email: "info@sakalli01rentacar.com",
  emailHref: "mailto:info@sakalli01rentacar.com",
  address: "Merkez Mah. Prestij Cad. No: 101, İstanbul"
};

export function buildWhatsAppUrl(message) {
  const text =
    message ||
    "Merhaba, Sakallı01 Rent A Car üzerinden araç kiralama talebi oluşturmak istiyorum.";

  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const vehicles = [
  {
    slug: "renault-clio",
    name: "Renault Clio",
    className: "Ekonomi",
    fuel: "Benzin",
    transmission: "Otomatik",
    seats: 5,
    luggage: 2,
    price: 1450,
    image: "/image/cars/renault-clio.jpg",
    summary: "Şehir içi kullanımda çevik, ekonomik ve konforlu bir kiralama deneyimi.",
    specs: ["1.0 TCe motor", "Bluetooth multimedya", "Geri görüş kamerası", "Düşük yakıt tüketimi"],
    conditions: ["Günlük 300 km kullanım", "Minimum 2 yıllık ehliyet", "Ekonomi sınıfı provizyon", "Tam depo teslim"],
    dailyKm: 300,
    minLicenseYears: 2,
    imageSource: {
      title: "Renault Clio 0.9 TCe Dynamique 2017",
      author: "RL GNZLZ",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Renault_Clio_0.9_TCe_Dynamique_2017_(37006128596).jpg"
    }
  },
  {
    slug: "fiat-egea",
    name: "Fiat Egea",
    className: "Ekonomi Plus",
    fuel: "Dizel",
    transmission: "Manuel",
    seats: 5,
    luggage: 3,
    price: 1650,
    image: "/image/cars/fiat-egea.jpg",
    summary: "Geniş bagajı ve verimli motoruyla günlük ve haftalık kiralamalar için güçlü seçenek.",
    specs: ["1.6 Multijet motor", "Geniş bagaj hacmi", "Hız sabitleyici", "Yol bilgisayarı"],
    conditions: ["Günlük 300 km kullanım", "Minimum 2 yıllık ehliyet", "Ekonomi Plus provizyon", "Tam depo teslim"],
    dailyKm: 300,
    minLicenseYears: 2,
    imageSource: {
      title: "Fiat Egea in Pendik Istanbul",
      author: "Carl9311",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Fiat_Egea_in_Pendik_Istanbul.jpg"
    }
  },
  {
    slug: "toyota-corolla",
    name: "Toyota Corolla",
    className: "Konfor",
    fuel: "Hibrit",
    transmission: "Otomatik",
    seats: 5,
    luggage: 3,
    price: 2250,
    image: "/image/cars/toyota-corolla.jpg",
    summary: "Sessiz sürüş, yüksek güvenlik ve yakıt avantajını aynı çizgide buluşturur.",
    specs: ["Hibrit motor", "Adaptif hız sabitleyici", "Şerit takip desteği", "Çift bölgeli klima"],
    conditions: ["Günlük 350 km kullanım", "Minimum 3 yıllık ehliyet", "Konfor sınıfı provizyon", "Tam depo teslim"],
    dailyKm: 350,
    minLicenseYears: 3,
    imageSource: {
      title: "2020 Toyota Corolla LE sedan",
      author: "Ee2mba",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:2020_Toyota_Corolla_LE_sedan.jpg"
    }
  },
  {
    slug: "volkswagen-passat",
    name: "Volkswagen Passat",
    className: "Business",
    fuel: "Dizel",
    transmission: "Otomatik",
    seats: 5,
    luggage: 4,
    price: 2950,
    image: "/image/cars/volkswagen-passat.jpg",
    summary: "İş seyahatleri ve uzun yol kullanımı için prestijli, geniş ve dengeli bir sedan.",
    specs: ["2.0 TDI motor", "Dijital kokpit", "Ergonomik koltuklar", "Geniş arka yaşam alanı"],
    conditions: ["Günlük 400 km kullanım", "Minimum 4 yıllık ehliyet", "Business sınıfı provizyon", "Tam depo teslim"],
    dailyKm: 400,
    minLicenseYears: 4,
    imageSource: {
      title: "2020 Volkswagen Passat Business 140TSI front",
      author: "LuvsMG481",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:2020_Volkswagen_Passat_Business_140TSI_front.jpg"
    }
  },
  {
    slug: "peugeot-3008",
    name: "Peugeot 3008",
    className: "SUV",
    fuel: "Dizel",
    transmission: "Otomatik",
    seats: 5,
    luggage: 4,
    price: 3250,
    image: "/image/cars/peugeot-3008.jpg",
    summary: "Yüksek oturma pozisyonu, modern kabin ve güçlü yol tutuşu ile premium SUV deneyimi.",
    specs: ["Grip control", "Panoramik ekran", "Geniş bagaj", "Sürüş modu seçimi"],
    conditions: ["Günlük 400 km kullanım", "Minimum 4 yıllık ehliyet", "SUV sınıfı provizyon", "Tam depo teslim"],
    dailyKm: 400,
    minLicenseYears: 4,
    imageSource: {
      title: "Peugeot 3008 Puretech Allure 2022",
      author: "RL GNZLZ",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Peugeot_3008_Puretech_Allure_2022_(54401874358).jpg"
    }
  },
  {
    slug: "mercedes-c-serisi",
    name: "Mercedes C Serisi",
    className: "Premium",
    fuel: "Benzin",
    transmission: "Otomatik",
    seats: 5,
    luggage: 3,
    price: 4750,
    image: "/image/cars/mercedes-c-serisi.jpg",
    summary: "Özel günler, VIP transferler ve prestijli yolculuklar için üst seviye konfor.",
    specs: ["Premium iç mekan", "Ambiyans aydınlatma", "Gelişmiş sürüş destekleri", "Sessiz kabin"],
    conditions: ["Günlük 350 km kullanım", "Minimum 5 yıllık ehliyet", "Premium sınıf provizyon", "Tam depo teslim"],
    dailyKm: 350,
    minLicenseYears: 5,
    imageSource: {
      title: "2018 Mercedes-Benz C300 4Matic in Black, front right",
      author: "Mr.choppers",
      license: "CC BY-SA 3.0 / GFDL",
      url: "https://commons.wikimedia.org/wiki/File:2018_Mercedes-Benz_C300_4Matic_in_Black,_front_right.jpg"
    }
  }
];

export const rentalConditionDetails = [
  {
    title: "Sürücü ve ehliyet koşulu",
    description:
      "Kiralama için geçerli sürücü belgesi ve araç sınıfına göre minimum ehliyet süresi gerekir. Premium ve SUV sınıflarında deneyim şartı daha yüksek uygulanır."
  },
  {
    title: "Kimlik, sözleşme ve provizyon",
    description:
      "Teslimatta kimlik, sürücü belgesi ve kiralayan adına kredi kartı talep edilir. Provizyon tutarı araç sınıfına, kiralama süresine ve ek hizmetlere göre netleştirilir."
  },
  {
    title: "Kilometre ve kullanım",
    description:
      "Günlük kilometre hakkı araç detayında belirtilir. Limit aşımında sözleşmede yer alan kilometre aşım bedeli uygulanır."
  },
  {
    title: "Yakıt ve teslim",
    description:
      "Araçlar teslim edildiği yakıt seviyesiyle iade edilir. Geç iade, eksik yakıt, trafik cezaları ve HGS/OGS geçişleri kullanım sonrasında ayrıca hesaplanır."
  },
  {
    title: "Sigorta ve destek",
    description:
      "Standart sigorta koşulları sözleşmede belirtilir. Hasar, kaza veya arıza durumunda 7/24 destek hattı üzerinden hızlı yönlendirme sağlanır."
  }
];

export const campaigns = [
  {
    title: "Haftalık Kiralamalarda Özel İndirim",
    description:
      "7 gün ve üzeri kiralamalarda seçili araç sınıflarında avantajlı fiyatlardan yararlanın.",
    label: "Haftalık fırsat"
  },
  {
    title: "Erken Rezervasyon Fırsatı",
    description:
      "Seyahatinizi önceden planlayın, premium araçları daha uygun koşullarla güvenceye alın.",
    label: "Planlı seyahat"
  },
  {
    title: "Uzun Dönem Kiralamada Avantajlı Fiyatlar",
    description:
      "Kurumsal ve bireysel uzun dönem ihtiyaçlarınız için esnek, ekonomik ve güvenilir çözümler.",
    label: "Uzun dönem"
  }
];

export const testimonials = [
  {
    name: "Emre Yılmaz",
    role: "İş seyahati",
    quote:
      "Rezervasyon süreci çok hızlı ilerledi. Araç temiz, bakımlı ve tam zamanında teslim edildi."
  },
  {
    name: "Selin Arslan",
    role: "Hafta sonu kiralama",
    quote:
      "Premium hissi gerçekten var. İletişim net, araç seçenekleri güçlü ve fiyatlandırma şeffaf."
  },
  {
    name: "Murat Demir",
    role: "Uzun dönem kiralama",
    quote:
      "Kurumsal kullanım için aldığımız hizmetten memnun kaldık. Destek ekibi her aşamada yardımcı oldu."
  }
];

export const stats = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "100+", label: "Araç" },
  { value: "7/24", label: "Destek" },
  { value: "%98", label: "Memnuniyet" }
];

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/araclar", label: "Araçlar" },
  { href: "/kampanyalar", label: "Kampanyalar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" }
];

export function getVehicleBySlug(slug) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}
