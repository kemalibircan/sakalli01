"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { CarCard } from "@/components/CarCard";

export function VehicleExplorer({ vehicles, initialClass = "Tümü" }) {
  const [className, setClassName] = useState(initialClass);
  const [fuel, setFuel] = useState("Tümü");
  const [transmission, setTransmission] = useState("Tümü");
  const [maxPrice, setMaxPrice] = useState(5000);

  const classOptions = ["Tümü", ...new Set(vehicles.map((vehicle) => vehicle.className))];
  const fuelOptions = ["Tümü", ...new Set(vehicles.map((vehicle) => vehicle.fuel))];
  const transmissionOptions = ["Tümü", ...new Set(vehicles.map((vehicle) => vehicle.transmission))];

  const filteredVehicles = useMemo(
    () =>
      vehicles.filter((vehicle) => {
        return (
          (className === "Tümü" || vehicle.className === className) &&
          (fuel === "Tümü" || vehicle.fuel === fuel) &&
          (transmission === "Tümü" || vehicle.transmission === transmission) &&
          vehicle.price <= Number(maxPrice)
        );
      }),
    [className, fuel, maxPrice, transmission, vehicles]
  );

  function resetFilters() {
    setClassName("Tümü");
    setFuel("Tümü");
    setTransmission("Tümü");
    setMaxPrice(5000);
  }

  return (
    <div className="vehicle-explorer">
      <aside className="filter-panel">
        <div className="filter-heading">
          <SlidersHorizontal size={20} />
          <h2>Filtreleme</h2>
        </div>

        <label>
          Araç sınıfı
          <select value={className} onChange={(event) => setClassName(event.target.value)}>
            {classOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Yakıt tipi
          <select value={fuel} onChange={(event) => setFuel(event.target.value)}>
            {fuelOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Vites tipi
          <select value={transmission} onChange={(event) => setTransmission(event.target.value)}>
            {transmissionOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Fiyat aralığı
          <span className="range-value">₺{Number(maxPrice).toLocaleString("tr-TR")} / gün</span>
          <input
            type="range"
            min="1500"
            max="5000"
            step="250"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </label>

        <button className="btn btn-ghost" type="button" onClick={resetFilters}>
          Filtreleri Sıfırla
        </button>
      </aside>

      <div className="vehicle-results">
        <div className="results-topline">
          <span>{filteredVehicles.length} araç listeleniyor</span>
        </div>
        <div className="cars-grid">
          {filteredVehicles.map((vehicle, index) => (
            <CarCard vehicle={vehicle} key={vehicle.slug} priority={index < 2} />
          ))}
        </div>
      </div>
    </div>
  );
}
