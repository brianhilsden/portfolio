import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";
import LenisWrapper from "./components/layout/lennisWrapper";
import "./globals.css";
import Navbar from "./components/layout/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Brian Omondi | Portfolio",
  description: "Explore my projects and skills as a Full Stack Software Developer. Discover my journey in building innovative web applications.",
  keywords: "portfolio, full stack developer, software engineer, web development, projects, skills",
  author: "Brian Omondi",

};


export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="https://www.clipartmax.com/png/middle/169-1695923_coder-png-transparent-image-software-developer-icon.png"/>
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LenisWrapper>
            <header><Navbar/></header>
          {children}
          </LenisWrapper>
        </body>
        
      </html>
    </StoreProvider>
  );
}
