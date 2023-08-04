import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ApartmentCard.css";

function ApartmentCard(props) {
  return (
    <Link className="apartment-card" to="/apartment" state={props.apartment}>
      <img src={props.cover} />
      <div>{props.title}</div>
    </Link>
  );
}

export default ApartmentCard;
