import {notFound} from "next/navigation";
import {
    getAudienceBySlug,
    getCategoryBySlug,
    isCategoryAvailableForAudience,
    getAllValidProductRoutes
} from "@/data/shop";

type ProductCategoryPageProps = {
    params: Promise<{
        audience: string;
        category: string;
    }>;
};

export function generateStaticParams() {
    return getAllValidProductRoutes();
}

export default async function ProductCategoryPage({
    params,
}: ProductCategoryPageProps) {
    const {audience: audienceSlug, category: categorySlug} = await params;

    const audience = getAudienceBySlug(audienceSlug);
    const category = getCategoryBySlug(categorySlug);

    if (!audience || !category) notFound();

    const isAvailable = isCategoryAvailableForAudience(
        audienceSlug,
        categorySlug
    );

    if (!isAvailable) notFound();

    return (
        <main>
            <h1>
                {audience.possessiveLabel} {category.label}
            </h1>

            <p>{category.description}</p>

            <section>
                <h2>Products</h2>
                <p>Product grid goes here later.</p>
            </section>
        </main>
    );
}