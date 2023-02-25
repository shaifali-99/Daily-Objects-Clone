import React from "react";

export default function Product(props) {
  return (
    <div className="card">
        <img className="product--image" src={props.url} alt="product image" />
        <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
