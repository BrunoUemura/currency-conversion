import "./styles.scss";
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="container">
      <img className="image" src={image} alt={name} />
      <p className="productName">{name}</p>

      <div className="prices">
        <div className="pricesDetails">
          <p className="productOriginalPrice">R$ 749.99</p>
          <p className="productCurrentPrice">{price}</p>
        </div>

        <p className="installments">
          Até 12x de R$ {(price / 12).toFixed(2)} sem juros
        </p>
      </div>

      <div className="reviews">
        <div className="reviewsStars">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <p className="reviewsCount">({reviews})</p>
      </div>

      <p className="productColors">{attributes.colors.length} Colors</p>
    </div>
  );
};
