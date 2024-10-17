import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductList = ({ products }) => {
  return (
    <div className="card-container">
      {/* {products.map((product) => (
        <div key={product.id}>
          <div>
            <h3>{product.price}</h3>
          </div>
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
          </div>
        </div>
      ))} */}

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
