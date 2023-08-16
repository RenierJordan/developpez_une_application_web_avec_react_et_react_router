import { React, useState } from "react";
import "../Styles/Carrousel.css";

function Carrousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.carrousel.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(props.carrousel) || length <= 0) {
    return null;
  }

  return (
    <div className="carrousel">
      {length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left chevron"
            onClick={prevSlide}
          ></i>
          <i
            className="fa-solid fa-chevron-right chevron"
            onClick={nextSlide}
          ></i>
          <p className="carrousel-count">
            {current + 1} / {length}
          </p>
        </>
      )}
      {props.carrousel.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="carrousel-img" src={slide} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carrousel;
