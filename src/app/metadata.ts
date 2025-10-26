import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "NEUROMRKT",
    "AI Marketing",
    "Agente Virtuale",
    "Automazione Marketing",
    "Marketing IA",
    "Intelligenza Artificiale",
    "Business Automation",
    "Digital Marketing",
    "Content Creation",
    "Social Media Management",
  ],
  authors: [
    {
      name: "NEUROMRKT Team",
      url: "https://neuromarkt.com",
    },
  ],
  creator: "neuromarkt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@neuromarkt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
