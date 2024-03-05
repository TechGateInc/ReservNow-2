"use client";

import "./centreType.css";
import { useState } from "react";
import { CentreTypeData } from "@/utils/CentreTypeData";

function CentreType() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="centreTypeRoot">
      <div className="centreTypeContainer">
        <div className="title">
          What type of centre best describes your Event Centre ?
        </div>
        <div className="itemContainer">
          {CentreTypeData.map((item, index) => (
            <div
              key={index}
              className={`item ${activeItem === index ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CentreType;
