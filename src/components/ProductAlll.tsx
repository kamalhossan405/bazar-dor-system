import React from "react";
import type { IProduct } from "@/type/Product";
import ProductCard from "./ProductCard";

interface ProductAlllProps {
  product: IProduct;
}

const ProductAlll: React.FC<ProductAlllProps> = ({ product }) => {
  return <ProductCard product={product} />;
};

export default ProductAlll;
