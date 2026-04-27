import { ExternalLink } from "lucide-react";
import { vehicles } from "@/lib/data";

export const metadata = {
  title: "Görsel Kaynakları | Sakallı01 Rent A Car",
  description: "Sakallı01 Rent A Car sitesinde kullanılan araç görsellerinin kaynak ve lisans bilgileri."
};

export default function ImageCreditsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Görsel kaynakları</span>
            <h2>Araç fotoğrafları ve lisans bilgileri</h2>
            <p>
              Araç kartlarında kullanılan fotoğraflar Wikimedia Commons kaynaklarından indirilmiş,
              web tasarımına uygun olacak şekilde kırpılıp yeniden boyutlandırılmıştır.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container credits-grid">
          {vehicles.map((vehicle) => (
            <article className="credit-card" key={vehicle.slug}>
              <h2>{vehicle.name}</h2>
              <p>{vehicle.imageSource.title}</p>
              <span>Fotoğraf: {vehicle.imageSource.author}</span>
              <span>Lisans: {vehicle.imageSource.license}</span>
              <a href={vehicle.imageSource.url} target="_blank" rel="noreferrer">
                Kaynağı Aç
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
