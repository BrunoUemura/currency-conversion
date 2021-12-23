import './styles/App.scss';
import { products } from "./mock/Product"
import { Product } from './components/Product';

function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          image={product.image}
          attributes={product.attributes}
          review={product.review}
          reviewCount={product.reviewCount}
        />
      ))}
    </div>
  );
}

export default App;
