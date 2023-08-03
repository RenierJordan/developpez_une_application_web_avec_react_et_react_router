import { React, useEffect, useState } from "react";
import "../Styles/ApartmentGrid.css";
import ApartmentCard from "./ApartmentCard.jsx";

function ApartmentGrid() {
  const [apartments, setApartment] = useState([]);

  useEffect(ApartmentFetch, []);

  function ApartmentFetch() {
    fetch("kasa.json")
      .then((response) => response.json())
      .then((res) => setApartment(res));
  }
  return (
    <section>
      {apartments.map((apartment) => (
        <ApartmentCard title={apartment.title} cover={apartment.cover} />
      ))}
    </section>
  );
}

export default ApartmentGrid;
