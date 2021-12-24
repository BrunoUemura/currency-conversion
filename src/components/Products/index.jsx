import "./styles.scss";
import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { getAllProducts } from "../../services/ProductService";
import { Product } from "../Product";

export const Products = () => {
  const { currency } = useContext(CurrencyContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts(currency.currency);
      setProducts(products);
    })();
  }, [currency]);

  console.log(products);

  return (
    <div className="content">
      {products &&
        !!products.length &&
        products?.map((product, index) => {
          console.log(product);
          return <Product key={index} {...product} />;
        })}
    </div>
  );
};
