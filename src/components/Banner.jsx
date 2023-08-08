import React from "react";
import "../Styles/Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <img className="banner__img" src={props.image} alt="" />
      <p>{props.text}</p>
    </div>
  );
}

export default Banner;
