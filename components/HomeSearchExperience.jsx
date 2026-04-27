"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { CarCard } from "@/components/CarCard";
import { SearchForm } from "@/components/SearchForm";
import { buildWhatsAppUrl, vehicles } from "@/lib/data";

const initialCriteria = {
  pickupLocation: "İstanbul Merkez",
  returnLocation: "İstanbul Merkez",
  pickupDate: "",
  returnDate: "",
  vehicleClass: "Tümü"
};

export function HomeSearchExperience() {
  const [criteria, setCriteria] = useState(initialCriteria);
  const [hasSearched, setHasSearched] = useState(false);
  const resultsRef = useRef(null);

  const filteredVehicles = useMemo(() => {
    if (criteria.vehicleClass === "Tümü") {
      return vehicles;
    }

    return vehicles.filter((vehicle) => vehicle.className === criteria.vehicleClass);
  }, [criteria]);

  function handleSearch(nextCriteria) {
    setCriteria(nextCriteria);
    setHasSearched(true);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Premium araç kiralama</span>
            <h1>Yolculuğunuz Sakallı01 Rent A Car ile Başlasın</h1>
            <p>
              Premium araç seçenekleri, güvenilir hizmet ve avantajlı kiralama çözümleriyle
              konforlu yolculuklara hazır olun.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                Hemen Araç Kirala
              </a>
              <Link className="btn btn-ghost" href="/araclar">
                Filoyu İncele
              </Link>
            </div>
          </div>

          <div className="hero-form-wrap reveal delay-1">
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section
        className={hasSearched ? "section search-results-section visible" : "section search-results-section"}
        id="arama-sonuclari"
        ref={resultsRef}
      >
        <div className="container">
          <div className="search-results-panel">
            <div className="section-split-header">
              <div className="section-header left">
                <span className="eyebrow">Arama sonuçları</span>
                <h2>Seçimlerinize uygun araçlar</h2>
                <p>
                  {criteria.pickupLocation} alış, {criteria.returnLocation} teslim noktası için{" "}
                  {criteria.vehicleClass === "Tümü" ? "tüm araç sınıfları" : criteria.vehicleClass} listeleniyor.
                </p>
              </div>
              <div className="search-chip-group" aria-label="Seçilen filtreler">
                <span>{criteria.pickupDate || "Alış tarihi"}</span>
                <span>{criteria.returnDate || "Teslim tarihi"}</span>
                <span>{criteria.vehicleClass}</span>
              </div>
            </div>

            {filteredVehicles.length > 0 ? (
              <div className="cars-grid">
                {filteredVehicles.map((vehicle, index) => (
                  <CarCard vehicle={vehicle} key={vehicle.slug} priority={index < 2} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>Bu kriterlere uygun araç bulunamadı</h3>
                <p>Farklı bir araç sınıfı seçerek tekrar listeleyebilirsiniz.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
