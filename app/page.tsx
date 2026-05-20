"use client";
import Image from "next/image";
import ImageFromJson from "@/components/JsonImage";
import Carousel, {CarouselImage} from '@/components/Carousel';
import {useRouter} from "next/navigation";
import JsonImage from "@/components/JsonImage";
import {allImages} from "@/lib/img/index";


export default function Home() {
  const router = useRouter();
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

  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">

    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //     </div>
    //   </main>
    // </div>
    <div className='hero-carousel-flex-wrapper row justify-content-center' style={{
            display: 'flex',
            alignItems: 'stretch', //forces children to match height!
            minHeight: '400px',
            maxHeight: '450px',
            overflow: 'hidden'
          }}>
            <section className='left-section col-5' style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '8px'
            }}>
              <button className='image-button' style={{
                flex: '1 1 0',
                minHeight: 0,
                overflow: 'hidden'
              }}> 
              {/* set up new functions to get the proper attributes to ImageFromJson -> JsonImage? */}
                <div className='image-button__imgWrap d-flex justify-content-end align-items-start' id='adHocPos1'>
                  <span className='image-button__label mr-2'>New Arrivals</span>
                  <div className='imageFadeWrap'>
                    <JsonImage src={allImages['jewelryWatches'][0].src} alt={allImages['jewelryWatches'][0].alt} index={0} size='responsive'/>
                  </div>
                </div>
              </button>
              <button className='image-button' style={{ flex: '1 1 0', minHeight: 0, overflow: 'hidden'}}> 
                <div className='image-button__imgWrap d-flex justify-content-end align-items-start'>
                  <span className='image-button__label'>Seasonal</span>
                  <div className='imageFadeWrap'>

                    <JsonImage src={allImages['clothing.Men'][3].src} alt={allImages['clothing.Men'][3].alt} index={2} size='responsive'/>
                  </div>
                </div>
              </button>
              <button className='image-button' style={{ flex: '1 1 0', minHeight: 0, overflow: 'hidden'}} onClick={() => router.push("/shop/girls")}> 
                <div className='image-button__imgWrap d-flex justify-content-end align-items-start' >
                  <span className='image-button__label'>Kids</span>
                  <div className='imageFadeWrap'>
                    <JsonImage src={allImages['clothing.Boys'][0].src} alt={allImages['clothing.Boys'][0].alt} index={0} size='responsive'/>
                  </div>
                </div>
              </button>
            </section>
            <div className='hero-carousel-wrapper col-6'>
              <Carousel images={sampleImgs}></Carousel>
              <div className='hero-overlay'>
                <h1 className='hero-title position-absolute top-20 start-50 translate-middle text-start text-2xl'>
                  Everyday Fashion Starts Here</h1>

              </div>
            </div>
          </div>
  );
}
