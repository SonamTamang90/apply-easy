import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apply Easy - Streamline Your Job Application Process",
    template: "%s | Apply Easy",
  },
  description:
    "Transform your job search with Apply Easy. Streamline applications, track progress, and land your dream job faster. The ultimate job application management platform for modern professionals.",
  keywords: [
    "job application tracker",
    "job search platform",
    "career management",
    "application tracking system",
    "job hunting tool",
    "employment dashboard",
    "job application organizer",
    "career development platform",
  ],
  authors: [{ name: "Sonam Tamang" }],
  creator: "Sonam Tamang",
  publisher: "Apply Easy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Apply Easy - Streamline Your Job Application Process",
    description:
      "Transform your job search with Apply Easy. Streamline applications, track progress, and land your dream job faster.",
    siteName: "Apply Easy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Easy - Streamline Your Job Application Process",
    description:
      "Transform your job search with Apply Easy. Streamline applications, track progress, and land your dream job faster.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
