import { CSSProperties } from "react";
import { ImageData } from "@/components/JsonImage";

export function printCollectedValues(obj: Record<string, any>[]): void {
    const results = deepCollect(obj);
    console.log(JSON.stringify(results, null, 2));
}

//allows you to keep combining deeper and deeper layers of objects OR arrays
//or mixtures thereof
export function deepCollect(obj: any): Record<string, any>[] {
    //when finding zippable object - zip it
    if (isZippableObject(obj))
        return zipObject(obj);

    //array - recurse into each element
    if (Array.isArray(obj))
        return obj.flatMap(deepCollect);

    //a "leaf" object w/ all primitive values - it IS a collected record
    if (isLeafRecord(obj)) return [obj];

    //object - recurse into each value
    if (typeof obj === 'object' && obj !== null)
        return Object.values(obj).flatMap(deepCollect);

    //primitive: dead end
    return [];
}

//for more extensive flattening in deeply-nested situations:

export function collectAllImages(obj: any): ImageData[] {
    if (Array.isArray(obj)) return obj;
    if (typeof obj === 'object' && obj !== null) {
        return Object.values(obj).flatMap(collectAllImages);
    }
    return [];
}

function isLeafRecord(obj: any): boolean {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false;
    return Object.values(obj).every(v => typeof v !== 'object' || v === null);
}

function isZippableObject(obj: any): boolean {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false;
    const values = Object.values(obj);
    return (
        values.length > 0 &&
        values.every(
            (v) => Array.isArray(v) && v.every((item) => typeof item !== 'object')
        )
    );
}

// Takes { src: ["a", "b"], alt: ["x", "y"] }
// Returns [{ src: "a", alt: "x" }, { src: "b", alt: "y" }]
function zipObject(obj: Record<string, any[]>): Record<string, any>[] {
    const keys = Object.keys(obj);
    const maxLength = Math.max(...keys.map((k) => obj[k].length));
    return Array.from({length: maxLength}, (_, i) => {
        const entry: Record<string, any> = {};
        for (const key of keys) {
            entry[key] = obj[key][i] ?? null;
        }
        return entry;
    })
}

//custom specifications of sizes BEGIN

export type ObjectSize = 'sm' | 'md' | 'lg' | 'full' | 'responsive';

export const getObjectSizeStyles = (size: ObjectSize): CSSProperties => {
    switch(size) {
        case 'sm':
            return {width: '250px', height: '180px'};
        case 'md':
                return {width: '400px', height: '280px'};
        case 'lg':
            return {width: '650px', height: '420px'};
        case 'full':
            return {width: '100%', height: '500px'};
        case 'responsive':
            return {
                width: '50%',
                height: '50%',
                overflow: 'hidden'
            };
        default:
            return {width: '400px', height: '280px'};
    }
};

//custom specifications of sizes END