import { getImagesForCategory, getPlaceholderImage } from "@/lib/img/simpleImageLibrary";
import { ImageData } from "@/components/JsonImage";

export interface AudienceData {
    label: string;
    realImages: ImageData[];
    displayImages: ImageData[];
}

export async function getAudienceData(audience: string): Promise<AudienceData> {
    const label = audience.charAt(0).toUpperCase() + audience.slice(1);

    const categoryKey = `clothing.${label}`;
    const realImages = getImagesForCategory(categoryKey);

    const placeholder = getPlaceholderImage();

    const displayImages = [...realImages.slice(0, 3)];

    while (displayImages.length < 3 && placeholder) {
        displayImages.push(placeholder);
    }

    return {label, realImages, displayImages};
}