import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import datas from "../data/kasa";
import "../Styles/Apartment.css";
import Error from "./Error";
import Footer from "../components/Footer";

function Apartment() {
  let userId = useParams();
  let apartment = datas.find((apart) => apart.id === userId.id);
  if (apartment == null) {
    return <Error />;
  } else {
    let rating = Number(apartment.rating);
    let [firstname, lastname] = apartment.host.name.split(" ");

    return (
      <>
        <main className="apartment-page">
          <Carrousel carrousel={apartment.pictures} />
          <div className="apartment__infos">
            <div className="apartment__infos-first">
              <h1>{apartment.title}</h1>
              <h2>{apartment.location}</h2>
              <div className="tags">
                {apartment.tags.map((tag) => (
                  <div key={tag} className="tag">
                    {tag}
                  </div>
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
                  src={apartment.host.picture}
                  alt=""
                />
              </div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span key={num} className={rating >= num ? "fill" : ""}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="dropdown__container dropdown__container-apartment">
            <Dropdown title="Description" desc={apartment.description} />
            <Dropdown title="Equipements" desc={apartment.equipments} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Apartment;
