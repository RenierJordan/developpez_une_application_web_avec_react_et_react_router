import React from "react";
import "../Styles/ApartmentCard.css";

function ApartmentCard(props) {
  return (
    <article>
      <img src={props.cover} />
      <div>{props.title}</div>
    </article>
  );
}

export default ApartmentCard;
