import './styles/App.scss';
import { products } from "./mock/Product"
import { Product } from './components/Product';
import { Navbar } from './components/Navbar';
import { CurrencyContext } from './context/CurrencyContext';
import { useState } from 'react';

function App() {
  const [currency, setCurrency] = useState({
    currency: "BRL",
    symbol: "R$",
    image: "https://static.coinstats.app/flags/BRL_r.png"
  })

  return (
    <div className="App">
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Navbar />

        <div className='content'>
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              discount={product.discount}
              image={product.image}
              attributes={product.attributes}
              review={product.review}
              reviewCount={product.reviewCount}
            />
          ))}
        </div>
      </CurrencyContext.Provider >
    </div>
  );
}

export default App;
