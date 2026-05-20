import {ClickableCard, CardBody, CardTitle} from "@/components/BootstrapClient";
import JsonImage, { getImageFromJson } from "@/components/JsonImage";
import ImageFromJson from "@/components/JsonImage";
import {
    getImageFromJson as simpleGetImageFromJson,
    getImagesForCategory,
    getPlaceholderImage
} from '@/lib/img/simpleImageLibrary';
import { getAudienceData } from "./get-audience-data";
import AudienceDisplay from "./audience-display";

//EXPLORE HOW TO:
//1. DIFFERENTIATE THE METHODS OF GETTING IMAGES FROM JSON
//2. CORRECTLY SET UP REACT CONDITIONAL FOR THE PLACEHOLDER VS ACTUAL 
//   PERTINENT IMAGES SCENARIO
//INVESTIGATE:
//1. WHAT MAKES THE 'USE CLIENT' PAGES DIFFERENT, AND HOW THAT WAS BREAKING
//   MY ONE SECTION
//2. WHAT MAKES THE TS VS TSX FILES DIFFERENT

type PageProps = {
    params: {
        audience: string;
    };
};

export default async function Page({params}:PageProps) {

    const {audience} = await params;
    const {label, realImages, displayImages} = await getAudienceData(audience);

    // const availableImages = [0,1,2]
    // .map((index) => ({
    //     index, 
    //     image: getImageFromJson(audience, index),
    // }))
    // .filter((item) => item.image != null);

    //console.log(`Card: ${Card} \nCard.Body: ${Card.Body} \nCard.Title: ${Card.Title} \nImageFromJson: ${ImageFromJson}`);

    return (
        <AudienceDisplay
            label={label}
            realImages={realImages}
            displayImages={displayImages}
             />
    );
    
}