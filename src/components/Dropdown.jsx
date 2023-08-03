import { React, useState } from "react";
import "../Styles/Dropdown.css";

function Dropdown(props) {
  const [IsContentVisible, setIsContentVisible] = useState(false);

  const displayContent = () => {
    setIsContentVisible(!IsContentVisible);
  };
  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={displayContent}>
        {props.title}
        {IsContentVisible ? ( //if IsContentVisible
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          //else
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {IsContentVisible && (
        <div className="drowpdown__description">{props.desc}</div>
      )}
    </div>
  );
}

export default Dropdown;
