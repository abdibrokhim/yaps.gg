import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yaps - builder who's also on youtube and x",
  description: "yaps - builder who's also on youtube and x",
  metadataBase: new URL("https://yaps.gg/"),
  keywords: ["ai builder", "youtube creator", "open-source builder", "open-source"],
  
  alternates: {
    canonical: "/",
  },

  authors: [
    {
      name: "Ibrohim Abdivokhidov",
      url: "https://github.com/abdibrokhim",
    },
  ],

  openGraph: {
    title: "yaps - builder who's also on youtube and x",
    description: "yaps - builder who's also on youtube and x",
    type: "website",
    url: "/",
    images: [
      {
        url: "/assets/oc-logo.png",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
  },
  
  icons: {
    icon: '/favicon.ico',
  },

  twitter: {
    card: 'summary_large_image',
    title: "yaps - builder who's also on youtube and x",
    description: "yaps - builder who's also on youtube and x",
    images: ['/assets/oc-logo.png'],
    site: '@abdibrokhim',
    creator: '@abdibrokhim',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  appleWebApp: {
    title: 'yaps',
    statusBarStyle: 'black-translucent',
  },
  
  appLinks: {
    web: {
      url: 'https://yaps.gg',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
