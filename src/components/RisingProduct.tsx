import React from "react";
import type { IProduct } from "@/type/Product";
import ProductCard from "./ProductCard";

interface RisingProductProps {
  product: IProduct;
}

const RisingProduct: React.FC<RisingProductProps> = ({ product }) => {
  return <ProductCard product={product} variant="rising" />;
};

export default RisingProduct;
