import React from "react";

const CardInfo = ({ card }) => {
  if (!card) {
    return <div>Please Search for a card...</div>;
  }

  return (
    <div className="ui segment">
      <ul>
        <li>Name: {card.name}</li>
        <li>Artist: {card.artist}</li>
        <li>Price: ${card.usd}</li>
      </ul>
    </div>
  );
};

export default CardInfo;
