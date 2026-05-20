'use client';

//needed as a wrapper for accessing react-bootstrap Card
//sub-components in certain areas
//add clickability here as well?

import {Card as BSCard} from 'react-bootstrap';
import { ReactNode, useState } from 'react';
import styles from '@/components/BootstrapClient.module.css';

export const Card = BSCard;
export const CardBody = BSCard.Body;
export const CardTitle = BSCard.Title;

export const ClickableCard = ({onClick, style, children, ...props}: any) => {

    const [isEntered, setIsEntered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

return (
    <BSCard
        onClick={onClick}
        onMouseEnter={() => setIsEntered(true)}
        onMouseLeave={() => setIsEntered(false)}
        onMouseDown={() => setIsPressed(false)}
        onMouseUp={() => setIsPressed(false)}
        role='button'
        tabIndex={0}
        style={{
            cursor: 'pointer', 
            backgroundColor: 'cornsilk',
            borderColor: 'black',
            transform: isEntered ? 'scale(0.99)' : 'scale(1)',
            opacity: isEntered ? '1' : '0.85',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out',
            ...style}}
        {...props}>
            {children}
    </BSCard>
    //5013646077

);
}