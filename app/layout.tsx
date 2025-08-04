import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import Template from "./template";


const myFont = localFont({ src: './font/ClashDisplay-Variable.woff2' })

export const metadata: Metadata = {
  title: "HULT PRIZE UCK",
  description: "Created by Arjun G",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} light overflow-x-hidden`}
      >
        
        <Template>
          {children}
        </Template>
      </body>
    </html>
  );
}
