import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, ShieldCheck, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { stats } from "@/lib/data";

export const metadata = {
  title: "Hakkımızda | Sakallı01 Rent A Car",
  description: "Sakallı01 Rent A Car vizyonu, güvenilir hizmet anlayışı ve premium kiralama deneyimi."
};

const values = [
  {
    icon: ShieldCheck,
    title: "Güvenilir Hizmet",
    description: "Teslimat öncesi kontrol edilen, temiz ve bakımlı araçlarla güvenli yolculuklar."
  },
  {
    icon: BadgeCheck,
    title: "Şeffaf Süreç",
    description: "Net fiyatlandırma, anlaşılır kiralama şartları ve hızlı iletişim akışı."
  },
  {
    icon: Award,
    title: "Premium Deneyim",
    description: "Her araç sınıfında prestijli görünüm, konfor ve profesyonel hizmet standardı."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">Hakkımızda</span>
            <h1>Güvenilir, prestijli ve müşteri odaklı araç kiralama</h1>
            <p>
              Sakallı01 Rent A Car, araç kiralama deneyimini yalnızca ulaşım çözümü olarak değil;
              güven, konfor ve prestij sunan profesyonel bir hizmet olarak ele alır.
            </p>
            <Link className="btn btn-gold" href="/iletisim">
              Bizimle İletişime Geçin
            </Link>
          </div>
          <div className="about-media">
            <Image
              src="/image/sections/about-premium.png"
              alt="Sakallı01 Rent A Car premium araç hizmeti"
              width={900}
              height={650}
              priority
            />
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

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Hizmet anlayışımız"
            title="Yolculuğun her anında profesyonel standart"
            description="Kiralama öncesi danışmanlık, teslimat süreci ve destek adımlarında net, hızlı ve güven veren bir deneyim."
          />
          <div className="advantages-grid three">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article className="advantage-card" key={value.title}>
                  <span className="icon-box">
                    <Icon size={24} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section vision-band">
        <div className="container vision-grid">
          <div>
            <span className="eyebrow">Vizyon</span>
            <h2>Modern kiralama deneyimini premium hizmetle buluşturmak</h2>
          </div>
          <p>
            Amacımız, kullanıcıların hızlıca araç seçebildiği, güvenle rezervasyon talebi
            oluşturabildiği ve yolculuğa hazır hissettiği kurumsal bir hizmet standardı sunmak.
          </p>
          <span className="vision-icon">
            <UsersRound size={38} />
          </span>
        </div>
      </section>
    </>
  );
}
