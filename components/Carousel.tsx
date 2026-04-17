'use client';

import {useEffect, useState} from 'react';
import { getObjectSizeStyles, type ObjectSize } from '@/lib/utilFunctions';

export type CarouselImage = {
    src: string;
    alt: string;
};

type CarouselPosition = 
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

type CarouselProps = {
    images: CarouselImage[];
    position?: CarouselPosition;
    size?: ObjectSize;
    autoProgress?: boolean;
    speed?: number //ms
};

export default function Carousel({
    images,
    position = 'center',
    size = 'lg',
    autoProgress = true,
    speed = 3000,
}: CarouselProps) {
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        if (!autoProgress || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrIndex((prev) => (prev + 1) % images.length);
        }, speed);

        return () => clearInterval(interval);
    }, [autoProgress, speed, images.length]);

    if (!images || images.length === 0) {
        return <div>No image available.</div>;
    }

    const goToPrevious = () => {
        setCurrIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrIndex((prev) => (prev + 1) % images.length);
    };

    const getPositionClass = (position: CarouselPosition): string => {
        switch (position) {
            case 'top-left':
                return 'justify-content-start align-items-start';
            case 'top-center':
                return 'justify-content-center align-items-start';
            case 'top-right':
                return 'justify-content-end align-items-start';
            case 'center-left':
                return 'justify-content-start align-items-center';
            case 'center':
                return 'justify-content-center align-items-center';
            case 'center-right':
                return 'justify-content-end align-items-center';
            case 'bottom-left':
                return 'justify-content-start align-items-end';
            case 'bottom-center':
                return 'justify-content-center align-items-end';
            case 'bottom-right':
                return 'justify-content-end align-items-end';
            default:
                return 'justify-content-center align-items-center';
        }
    }

    return (
        <div className={`d-flex ${getPositionClass(position)} w-100`}>
            <div className='position-relative overflow-hidden rounded shadow'
            style={getObjectSizeStyles(size)}>
                <img src={images[currIndex].src}
                alt={images[currIndex].alt}
                className='w-100 h-100'
                style={{objectFit: 'cover'}} />

                {images.length > 1 && (
                    <>
                        <button
                        type="button"
                        onClick={goToPrevious}
                        className='btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2 pointer-float'
                        aria-label='Previous image'>‹</button>

                        <button
                        type="button"
                        onClick={goToNext}
                        className='btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2 pointer-float'
                        aria-label='Next image'>›</button>

                        <div className='position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2'>
                            {images.map((_, index) => (
                                <button
                                key={index}
                                type="button"
                                onClick={() => setCurrIndex(index)}
                                className={`btn btn-sm rounded-circle p-1 ${
                                    index === currIndex ? 'btn-light' : 'btn-secondary'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                                style={{width: '12px', height: '12px'}}
                                >

                                </button>
                            ))}
                        </div>
                    </>
                )};
            </div>
        </div>
    );
}


