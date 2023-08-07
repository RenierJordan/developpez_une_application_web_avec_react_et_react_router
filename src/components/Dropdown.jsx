import { React, useState } from "react";
import "../Styles/Dropdown.css";

function Dropdown(props) {
  const [IsContentVisible, setIsContentVisible] = useState(false);

  const displayContent = () => {
    setIsContentVisible(!IsContentVisible);
  };
  const desc = props.desc;
  const IsArray = Array.isArray(desc);
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
      {IsContentVisible &&
        (IsArray ? (
          <div className="drowpdown__description">
            <ul>
              {desc.map((equip) => {
                return <li>{equip}</li>;
              })}
            </ul>
          </div>
        ) : (
          <div className="drowpdown__description">{desc}</div>
        ))}
    </div>
  );
}

export default Dropdown;
