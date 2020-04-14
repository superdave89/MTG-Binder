import React from "react";

const CardDisplay = ({ card }) => {
  if (!card) {
    return <div>No image available</div>;
  }

  const cardSrc = `https:api.scryfall.com/cards/named/${card.data}`;

  return (
    <div className="ui segment">
      <img src={card.normal} alt={card.name} />
    </div>
  );
};

export default CardDisplay;
