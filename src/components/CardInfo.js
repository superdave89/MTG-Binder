import React from "react";

const CardInfo = ({ card }) => {
  return (
    <div className="ui segment">
      <ul>
        <li>Name: {card.name}</li>
        <li>Artist: {card.artist}</li>
        <li>Price: ${card.prices ? card.prices.usd : "---"}</li>
      </ul>
    </div>
  );
};

export default CardInfo;
