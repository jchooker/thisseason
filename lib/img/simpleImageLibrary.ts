import jewelryData from '@/lib/img/jewelry/jewelryWatches.json';
import clothingData from '@/lib/img/clothing/clothing.json';
import {flattenImageData} from '@/lib/img/index';

export type JsonImage = {
    src: string;
    alt: string;
};

export type ImageLibrary = {
    [key: string]: JsonImage[];
};

export const allImages: ImageLibrary = {
    ...flattenImageData(jewelryData),
    ...flattenImageData(clothingData),
};

export function getImageFromJson(
    category: string,
    index: number = 0
): JsonImage | undefined {
    return allImages[category]?.[index] ?? allImages["Placeholder"]?.[0];
}

export function getImagesForCategory(category: string): JsonImage[] {
    const imgArr = allImages[category] ?? [];
    console.log('images for category found: ',imgArr);
    return imgArr;
}

export function getPlaceholderImage(): JsonImage | undefined {
    return allImages["clothing.Placeholder"]?.[0];
}