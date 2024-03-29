import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextAuthSessionProvider from "../providers/sessionProvider";
import NextUIProvider from "../providers/nextUiProvider";
import "./globals.css";
import { Link } from "@nextui-org/link";
import { Navbar } from "@/components/navbar";
import { Providers } from "./providers";
const PoppinsFont = Poppins({ weight: ["400", "800"], subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Filmes e séries",
  description: "Aplicativo de filmes e séries gratuitos",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${PoppinsFont.className} min-h-screen`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="w-screen flex">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
