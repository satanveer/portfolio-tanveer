import localFont from "next/font/local";
import "./globals.css";

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
  title: "Tanveer Singh - Full Stack Web Developer & Software Engineer",
  description: "Tanveer Singh is a proficient Full Stack Web Developer with expertise in modern technologies like React, Next.js, JavaScript, and Tailwind CSS. Explore my portfolio, projects, and contact details.",
  keywords: "Tanveer Singh, Full Stack Developer, Web Developer, React Developer, Next.js Developer, JavaScript, Tailwind CSS, Frontend Developer, Portfolio",
  author: "Tanveer Singh",
  robots: "index, follow",
  canonical: "https://satanveer.dev"

};


export default function RootLayout({ children }) {
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
