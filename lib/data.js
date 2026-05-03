export const brandName = "Sakallı01 Rent A Car";

export const contactInfo = {
  phoneDisplay: "0530 961 11 48",
  phoneHref: "tel:+905309611148",
  whatsappNumber: "905309611148",
  email: "info@sakalli01rentacar.com",
  emailHref: "mailto:info@sakalli01rentacar.com",
  address: "YEŞİLOBA MAH. 46120 SOKAK OTO GALERİCİLER SİT. D BLOK NO:15/81 Adana Seyhan"
};

export function buildWhatsAppUrl(message) {
  const text =
    message ||
    "Merhaba, Sakallı01 Rent A Car üzerinden araç kiralama talebi oluşturmak istiyorum.";

  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const vehicles = [
  {
    slug: "fiat-egea",
    name: "Fiat Egea",
    className: "Ekonomi",
    fuel: "Dizel",
    transmission: "Manuel",
    seats: 5,
    luggage: 3,
    price: 2500,
    image: "/image/cars/fiat-egea.jpg",
    summary: "Manuel dizel yapısıyla ekonomik kullanım ve geniş bagajı bir arada sunar.",
    specs: ["Dizel motor", "Manuel vites", "Geniş bagaj hacmi", "Yol bilgisayarı"],
    conditions: ["Günlük 300 km kullanım", "Minimum 2 yıllık ehliyet", "Ekonomi sınıfı provizyon", "Tam depo teslim"],
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
    slug: "renault-clio",
    name: "Renault Clio",
    className: "Ekonomi",
    fuel: "Benzin",
    transmission: "Manuel",
    seats: 5,
    luggage: 2,
    price: 2500,
    image: "/image/cars/renault-clio.jpg",
    summary: "Manuel benzinli yapısıyla şehir içi kullanımda pratik ve çevik bir seçenek.",
    specs: ["Benzinli motor", "Manuel vites", "Bluetooth multimedya", "Düşük yakıt tüketimi"],
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
    slug: "volkswagen-passat-cc",
    name: "Volkswagen Passat CC",
    className: "Premium",
    fuel: "Dizel",
    transmission: "Otomatik",
    seats: 5,
    luggage: 4,
    price: 5000,
    image: "/image/cars/volkswagen-passat-cc.jpg",
    summary: "Prestijli coupe-sedan çizgisi ve otomatik konforuyla özel yolculuklara uygundur.",
    specs: ["Otomatik vites", "Dizel motor", "Geniş iç mekan", "Konfor odaklı sürüş"],
    conditions: ["Günlük 350 km kullanım", "Minimum 4 yıllık ehliyet", "Premium sınıf provizyon", "Tam depo teslim"],
    dailyKm: 350,
    minLicenseYears: 4,
    imageSource: {
      title: "VOLKSWAGEN CC (PASSAT CC) China",
      author: "Dinkun Chen",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:VOLKSWAGEN_CC_(PASSAT_CC)_China.jpg"
    }
  },
  {
    slug: "hyundai-i20",
    name: "Hyundai i20",
    className: "Ekonomi Otomatik",
    fuel: "Benzin",
    transmission: "Otomatik",
    seats: 5,
    luggage: 2,
    price: 3000,
    image: "/image/cars/hyundai-i20.jpg",
    summary: "Otomatik vites rahatlığıyla şehir içi kullanımda kolay ve kompakt bir seçenek.",
    specs: ["Benzinli motor", "Otomatik vites", "Kompakt gövde", "Klima"],
    conditions: ["Günlük 300 km kullanım", "Minimum 2 yıllık ehliyet", "Ekonomi Otomatik provizyon", "Tam depo teslim"],
    dailyKm: 300,
    minLicenseYears: 2,
    imageSource: {
      title: "Hyundai i20 (BC3) 1X7A6488",
      author: "Alexander-93",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Hyundai_i20_(BC3)_1X7A6488.jpg"
    }
  },
  {
    slug: "seat-leon",
    name: "Seat Leon",
    className: "Premium",
    fuel: "Benzin",
    transmission: "Otomatik",
    seats: 5,
    luggage: 3,
    price: 5000,
    image: "/image/cars/seat-leon.jpg",
    summary: "Sportif hatchback karakteri ve otomatik vitesiyle dinamik bir sürüş alternatifi.",
    specs: ["Benzinli motor", "Otomatik vites", "Sportif hatchback yapı", "Modern multimedya"],
    conditions: ["Günlük 350 km kullanım", "Minimum 4 yıllık ehliyet", "Premium sınıf provizyon", "Tam depo teslim"],
    dailyKm: 350,
    minLicenseYears: 4,
    imageSource: {
      title: "SEAT Leon Mk4 1X7A5842",
      author: "Alexander-93",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:SEAT_Leon_Mk4_1X7A5842.jpg"
    }
  },
  {
    slug: "volkswagen-jetta",
    name: "Volkswagen Jetta",
    className: "Business",
    fuel: "Benzin",
    transmission: "Otomatik",
    seats: 5,
    luggage: 3,
    price: 4000,
    image: "/image/cars/volkswagen-jetta.jpg",
    summary: "Otomatik vitesli sedan konforu ve geniş yaşam alanıyla günlük ve uzun yol için dengeli.",
    specs: ["Benzinli motor", "Otomatik vites", "Sedan gövde", "Geniş arka yaşam alanı"],
    conditions: ["Günlük 350 km kullanım", "Minimum 3 yıllık ehliyet", "Business sınıfı provizyon", "Tam depo teslim"],
    dailyKm: 350,
    minLicenseYears: 3,
    imageSource: {
      title: "2022 Volkswagen Jetta VII 1X7A0154",
      author: "Alexander-93",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:2022_Volkswagen_Jetta_VII_1X7A0154.jpg"
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
