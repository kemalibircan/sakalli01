import { SearchForm } from "@/components/SearchForm";
import { SectionHeader } from "@/components/SectionHeader";
import { VehicleExplorer } from "@/components/VehicleExplorer";
import { vehicles } from "@/lib/data";

export const metadata = {
  title: "Araçlar | Sakallı01 Rent A Car",
  description: "Sakallı01 Rent A Car araç filosunu sınıf, yakıt, vites ve fiyat aralığına göre inceleyin."
};

export default async function VehiclesPage({ searchParams }) {
  const params = await searchParams;
  const initialClass = params?.vehicleClass || "Tümü";

  return (
    <>
      <section className="page-hero compact-page-hero">
        <div className="container page-hero-grid">
          <SectionHeader
            align="left"
            eyebrow="Araç filosu"
            title="İhtiyacınıza uygun aracı kolayca seçin"
            description="Ekonomi, business, SUV ve premium araç seçeneklerini filtreleyerek hızlıca karşılaştırın."
          />
          <SearchForm compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VehicleExplorer vehicles={vehicles} initialClass={initialClass} />
        </div>
      </section>
    </>
  );
}
