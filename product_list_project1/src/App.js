import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";

import { categories } from "./helper/data";
import { products } from "./helper/data";
import "./App.scss";

function App() {
  console.log(products, categories);
  return (
    <div>
      <Header categories={categories} text="ProductList" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
