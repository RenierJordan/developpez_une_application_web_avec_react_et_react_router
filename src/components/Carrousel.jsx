import React from "react";
import "../Styles/Carrousel.css";

function Carrousel(props) {
  return <img className="carrousel-img" src={props.carrousel} alt="" />;
}

export default Carrousel;
