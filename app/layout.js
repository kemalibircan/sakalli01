import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Sakallı01 Rent A Car | Premium Araç Kiralama",
  description:
    "Sakallı01 Rent A Car ile premium araç seçenekleri, güvenilir hizmet ve avantajlı kiralama çözümlerini keşfedin."
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
