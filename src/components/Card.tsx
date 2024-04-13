import { ProductType } from "../App.tsx";
import "./Card.css";

type CardProps = {
  product: ProductType;
};

function Card({ product }: CardProps) {
  console.log(product);
  return (
    <div className="Card">
      <p>
        <img src={product.image} alt={product.title} width="200" height="300" />
      </p>
      <p>{product.category}</p>
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default Card;
