import React from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import "../Styles/About.css";

let Fiabilite_desc =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
let Respect_desc =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
let Service_desc =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
let Securite_desc =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
function About() {
  return (
    <>
      <Banner image={"about_banner.png"} />
      <div className="dropdown__container">
        <Dropdown title="Fiabilité" desc={Fiabilite_desc} />
        <Dropdown title="Respect" desc={Respect_desc} />
        <Dropdown title="Service" desc={Service_desc} />
        <Dropdown title="Sécurité" desc={Securite_desc} />
      </div>
    </>
  );
}

export default About;
