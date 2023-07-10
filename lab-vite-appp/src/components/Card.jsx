// ./src/components/StudentCard.jsx
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`${props.src}`} alt="icon" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
