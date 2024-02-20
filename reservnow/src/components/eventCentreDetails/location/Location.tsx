import React from "react";
import "./styles.css";

function Location() {
  const address = "24 lanre awolokun street, gbagada phase 2";
  return (
    <div className="location-root">
      <div className="locationHeader">Where you'll be</div>
      <div className="mapLocation">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2s${encodeURIComponent(
            address
          )}!5e0!3m2!1sen!2sng!4v1686910536404!5m2!1sen!2sng`}
          width="600"
          height="450"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "20px",
          }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="mapState">Lagos, Nigeria</div>
    </div>
  );
}

export default Location;
