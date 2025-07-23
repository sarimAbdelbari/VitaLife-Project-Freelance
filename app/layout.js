import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import LoadingScreen from "@/components/layout/loadingScreen";
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
  keywords: "centre médical, diagnostic médical, radiologie, cardiologie, analyses médicales, échographie, médecine générale, centre de santé, imagerie médicale",
  icons: {
    icon: "/assets/topLogo.webp"
  },
  openGraph: {
    title: "Vitalife - Centre de Diagnostic Médical",
    description: "Centre de diagnostic médical moderne offrant des services de qualité en médecine générale, radiologie, cardiologie et analyses médicales.",
    locale: "fr-FR",
    type: "website",
    url: "https://vitalife.dz",
    siteName: "Vitalife",
    images: "/assets/topLogo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
      <LoadingScreen>
          <Navbar />
          {children}
      </LoadingScreen >
      </body>
    </html>
  );
}
