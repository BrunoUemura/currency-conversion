/* eslint-disable jsx-a11y/alt-text */
import "./styles.scss";
import React, { useContext } from "react";

import { currencies } from "../../mock/Currency";
import { CurrencyContext } from "../../context/CurrencyContext";

export const Navbar = () => {
  const { setCurrency } = useContext(CurrencyContext);

  return (
    <div className="navbar">
      <h1 className="navbarTitle">Currency Converter</h1>

      <select className="currencyOptions" name="selectList">
        {currencies.map((curr, index) => (
          <option
            key={index}
            value={index}
            style={{
              backgroundImage: `url(${curr.image})`,
            }}
            onClick={() => {
              setCurrency(curr);
            }}
          >
            {curr.currency}
          </option>
        ))}
      </select>
    </div>
  );
};
