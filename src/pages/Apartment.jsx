import React from "react";
import { useLocation } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import "../Styles/Apartment.css";

function Apartment() {
  let { state } = useLocation();
  console.log(state);
  let rating = Number(state.rating);
  let [firstname, lastname] = state.host.name.split(" ");

  return (
    <main className="apartment-page">
      <Carrousel carrousel={state.pictures[0]} />
      <div className="apartment__infos">
        <div className="apartment__infos-first">
          <h1>{state.title}</h1>
          <h2>{state.location}</h2>
          <div className="tags">
            {state.tags.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
        </div>
        <div className="apartment__infos-second">
          <div className="user__infos">
            <div className="user__infos-name">
              <p>{firstname}</p>
              <p>{lastname}</p>
            </div>
            <img
              className="user__infos-picture"
              src={state.host.picture}
              alt=""
            />
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <span className={rating >= num ? "fill" : ""}>★</span>
            ))}
          </div>
        </div>
      </div>
      <div className="dropdown__container dropdown__container-apartment">
        <Dropdown title="Description" desc={state.description} />
        <Dropdown title="Equipements" desc={state.equipments} />
      </div>
    </main>
  );
}

export default Apartment;
