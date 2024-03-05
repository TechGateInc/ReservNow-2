"use client";
import "./address.css";
import { useState } from "react";

function Address() {
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleHouseNoChange = (e: any) => setHouseNo(e.target.value);
  const handleStreetEstateChange = (e: any) => setStreet(e.target.value);
  const handleCityChange = (e: any) => setCity(e.target.value);
  const handleStateChange = (e: any) => setState(e.target.value);

  const combinedText = `${houseNo} ${street}, ${city}, ${state}`;

  return (
    <div className="addressRoot">
      <div className="addressContainer">
        <div className="title">Is the Pin in the right spot ?</div>
        <div className="subTitle">
          Your address is only shared with guests after they have made their
          reservation
        </div>
        {showMap === false && (
          <div className="location-form">
            <input
              type="text"
              placeholder="House No."
              value={houseNo}
              onChange={handleHouseNoChange}
            />
            <input
              type="text"
              placeholder="Street and Estate"
              value={street}
              onChange={handleStreetEstateChange}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={handleStateChange}
            />
            <div className="showMapBtn">
              <button
                disabled={
                  houseNo === "" || street === "" || city === "" || state === ""
                }
                onClick={() => setShowMap(true)}
              >
                Show on Map
              </button>
            </div>
          </div>
        )}
        {showMap === true && (
          <div className="mapContainer">
            <div className="addressInput">
              <input type="text" value={combinedText} />
            </div>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2s${combinedText}!5e0!3m2!1sen!2sng!4v1686910536404!5m2!1sen!2sng`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: 20,
                marginTop: -30,
              }}
              title="Google Maps"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Address;
