import { useEffect, useState } from "react";
import Card from "./components/Card.tsx";
import "./App.css";

type RatingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

function App() {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const renderProducts = () => {
    if (!products) return "Loading";
    if (products.length === 0) return "No products to display!";
    return products.map((product) => (
      <Card key={product.id} product={product} />
    ));
  };

  return <div className="App">{renderProducts()}</div>;
}

export default App;
