import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vitalife - Centre de Diagnostic Médical",
  description: "Centre de diagnostic médical moderne offrant des services de qualité en médecine générale, radiologie, cardiologie et analyses médicales.",
  icons: {
    icon: "/assets/topLogo.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
          <Navbar />
          {children}
      </body>
    </html>
  );
}
