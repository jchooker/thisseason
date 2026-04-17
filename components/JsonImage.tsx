'use client';

import {useEffect, useState} from 'react';
import imageData from '@/lib/img/jewelry/jewelryWatches.json';
import { getObjectSizeStyles, type ObjectSize } from '@/lib/utilFunctions';

export type JsonImage = {
    src: string;
    alt: string;
};

export type ImageLibrary = {
    jewelryWatches: JsonImage[];
};

const allImages: ImageLibrary = imageData;

type ImageProps = {
    //images: JsonImage[];
    category: keyof ImageLibrary;
    index?: number;
    size?: ObjectSize;
    autoProgress?: boolean;
    speed?: number //ms
};

export default function ImageFromJson({
    category,
    index = 0,
    size = 'md',
    autoProgress = false,
}: ImageProps) {
    const styles = getObjectSizeStyles(size);
    const imageUrl = allImages[category][index].src;
    const imageAlt = allImages[category][index].alt;

    if (!imageUrl) {
        return <div>Image not found</div>
    }
    return (
        <div style={styles}>
            {/* {images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} />
            ))} */}
            <img src={imageUrl} alt={imageAlt} style={{borderRadius: `5px`}}/>
        </div>
    );
}