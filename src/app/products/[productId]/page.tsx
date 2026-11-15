import React from "react";
import { notFound } from "next/navigation";
import SingleProduct from "@/components/SingleProduct";
import { fetchProductById } from "@/lib/bazar-data";

interface SingleProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const { productId } = await params;
  const product = await fetchProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <SingleProduct product={product} />
    </div>
  );
};

export default SingleProductPage;
