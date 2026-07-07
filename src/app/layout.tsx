import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lothair.dev"),
  title: "Lothair Kizardjian — Portfolio",
  description:
    "Software and DevOps engineer at Airbus Geo. Building agent-assisted development tooling. Selected projects and case studies.",
  openGraph: {
    title: "Lothair Kizardjian — Portfolio",
    description:
      "Software and DevOps engineer at Airbus Geo. Building agent-assisted development tooling.",
    url: "https://lothair.dev",
    siteName: "lothair.dev",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lothair Kizardjian — Portfolio",
    description:
      "Software and DevOps engineer at Airbus Geo. Building agent-assisted development tooling.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
