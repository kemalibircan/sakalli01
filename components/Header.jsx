"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";
import { buildWhatsAppUrl, navLinks } from "@/lib/data";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const bookingHref = buildWhatsAppUrl();

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Sakallı01 Rent A Car ana sayfa">
          <span className="brand-mark">
            <Image src="/image/logo.png" alt="Sakallı01 Rent A Car logo" width={72} height={72} priority />
          </span>
          <span className="brand-copy">
            <span>Sakallı01</span>
            <small>Rent A Car</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
          {navLinks.map((link) => (
            <Link className={isActive(link.href) ? "nav-link active" : "nav-link"} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="btn btn-gold header-cta" href={bookingHref} target="_blank" rel="noreferrer">
          <PhoneCall size={18} />
          Hemen Araç Kirala
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={isOpen ? "mobile-panel open" : "mobile-panel"}>
        <nav className="mobile-nav" aria-label="Mobil menü">
          {navLinks.map((link) => (
            <Link
              className={isActive(link.href) ? "nav-link active" : "nav-link"}
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="btn btn-gold" href={bookingHref} target="_blank" rel="noreferrer">
            <PhoneCall size={18} />
            Hemen Araç Kirala
          </a>
        </nav>
      </div>
    </header>
  );
}
