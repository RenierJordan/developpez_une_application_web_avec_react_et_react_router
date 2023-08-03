import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Error.css";

function Error() {
  return (
    <div className="ErrorDiv">
      <p className="Title">404</p>
      <p className="Subtitle">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"}>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;
