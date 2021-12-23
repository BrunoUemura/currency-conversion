import "./styles.scss";
import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const reviewStars = (review) => {
  const stars = [];

  for (let i = 1; i <= review; i++) {
    if (review % 1 !== 0 && review - i < 1) {
      stars.push(<BsStarFill key={i} />);
      stars.push(<BsStarHalf key={i} />);
      continue;
    }

    stars.push(<BsStarFill key={i} />);
  }

  if (review <= 4) {
    for (let i = 1; i <= 5 - review; i++) {
      stars.push(<BsStar />);
    }
  }

  return stars;
};

export const Product = ({
  name,
  price,
  image,
  attributes,
  review,
  reviewCount,
}) => {
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
        <div className="reviewsStars">{reviewStars(review)}</div>
        <p className="reviewsCount">({reviewCount})</p>
      </div>

      <p className="productColors">{attributes.colors.length} Colors</p>
    </div>
  );
};
