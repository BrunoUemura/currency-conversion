/* eslint-disable jsx-a11y/alt-text */
import "./styles.scss";
import React, { useContext } from "react";

import { currencies } from "../../mock/Currency";
import { CurrencyContext } from "../../context/CurrencyContext";

export const Navbar = () => {
  const { setCurrency } = useContext(CurrencyContext);

  const handleCurrencyChange = (event) => {
    const currency = currencies.filter(
      (currency) => event.target.value === currency.currency
    );

    setCurrency(...currency);
  };

  return (
    <div className="navbar">
      <h1 className="navbarTitle">Currency Converter</h1>

      <select
        className="currencyOptions"
        name="selectList"
        onChange={(event) => {
          handleCurrencyChange(event);
        }}
      >
        {currencies.map((curr, index) => (
          <option
            key={index}
            value={curr.currency}
            style={{
              backgroundImage: `url(${curr.image})`,
            }}
          >
            {curr.currency}
          </option>
        ))}
      </select>
    </div>
  );
};
