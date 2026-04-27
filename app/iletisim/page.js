import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { contactInfo } from "@/lib/data";

export const metadata = {
  title: "İletişim | Sakallı01 Rent A Car",
  description: "Sakallı01 Rent A Car iletişim bilgileri, rezervasyon talep formu ve adres bilgisi."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            eyebrow="İletişim"
            title="Rezervasyon ve bilgi talepleriniz için buradayız"
            description="Araç seçenekleri, fiyatlar ve teslimat detayları için formu doldurun veya doğrudan iletişime geçin."
          />
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <h2>İletişim Bilgileri</h2>
            <div className="contact-list">
              <a href={contactInfo.phoneHref}>
                <Phone size={20} />
                <span>
                  Telefon
                  <strong>{contactInfo.phoneDisplay}</strong>
                </span>
              </a>
              <a href={contactInfo.emailHref}>
                <Mail size={20} />
                <span>
                  E-posta
                  <strong>{contactInfo.email}</strong>
                </span>
              </a>
              <span>
                <MapPin size={20} />
                <span>
                  Adres
                  <strong>{contactInfo.address}</strong>
                </span>
              </span>
            </div>
            <div className="map-placeholder" aria-label="Harita alanı">
              <MapPin size={34} />
              <strong>Sakallı01 Rent A Car</strong>
              <span>İstanbul merkezli premium araç kiralama</span>
            </div>
          </div>

          <div className="contact-panel">
            <h2>İletişim Formu</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
