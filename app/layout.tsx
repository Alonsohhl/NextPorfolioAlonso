import Header from "@/components/Header";
import Footer from "@/components/Footer";

// FONTS
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/unna/400.css";
import "@fontsource/unna/700.css";

// CSS Styles
import "@/styles/globals.css";
import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/comman.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'

import ChatBot from "@/components/ui/Chatbot/ChatBot"
// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Alonso HHL - Full Stack Web Developer",
  description: "Alonso Huayta fullstack developer portfolio",
  keywords: ["fullstack", "developer", "porfolio", "HTML", "CSS", "Javascript", "Typescript", "React", "nextjs"],
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
    <ReactQueryClientProvider>
      <html lang="en">
        <body className="page-background">
          <div className="site-wrapper relative">
            <Header />
            {children}
            <ChatBot />
            {/* <Footer /> */}
          </div>
        </body>
        <GoogleTagManager gtmId="GTM-T2BR53XQ" />
      </html>
    </ReactQueryClientProvider>
  );
}
