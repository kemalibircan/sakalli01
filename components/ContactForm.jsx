"use client";

import { Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";

export function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Merhaba, Sakallı01 Rent A Car ile iletişime geçmek istiyorum.",
      `Ad Soyad: ${formData.get("name")}`,
      `Telefon: ${formData.get("phone")}`,
      `E-posta: ${formData.get("email")}`,
      `Mesaj: ${formData.get("message")}`
    ].join("\n");

    window.location.href = buildWhatsAppUrl(message);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Ad Soyad
        <input name="name" type="text" placeholder="Adınızı ve soyadınızı yazın" required />
      </label>
      <label>
        Telefon
        <input name="phone" type="tel" placeholder="+90 5__ ___ __ __" required />
      </label>
      <label>
        E-posta
        <input name="email" type="email" placeholder="ornek@mail.com" required />
      </label>
      <label>
        Mesaj
        <textarea name="message" rows="5" placeholder="Kiralama talebinizi veya sorunuzu yazın" required />
      </label>
      <button className="btn btn-gold" type="submit">
        <Send size={18} />
        Mesaj Gönder
      </button>
    </form>
  );
}
