
import ProductList from "./components/products/ProductList";

import { categories } from "./helper/data";
import { products } from "./helper/data";
import "./App.scss";
import HeaderHamburger from "./components/headerHamburger/HeaderHamburger";

function App() {
  console.log(products, categories);
  return (
    <div>
      <HeaderHamburger categories={categories} text="ProductList" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
