import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, MapPin, Network, Phone, ThumbsUp } from "lucide-react";
import { buildWhatsAppUrl, contactInfo, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Sakallı01 Rent A Car ana sayfa">
            <span className="brand-mark">
              <Image src="/image/logo.png" alt="Sakallı01 Rent A Car logo" width={72} height={72} />
            </span>
            <span className="brand-copy">
              <span>Sakallı01</span>
              <small>Rent A Car</small>
            </span>
          </Link>
          <p>
            Premium araç seçenekleri, güvenilir hizmet anlayışı ve hızlı kiralama çözümleriyle
            yolculuklarınıza değer katar.
          </p>
          <div className="social-links" aria-label="Sosyal medya">
            <a href="#" aria-label="Instagram">
              <Camera size={18} />
            </a>
            <a href="#" aria-label="Facebook">
              <ThumbsUp size={18} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Network size={18} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Menü</h3>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/gorsel-kaynaklari">Görsel Kaynakları</Link>
        </div>

        <div className="footer-column">
          <h3>İletişim</h3>
          <a href={contactInfo.phoneHref}>
            <Phone size={16} />
            {contactInfo.phoneDisplay}
          </a>
          <a href={contactInfo.emailHref}>
            <Mail size={16} />
            {contactInfo.email}
          </a>
          <span>
            <MapPin size={16} />
            {contactInfo.address}
          </span>
        </div>

        <div className="footer-action">
          <h3>Rezervasyon</h3>
          <p>Size uygun aracı dakikalar içinde belirleyin, güvenle yola çıkın.</p>
          <a className="btn btn-gold" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            Hemen Rezervasyon Yap
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Sakallı01 Rent A Car. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
