"use client";

import { CalendarDays, CarFront, MapPin, Search } from "lucide-react";

const locations = ["Adana Seyhan", "Yeşiloba Ofis", "Adana Merkez", "Kurumsal Teslimat"];
const classes = ["Tümü", "Ekonomi", "Ekonomi Plus", "Konfor", "Business", "SUV", "Premium"];

function todayInputValue(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

export function SearchForm({ compact = false, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const criteria = {
      pickupLocation: formData.get("pickupLocation"),
      returnLocation: formData.get("returnLocation"),
      pickupDate: formData.get("pickupDate"),
      returnDate: formData.get("returnDate"),
      vehicleClass: formData.get("vehicleClass")
    };

    if (onSearch) {
      onSearch(criteria);
      return;
    }

    const params = new URLSearchParams(criteria);
    window.location.href = `/araclar?${params.toString()}`;
  }

  return (
    <form className={compact ? "rental-form compact" : "rental-form"} onSubmit={handleSubmit}>
      <label>
        <span>
          <MapPin size={16} />
          Alış Lokasyonu
        </span>
        <select name="pickupLocation" defaultValue="Adana Seyhan">
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </label>

      <label>
        <span>
          <MapPin size={16} />
          Teslim Lokasyonu
        </span>
        <select name="returnLocation" defaultValue="Adana Seyhan">
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </label>

      <label>
        <span>
          <CalendarDays size={16} />
          Alış Tarihi
        </span>
        <input name="pickupDate" type="date" defaultValue={todayInputValue(1)} min={todayInputValue()} />
      </label>

      <label>
        <span>
          <CalendarDays size={16} />
          Teslim Tarihi
        </span>
        <input name="returnDate" type="date" defaultValue={todayInputValue(4)} min={todayInputValue(1)} />
      </label>

      <label>
        <span>
          <CarFront size={16} />
          Araç Sınıfı
        </span>
        <select name="vehicleClass" defaultValue="Tümü">
          {classes.map((className) => (
            <option key={className}>{className}</option>
          ))}
        </select>
      </label>

      <button className="btn btn-gold form-submit" type="submit">
        <Search size={18} />
        Araçları Listele
      </button>
    </form>
  );
}
