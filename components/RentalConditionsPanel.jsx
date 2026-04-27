"use client";

import { Info, ShieldCheck, X } from "lucide-react";
import { rentalConditionDetails } from "@/lib/data";
import { useEffect, useId, useState } from "react";

export function RentalConditionsPanel({ vehicle }) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <article className="info-panel rental-conditions-panel">
      <div className="panel-title-row">
        <h2>Kiralama Şartları</h2>
        <button
          className="icon-button"
          type="button"
          aria-label="Kiralama koşullarını detaylı göster"
          onClick={() => setIsOpen(true)}
        >
          <Info size={18} />
        </button>
      </div>
      <div className="feature-list">
        {vehicle.conditions.map((condition) => (
          <span key={condition}>
            <ShieldCheck size={18} />
            {condition}
          </span>
        ))}
      </div>
      <p className="panel-note">
        Detaylı koşullar, provizyon ve kullanım bilgileri için bilgi ikonuna tıklayın.
      </p>

      {isOpen ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section
            className="conditions-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="modal-title-row">
              <div>
                <span className="eyebrow">{vehicle.name}</span>
                <h2 id={titleId}>Detaylı Kiralama Koşulları</h2>
              </div>
              <button className="icon-button" type="button" aria-label="Modalı kapat" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-highlight-grid">
              <span>
                <strong>{vehicle.dailyKm} km</strong>
                Günlük kullanım hakkı
              </span>
              <span>
                <strong>{vehicle.minLicenseYears}+ yıl</strong>
                Minimum ehliyet süresi
              </span>
              <span>
                <strong>{vehicle.className}</strong>
                Araç sınıfı
              </span>
            </div>

            <div className="modal-terms-grid">
              {rentalConditionDetails.map((term) => (
                <article key={term.title}>
                  <h3>{term.title}</h3>
                  <p>{term.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </article>
  );
}
