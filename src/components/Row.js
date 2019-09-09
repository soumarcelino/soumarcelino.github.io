import React from 'react';
import Card from './Card';

function Row({ data: { title, itens } }) {
  return (
    <div className="Row">
        <h3>{title}</h3>
        {itens.map(data => <Card content={data}/>)}
    </div>
  );
}

export default Row;
