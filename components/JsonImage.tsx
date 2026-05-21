'use client';

import {useEffect} from 'react';
import jewelryData from '@/lib/img/jewelry/jewelryWatches.json';
import clothingData from '@/lib/img/clothing/clothing.json';
import { getObjectSizeStyles, type ObjectSize } from '@/lib/utilFunctions';
import {printCollectedValues} from '@/lib/utilFunctions';
import { Placeholder } from 'react-bootstrap';
import {allImages, flattenImageData} from '@/lib/img/index';

export default function JsonImage({src, alt, size = 'md', wrapperStyle = {}, imgStyle = {borderRadius: '5px'}, wrapperClass = '', imgClass = ''}: ImageProps) {
    const styles = getObjectSizeStyles(size);
    return (
        <div style={{...styles, ...wrapperStyle}} className={wrapperClass}>
            {/* {images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} />
            ))} */}
            <img src={src} alt={alt} style={imgStyle} className={imgClass}/>
        </div>
    );
};

export type ImageData = {
    src: string;
    alt: string;
}

export type ImageLibrary = 
    // jewelryWatches: JsonImage[];
    //^^went from this to more specific Index Signature seen below - needed to add Helper function
    //^^to access outermost layer
    Record<string, ImageData[]>;

// const jewelryImages: ImageLibrary = jewelryData;
// const clothingImages: ImageLibrary = clothingData;

// const allJewelry = collectAllImages(jewelryImages);
// const allClothing = collectAllImages(clothingImages);

console.log('Available categories', Object.keys(allImages));

// function getImagesFromJson(library: ImageLibrary): JsonImage[] {
//     const keys = Object.keys(library);
//     if (keys.length === 0) return [];
//     //given one top-level key, return its array, otherwise flatten them all
//     return keys.flatMap((key) => library[key]);
// }

type ImageProps = {
    //images: JsonImage[];
    src: string;
    alt: string;
    index?: number;
    size?: ObjectSize;
    wrapperStyle?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
    wrapperClass?: string;
    imgClass?: string;
    autoProgress?: boolean;
    speed?: number //ms
};

// export function ImageFromJson({
//     //category,
//     index = 0,
//     size = 'md',
//     autoProgress = false,
// }: ImageProps) {
//     const styles = getObjectSizeStyles(size);
    //const categoryImages = allImages[category];
    // if (!categoryImages || !categoryImages[index]) return <div>Image not found!</div>
    // const {src: imageUrl, alt: imageAlt} = categoryImages[index];

    // if (!imageUrl) { 
    //     return <div>Image not found</div>
    // }
    // return (
    //     <div style={styles}>
            {/* {images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} />
            ))} */}
            {/* <img src={imageUrl} alt={imageAlt} style={{borderRadius: `5px`}}/>
        </div>
    );
} */}
//slightly repurposed version of ImageFromJson()
export function getImageFromJson(
    category: string,
    index: number = 0
): ImageData | undefined {
    return allImages[category]?.[index];
}

export function getImageUrl(
    category: string,
    index: number = 0
): string | undefined {
    return getImageFromJson(category, index)?.src;
}

//lo-fi unit test
const testData = {
    clothing: {
        Placeholder: [
            {
                src: "https://example.com/placeholder.png",
                alt: "shirtPlaceholder"
            },
        ],
    },
};

console.log(flattenImageData(testData));
console.log(Object.keys(flattenImageData(testData)));