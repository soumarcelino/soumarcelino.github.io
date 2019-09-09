import React from 'react';

function Card({ content }) {
  return (
    <div className="Card">
        {content.name} - {content.date}
        {content.description}
    </div>
  );
}

export default Card;
