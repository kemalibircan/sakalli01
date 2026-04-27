import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  CarFront,
  Clock3,
  Headset,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { HomeSearchExperience } from "@/components/HomeSearchExperience";
import { SectionHeader } from "@/components/SectionHeader";
import { buildWhatsAppUrl, campaigns, stats, testimonials, vehicles } from "@/lib/data";

const advantages = [
  {
    icon: CarFront,
    title: "Geniş Araç Filosu",
    description: "Ekonomiden premium sınıfa kadar farklı ihtiyaçlara uygun bakımlı araç seçenekleri."
  },
  {
    icon: Sparkles,
    title: "Premium Hizmet Deneyimi",
    description: "Temiz teslim, net bilgilendirme ve her aşamada profesyonel hizmet yaklaşımı."
  },
  {
    icon: CalendarCheck,
    title: "Hızlı Rezervasyon",
    description: "Lokasyon, tarih ve araç sınıfını seçerek dakikalar içinde talep oluşturun."
  },
  {
    icon: Headset,
    title: "7/24 Destek",
    description: "Kiralama öncesinde ve yolculuk boyunca ulaşılabilir destek ekibi."
  }
];

const steps = [
  {
    title: "Lokasyon ve tarih seç",
    description: "Alış ve teslim noktalarınızı belirleyin, seyahat tarihlerinizi girin."
  },
  {
    title: "Sana uygun aracı belirle",
    description: "Araç sınıfı, fiyat ve teknik özelliklere göre filoyu inceleyin."
  },
  {
    title: "Güvenle kirala ve yola çık",
    description: "Rezervasyon talebinizi iletin, aracı temiz ve hazır şekilde teslim alın."
  }
];

export default function HomePage() {
  return (
    <>
      <HomeSearchExperience />

      <section className="section section-advantages">
        <div className="container">
          <SectionHeader
            eyebrow="Neden Sakallı?"
            title="Güven, hız ve konfor aynı çizgide"
            description="Araç kiralama sürecini hızlı anlaşılır, profesyonel ve sorunsuz hale getiren güçlü avantajlar."
          />
          <div className="advantages-grid">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <article className="advantage-card reveal" key={advantage.title}>
                  <span className="icon-box">
                    <Icon size={24} />
                  </span>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-split-header">
            <SectionHeader
              align="left"
              eyebrow="Popüler araçlar"
              title="Her yolculuğa uygun premium filo"
              description="Şehir içi kullanımdan iş seyahatlerine, SUV konforundan premium sedanlara kadar güçlü seçenekler."
            />
            <Link className="btn btn-ghost" href="/araclar">
              Tüm Araçlar
            </Link>
          </div>
          <div className="cars-grid">
            {vehicles.map((vehicle, index) => (
              <CarCard vehicle={vehicle} key={vehicle.slug} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="section campaign-band">
        <div className="container campaign-layout">
          <div className="campaign-copy">
            <span className="eyebrow">Kampanyalar</span>
            <h2>Avantajlı Kiralama Fırsatlarını Kaçırmayın</h2>
            <p>
              Haftalık, erken rezervasyon ve uzun dönem kiralama fırsatlarıyla bütçenize uygun
              premium çözümler sunuyoruz.
            </p>
            <Link className="btn btn-gold" href="/kampanyalar">
              Kampanyaları İncele
            </Link>
          </div>
          <div className="campaign-cards">
            {campaigns.map((campaign) => (
              <article className="campaign-card" key={campaign.title}>
                <span>{campaign.label}</span>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Nasıl çalışır?"
            title="Üç adımda güvenli kiralama"
            description="Karmaşık süreçler olmadan, net ve hızlı bir kiralama deneyimi."
          />
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-grid">
          <div className="about-media">
            <Image
              src="/image/sections/about-premium.png"
              alt="Premium araç kiralama deneyimi"
              width={900}
              height={650}
            />
          </div>
          <div className="about-copy">
            <span className="eyebrow">Hakkımızda</span>
            <h2>Sakallı01 Rent A Car ile güven veren premium yolculuklar</h2>
            <p>
              Sakallı01 Rent A Car; bakımlı araç filosu, müşteri odaklı hizmet anlayışı ve hızlı
              rezervasyon akışıyla araç kiralamayı daha güvenli, konforlu ve prestijli hale getirir.
            </p>
            <div className="trust-list">
              <span>
                <ShieldCheck size={18} />
                Periyodik bakımlı araçlar
              </span>
              <span>
                <BadgeCheck size={18} />
                Şeffaf fiyatlandırma
              </span>
              <span>
                <Route size={18} />
                Esnek teslimat seçenekleri
              </span>
            </div>
            <Link className="btn btn-gold" href="/hakkimizda">
              Bizi Daha Yakından Tanıyın
            </Link>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <SectionHeader
            eyebrow="Müşteri yorumları"
            title="Yola çıkmadan önce duyulan güven"
            description="Sakallı01 Rent A Car deneyimini tercih eden müşterilerden kısa notlar."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars" aria-label="5 yıldız">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star fill="currentColor" size={16} key={index} />
                  ))}
                </div>
                <p>“{testimonial.quote}”</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <span className="icon-box">
            <Clock3 size={24} />
          </span>
          <h2>Hayalinizdeki Aracı Dakikalar İçinde Kiralayın</h2>
          <p>
            Sakallı01 Rent A Car ile hızlı, güvenli ve premium araç kiralama deneyimini hemen keşfedin.
          </p>
          <a className="btn btn-gold" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            Hemen Rezervasyon Yap
          </a>
        </div>
      </section>

      <section className="home-logo-band" aria-label="Sakallı01 Rent A Car">
        <div className="container home-logo-band-inner">
          <Image
            src="/image/logo.png"
            alt="Sakallı01 Rent A Car logo"
            width={380}
            height={380}
          />
        </div>
      </section>
    </>
  );
}
