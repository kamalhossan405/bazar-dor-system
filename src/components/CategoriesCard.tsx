import React from "react";
import type { IProduct } from "@/type/Product";
import ProductCard from "./ProductCard";

interface CategoriesCardProps {
  product: IProduct;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ product }) => {
  return <ProductCard product={product} />;
};

export default CategoriesCard;
