//This is a place where (1) we can refer back to static json files
import jewelryData from '@/lib/img/jewelry/jewelryWatches.json';
import clothingData from '@/lib/img/clothing/clothing.json';

export type ImageData = {
    src: string;
    alt: string;
};

export type ImageLibrary = Record<string, ImageData[]>;

//for more extensive flattening in deeply-nested situations:
export function flattenImageData(obj: any, prefix= ''): Record<string, ImageData[]> {
    const result: Record<string, ImageData[]> = {};

    for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        //leaf: array of obs with 'src' - this is an image array
        if (
            Array.isArray(value) &&
            value.length > 0 &&
            typeof value[0] === 'object' &&
            'src' in value[0]
        ) {
            result[fullKey] = value as ImageData[];
        }
        //branch: recurse deeper
        else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            Object.assign(result, flattenImageData(value, fullKey));
        }
    }

    return result;
}

export const allImages: ImageLibrary = {
    ...flattenImageData(jewelryData),
    ...flattenImageData(clothingData),
};