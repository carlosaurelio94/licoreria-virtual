import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { ProductDetail } from "./ProductDetail";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Page(props: PageProps<"/producto/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
