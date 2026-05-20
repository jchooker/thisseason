export type AudienceSlug = "men" | "women" | "boys" | "girls";

export type CategorySlug = 
| "outerwear"
| "formal"
| "jewelry"
| "shoes"
| "tops"
| "bottoms"
| "accessories";

export type ClothingCategoryPage = {
    audience: AudienceSlug;
    category: CategorySlug;
    title: string;
    description: string;
    heroImage?: string;
};

