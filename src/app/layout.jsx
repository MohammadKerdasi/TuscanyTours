import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/Podcast.otf",
  variable: "--font-Podcast",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
  variable: "--font-OpenSans",
  weight: "100 900",
});
const geistMonoTwo = localFont({
  src: "./fonts/OpenSans-Bold.ttf",
  variable: "--font-OpenSansBold",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMonoTwo.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
