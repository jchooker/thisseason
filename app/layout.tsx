import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-bootstrap'
import './globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Carousel, {CarouselImage} from '@/components/Carousel';
import { ObjectSize } from '@/lib/utilFunctions';
import JsonImage from '@/components/JsonImage';
import NavbarS from '@/components/Navbar';
import BackgroundWrapper from '@/components/BackgroundWrapper';

const imgUrls: string[] = [
  "https://i.ibb.co/sJ3LhmJZ/1.jpg",
  "https://i.ibb.co/39Hr2f4p/2.webp",
  "https://i.ibb.co/6JW6Rqbx/3.jpg",
  "https://i.ibb.co/fdXZpkHp/4.webp"
]

const sampleImgs: CarouselImage[] = [
  {src: imgUrls[0], alt: 'img1'},
  {src: imgUrls[1], alt: 'img2'},
  {src: imgUrls[2], alt: 'img3'},
  {src: imgUrls[3], alt: 'img4'},
]

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThisSeason: One-Stop for All Everyday Fashion",
  description: "E-Comm Next demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const img1Size: ObjectSize = 'md';
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='bg-antiquewhite-950'>
        <NavbarS />
        <BackgroundWrapper>
          {children}
        </BackgroundWrapper>
          

      </body>
    </html>
  );
}
