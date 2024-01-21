import Header from "@/components/Header";
import Footer from "@/components/Footer";

// FONTS
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/unna/400.css";
import "@fontsource/unna/700.css";

// CSS Styles
import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/comman.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Alonso HHL - Full Stack Web Developer",
  description: "Alonso Huayta fullstack developer portfolio",
  keywords: ["fullstack","developer","porfolio","HTML", "CSS", "Javascript", "Typescript", "React", "nextjs"],
  authors: [
    {
      name: "Alonso",
      url: "alonsohhl.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-background">
        <div className="site-wrapper">
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
      <GoogleAnalytics gaId="G-BZGPRY83XE" />
    </html>
  );
}
