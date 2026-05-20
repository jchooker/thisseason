import { getImageFromJson, getImageUrl } from "@/components/JsonImage";

export type AudienceSlug = "mens" | "womens" | "boys" | "girls"

export type CategorySlug = | "outerwear"
| "formal-wear"
| "jewelry"
| "shoes"
| "tops"
| "bottoms"
| "accessories";

export type Audience = {
    slug: AudienceSlug;
    label: string;
    possessiveLabel: string;
};

export type Category = {
    slug: CategorySlug;
    label: string;
    description: string;
};

export const audiences: Audience[] = [
    {
        slug: "mens",
        label: "Men",
        possessiveLabel: "Men's",
    },
    {
        slug: "womens",
        label: "Women",
        possessiveLabel: "Women's",
    },
    {
        slug: "boys",
        label: "Boys",
        possessiveLabel: "Boys'",
    },
    {
        slug: "girls",
        label: "Girls",
        possessiveLabel: "Girls'",
    },
]

export const categories: Category[] = [
    {
        slug: "outerwear",
        label: "Outerwear",
        description: "Coats, jackets, parkas, and cold-weather layers."
    },
    {
        slug: "formal-wear",
        label: "Formal Wear",
        description: "Dress clothing for formal occasions."
    },
    {
        slug: "jewelry",
        label: "Jewelry and Timepieces",
        description: "Necklaces, bracelets, earrings, timepieces, and other accessories."
    },
    {
        slug: "shoes",
        label: "Shoes",
        description: "Sneakers, boots, dress shoes, and everyday footwear."
    },
    {
        slug: "tops",
        label: "Tops",
        description: "Shirts, tees, blouses, sweaters, and more."
    },
    {
        slug: "bottoms",
        label: "Bottoms",
        description: "Pants, jeans, shorts, skirts, and more."
    },
    {
        slug: "accessories",
        label: "Accessories",
        description: "Bags, belts, hats, scarves, and finishing touches."
    }
]

export const categoryAvailability: Record<AudienceSlug, CategorySlug[]> = {
    mens: [
        "outerwear",
        "formal-wear",
        "jewelry",
        "shoes",
        "tops",
        "bottoms",
        "accessories"
    ],
    womens: [
        "outerwear",
        "formal-wear",
        "jewelry",
        "shoes",
        "tops",
        "bottoms",
        "accessories"
    ],
    boys: [
        "outerwear",
        "formal-wear",
        "shoes",
        "tops",
        "bottoms"
    ],
    girls: [
        "outerwear",
        "formal-wear",
        "jewelry",
        "shoes",
        "tops",
        "bottoms",
        "accessories"
    ]
};

//helper functions
export function getAudienceBySlug(slug: string) {
    return audiences.find((audience) => audience.slug === slug);
}

export function getCategoryBySlug(slug: string) {
    return categories.find((category) => category.slug === slug);
}

export function isCategoryAvailableForAudience(
    audienceSlug: string,
    categorySlug: string
) {
    const audience = getAudienceBySlug(audienceSlug);
    const category = getCategoryBySlug(categorySlug);

    if (!audience || !category) {
        return false;
    }

    return categoryAvailability[audience.slug].includes(category.slug);
}

export function getAvailableCategoriesForAudience(audienceSlug: AudienceSlug) {
    const availableCategorySlugs = categoryAvailability[audienceSlug];

    return categories.filter((category) =>
        availableCategorySlugs.includes(category.slug));
}

export function getAllValidProductRoutes() {
    return audiences.flatMap((audience) =>
    categoryAvailability[audience.slug].map((categorySlug) => ({
        audience: audience.slug,
        category: categorySlug,
    })));
}

export const categoryPageOverrides: Partial<
    Record<AudienceSlug, Partial<Record<CategorySlug, {
        title?: string;
        description?: string;
        heroImage?: string;
        placeholderHeroImage?: string;
    }>>>
    > = {
        womens: {
            "formal-wear": {
                title: "Women's Dresses & Formal Wear",
                description: "Elegant dresses, eveningwear, suits, and occasion pieces.",
                heroImage: getImageUrl("Placeholder"),
            },
            jewelry: {
                title: "Women's Jewelry",
                description: "Necklaces, rings, earrings, bracelets, and more."
            },
        },
        mens: {
            "formal-wear": {
                title: "Men's Suits & Formal Wear",
                description: "Suits, dress shirts, ties, blazers, and formal essentials.",
            }
        }
    }