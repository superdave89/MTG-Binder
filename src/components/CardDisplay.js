import React from "react";

const CardDisplay = ({ card }) => {
  if (!card) {
    return <div>No image available</div>;
  }

  return (
    <div className="ui segment">
      <div>
        {!card.image_uris ? null : (
          <img src={card.image_uris.normal} alt={card.name} />
        )}
      </div>
    </div>
  );
};

export default CardDisplay;
