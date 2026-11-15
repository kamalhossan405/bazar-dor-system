import React from "react";
import type { IProduct } from "@/type/Product";
import ProductCard from "./ProductCard";

interface DroppedPriceProps {
  product: IProduct;
}

const DroppedPrice: React.FC<DroppedPriceProps> = ({ product }) => {
  return <ProductCard product={product} variant="dropped" />;
};

export default DroppedPrice;
