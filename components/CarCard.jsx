"use client";

import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, Luggage, UsersRound } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";

const formatter = new Intl.NumberFormat("tr-TR");

export function CarCard({ vehicle, priority = false }) {
  const message = `Merhaba, ${vehicle.name} için Sakallı01 Rent A Car üzerinden rezervasyon bilgisi almak istiyorum.`;

  return (
    <article className="car-card">
      <Link className="car-media" href={`/araclar/${vehicle.slug}`} aria-label={`${vehicle.name} detayları`}>
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} araç görseli`}
          width={700}
          height={450}
          priority={priority}
        />
        <span>{vehicle.className}</span>
      </Link>
      <div className="car-content">
        <div className="car-title-row">
          <div>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.summary}</p>
          </div>
          <strong>
            ₺{formatter.format(vehicle.price)}
            <small>/gün</small>
          </strong>
        </div>

        <div className="car-specs">
          <span>
            <Fuel size={16} />
            {vehicle.fuel}
          </span>
          <span>
            <Gauge size={16} />
            {vehicle.transmission}
          </span>
          <span>
            <UsersRound size={16} />
            {vehicle.seats} Kişi
          </span>
          <span>
            <Luggage size={16} />
            {vehicle.luggage} Bagaj
          </span>
        </div>

        <div className="card-actions">
          <Link className="btn btn-ghost" href={`/araclar/${vehicle.slug}`}>
            Detayları Gör
          </Link>
          <a className="btn btn-gold" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
            Hemen Kirala
          </a>
        </div>
      </div>
    </article>
  );
}
