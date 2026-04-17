import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Carousel, {CarouselImage} from '@/components/Carousel';
import { ObjectSize } from '@/lib/utilFunctions';
import ImageFromJson, { JsonImage } from '@/components/JsonImage';

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
      <body>
        <Navbar />
        <div id='main-body-wrapper'>
          <div className='hero-carousel-flex-wrapper row'>
            <section className='left-section col-4'>
              <button className='image-button'> 
                <div className='image-button__imgWrap d-flex justify-content-end'>
                  <span className='image-button__label'>Jewelry and Timewear</span>
                  <ImageFromJson category='jewelryWatches' index={0} size='sm'/>
                </div>
              </button>
            </section>
            <div className='hero-carousel-wrapper col-5'>
              <Carousel images={sampleImgs}></Carousel>
              <div className='hero-overlay'>
                <h1 className='hero-title position-absolute top-20 start-50 translate-middle text-start text-2xl'>
                  Everyday Fashion Starts Here</h1>

              </div>
            </div>
            <section className='left-section col-3'>
              <button className='image-button'> 
                <div className='image-button__imgWrap'>
                  <ImageFromJson category='jewelryWatches' index={0} size='sm'/>
                </div>
                <span className='image-button__label'>Jewelry and Timewear</span>
              </button>
            </section>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
