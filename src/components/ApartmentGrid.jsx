import { React, useEffect, useState } from "react";
import "../Styles/ApartmentGrid.css";

import ApartmentCard from "./ApartmentCard.jsx";
import datas from "../data/kasa";

function ApartmentGrid() {
  const [apartments, setApartment] = useState([]);

  useEffect(ApartmentFetch, []);

  function ApartmentFetch() {
    setApartment(datas);
  }
  return (
    <main>
      <section>
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
            id={apartment.id}
          />
        ))}
      </section>
    </main>
  );
}

export default ApartmentGrid;
