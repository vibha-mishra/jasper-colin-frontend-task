import ProductCard from "@/components/ProductCard/ProductCard";
import './Products.css'
import productsList from "./productsList";

export default function ProductsPage() {
  return (
    <div className="container">
        <div className="productsContainer">
          {productsList?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
}
