import Link from "next/link";
import { ArrowRight, BadgePercent, CalendarClock, Gem } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { buildWhatsAppUrl, campaigns } from "@/lib/data";

export const metadata = {
  title: "Kampanyalar | Sakallı01 Rent A Car",
  description: "Sakallı01 Rent A Car güncel araç kiralama kampanyaları ve avantajlı fırsatları."
};

const icons = [BadgePercent, CalendarClock, Gem];

export default function CampaignsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            eyebrow="Kampanyalar"
            title="Avantajlı kiralama fırsatları"
            description="Kısa dönem, erken rezervasyon ve uzun dönem ihtiyaçlarınız için premium fiyat avantajları."
          />
        </div>
      </section>

      <section className="section">
        <div className="container campaign-page-grid">
          {campaigns.map((campaign, index) => {
            const Icon = icons[index] || BadgePercent;
            return (
              <article className="campaign-detail-card" key={campaign.title}>
                <span className="icon-box">
                  <Icon size={26} />
                </span>
                <small>{campaign.label}</small>
                <h2>{campaign.title}</h2>
                <p>{campaign.description}</p>
                <a
                  className="btn btn-gold"
                  href={buildWhatsAppUrl(`Merhaba, ${campaign.title} kampanyası hakkında bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Detay Al
                  <ArrowRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="final-cta slim">
        <div className="container final-cta-inner">
          <h2>Kampanyalı araçları hemen değerlendirin</h2>
          <p>Size uygun fırsatı seçin, rezervasyon talebinizi hızlıca iletin.</p>
          <Link className="btn btn-ghost" href="/araclar">
            Araçları İncele
          </Link>
        </div>
      </section>
    </>
  );
}
