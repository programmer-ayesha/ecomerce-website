import BriefProduct from "@/components/Views/BriefProduct";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import BriefLoadingSkeleton from "@/components/ui/BriefLoadingSkeleton";
import LoadingComponent from "@/components/ui/LoadingComponents";
import { addProductFatcherFromSanity, detailOfSingleProductFromSanity } from "@/components/utils/apicalling";
import { allProductFetherFromSanityType, singleProductType } from "@/components/utils/types";
import { Suspense } from "react";

export async function generateStaticParams() {
    const data = await addProductFatcherFromSanity() as allProductFetherFromSanityType;

    if (!data || !data.result) {
        console.error("Failed to fetch or parse data:", data);
        return [];
    }

    return data.result.map((item: singleProductType) => {
        if (!item.slug || !item.slug.current) {
            console.error("Missing slug or slug.current:", item);
            return { slug: "default-slug" }; // Provide a default slug or handle the error as needed
        }
        return { slug: item.slug.current };
    });
}


export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const data = await detailOfSingleProductFromSanity(slug) as allProductFetherFromSanityType;
    

    if (!data || !data.result || data.result.length === 0) {
        console.error("Failed to fetch product details:", data);
        return { title: "Default Title" }; // Provide a default title or handle the error as needed
    }

    return {
        title: data.result[0].productname || "Default Title",
    };
}



const Brief = async ({ params }: { params: { slug: string } }) => {
    return (
        <Suspense fallback={
            <div>
                <BriefLoadingSkeleton />
                <div className="py-4" />
                <LoadingComponent isCarousel={true} cardLimit={3} />
            </div>
        }>
            <Detail slug={params.slug} />
        </Suspense>
    )
}

async function Detail({ slug }: { slug: string }) {
    const [productData, allProductsData] = await Promise.all([
        detailOfSingleProductFromSanity(slug),
        addProductFatcherFromSanity(),
    ]) as [allProductFetherFromSanityType, allProductFetherFromSanityType];

    if (!productData || !productData.result || productData.result.length === 0) {
        console.error("Failed to fetch product data:", productData);
        return <div>Error loading product details.</div>;
    }

    if (!allProductsData || !allProductsData.result) {
        console.error("Failed to fetch all products data:", allProductsData);
        return <div>Error loading related products.</div>;
    }

    return (
        <>
            <BriefProduct product={productData.result[0]} />
            <ProductGridViewer ProductData={allProductsData.result.slice(0, 3)} />
        </>
    );
}export default Brief;