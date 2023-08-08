import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ApartmentCard.css";

function ApartmentCard(props) {
  return (
    <Link className="apartment-card" to="/apartment" state={props.apartment}>
      <img src={props.cover} alt="" />
      <div className="apartment-card__title">{props.title}</div>
    </Link>
  );
}

export default ApartmentCard;
