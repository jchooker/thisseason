import { CSSProperties } from "react";

//custom specifications of sizes BEGIN

export type ObjectSize = 'sm' | 'md' | 'lg' | 'full';

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
        default:
            return {width: '400px', height: '280px'};
    }
};

//custom specifications of sizes END