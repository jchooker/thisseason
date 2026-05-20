'use client';

import { ClickableCard, CardBody, CardTitle } from "@/components/BootstrapClient";
import JsonImage, {ImageData} from "@/components/JsonImage";
import styles from './audience-display.module.css';

interface AudienceDisplayProps {
    label: string;
    realImages: ImageData[];
    displayImages: ImageData[];
}

export default function AudienceDisplay({label, realImages, displayImages}: AudienceDisplayProps) {
    return (
        <>
            <h1 style={{color: '#FAF9F6', filter: 'dropShadow(2px 2px rgba(0,0,0,0.3))'}}>Welcome to {label} section</h1>
            <p>{realImages.length} 'real' images found</p>
            <div className="d-flex row gap-3">
                {displayImages.map((image: ImageData, index: number) => (
                    <ClickableCard onClick={()=>console.log('%%%%%card clicked')} key={index} 
                    className="col-3 shadow"
                    >
                        <CardBody className="d-flex flex-column justify-content-between">
                            <CardTitle className="mt-2">{label}</CardTitle>
                            <JsonImage src={image.src} alt={image.alt} imgStyle={{objectFit: 'cover'}}/>
                        </CardBody>
                    </ClickableCard>
                ))}
                //5013641850 - 8am-4:30p Amber (she checks mychart multiple times a day)
            </div>
        </>
    );
}