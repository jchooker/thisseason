export type Product = {
    id: number;
    name: string;
    brand: string;
    category: string;
    price: number;
    image: string;
    colors: string[];
    size: string[];
    featured?: boolean;
    isBackOrder?: boolean;
};