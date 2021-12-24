import './styles/App.scss';
import { Navbar } from './components/Navbar';
import { CurrencyContext } from './context/CurrencyContext';
import { useState } from 'react';
import { Products } from './components/Products';

export default function App() {
  const [currency, setCurrency] = useState({
    currency: "BRL",
    symbol: "R$",
    image: "https://static.coinstats.app/flags/BRL_r.png"
  })

  return (
    <div className="App">
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Navbar />
        <Products />
      </CurrencyContext.Provider >
    </div>
  );
}
