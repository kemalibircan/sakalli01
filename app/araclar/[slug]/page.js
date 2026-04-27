import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Fuel, Gauge, Luggage, UsersRound } from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { RentalConditionsPanel } from "@/components/RentalConditionsPanel";
import { buildWhatsAppUrl, getVehicleBySlug, vehicles } from "@/lib/data";

const formatter = new Intl.NumberFormat("tr-TR");

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Araç Bulunamadı | Sakallı01 Rent A Car"
    };
  }

  return {
    title: `${vehicle.name} Kiralama | Sakallı01 Rent A Car`,
    description: `${vehicle.name} günlük fiyat, teknik özellikler ve kiralama şartlarını inceleyin.`
  };
}

export default async function VehicleDetailPage({ params }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const similarVehicles = vehicles
    .filter((item) => item.slug !== vehicle.slug)
    .filter((item) => item.className === vehicle.className || item.price <= vehicle.price + 900)
    .slice(0, 3);

  const message = `Merhaba, ${vehicle.name} için Sakallı01 Rent A Car üzerinden rezervasyon yapmak istiyorum.`;

  return (
    <>
      <section className="detail-hero">
        <div className="container detail-grid">
          <div className="detail-media">
            <Image src={vehicle.image} alt={`${vehicle.name} araç görseli`} width={1100} height={720} priority />
          </div>
          <div className="detail-copy">
            <span className="eyebrow">{vehicle.className}</span>
            <h1>{vehicle.name}</h1>
            <p>{vehicle.summary}</p>
            <div className="detail-price">
              <span>Günlük fiyat</span>
              <strong>₺{formatter.format(vehicle.price)}</strong>
            </div>
            <div className="detail-spec-grid">
              <span>
                <Fuel size={18} />
                {vehicle.fuel}
              </span>
              <span>
                <Gauge size={18} />
                {vehicle.transmission}
              </span>
              <span>
                <UsersRound size={18} />
                {vehicle.seats} Kişi
              </span>
              <span>
                <Luggage size={18} />
                {vehicle.luggage} Bagaj
              </span>
            </div>
            <a className="btn btn-gold" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
              Rezervasyon Yap
            </a>
          </div>
        </div>
      </section>

      <section className="section detail-info-section">
        <div className="container detail-info-grid">
          <article className="info-panel">
            <h2>Teknik Özellikler</h2>
            <div className="feature-list">
              {vehicle.specs.map((spec) => (
                <span key={spec}>
                  <CheckCircle2 size={18} />
                  {spec}
                </span>
              ))}
            </div>
          </article>
          <RentalConditionsPanel vehicle={vehicle} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-split-header">
            <div className="section-header left">
              <span className="eyebrow">Benzer araçlar</span>
              <h2>Bu seçenekleri de inceleyin</h2>
            </div>
            <Link className="btn btn-ghost" href="/araclar">
              Tüm Araçlar
            </Link>
          </div>
          <div className="cars-grid">
            {similarVehicles.map((item) => (
              <CarCard vehicle={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
