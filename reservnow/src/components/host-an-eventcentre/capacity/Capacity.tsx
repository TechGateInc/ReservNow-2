"use client";
import "./capacity.css";
import { useState, useEffect } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

function Capacity() {
  const [value, setValue] = useState(10);
  const [eventInfo, setEventInfo] = useState("");

  const handleIncrement = () => {
    setValue(value + 10);
  };

  const handleDecrement = () => {
    if (value > 10) {
      setValue(value - 10);
    }
  };

  useEffect(() => {
    if (value >= 0 && value <= 9) {
      setEventInfo("");
    } else if (value >= 10 && value <= 99) {
      setEventInfo(
        "This event centre is suitable for small events <br /> such as small conferences, workshops, or meetings."
      );
    } else if (value >= 100 && value <= 500) {
      setEventInfo(
        "This event centre is suitable for medium sized events <br /> such as conferences, trade shows, or social gatherings."
      );
    } else {
      setEventInfo(
        "This event centre is suitable for large events <br /> such as conventions, concerts, or major conferences."
      );
    }
  }, [value]);

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    // Ensure only numbers are entered
    if (!isNaN(inputValue) && inputValue !== "") {
      setValue(parseInt(inputValue));
    }
  };

  return (
    <div className="capacityRoot">
      <div className="capacityContainer">
        <div className="title">Now, set your event centre capacity</div>
        <div className="subTitle">You can change it anytime</div>
        <div className="capacityInputContainer">
          <div className="top">
            <button
              className="minusController"
              onClick={handleDecrement}
              style={{ cursor: value === 10 ? "not-allowed" : "pointer" }}
              disabled={value <= 10}
            >
              <LuMinus />
            </button>
            <div className="input">
              <input type="text" value={value} onChange={handleChange} />
            </div>
            <button
              className="plusController"
              onClick={handleIncrement}
              style={{ cursor: "pointer" }}
            >
              <LuPlus />
            </button>
          </div>
          <div className="info">
            <span dangerouslySetInnerHTML={{ __html: eventInfo }} />
            {value >= 10 && (
              <HiOutlineInformationCircle
                style={{ marginLeft: "5px", paddingTop: "2px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capacity;
