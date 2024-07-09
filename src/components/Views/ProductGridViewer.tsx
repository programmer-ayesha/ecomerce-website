import * as React from "react";
import { singleProductType } from "../utils/types";
import ProductCard from "../ui/ProductCard";

interface ProductGridViewerProps {
  ProductData: Array<singleProductType> | null | undefined;
}

const ProductGridViewer: React.FC<ProductGridViewerProps> = ({ ProductData }) => {
  if (!ProductData) {
    return <div>No products found</div>;
  }

  return (
    <section className="text-gray-600">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap m-4">
          {ProductData.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridViewer;