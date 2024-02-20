import "./aboutEventCentre.css";

function AboutEventCentre() {
  return (
    <div className="aboutEventCentreRoot">
      <div className="left">
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>Step 1</p>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Tell us about your place
        </p>
        <p style={{ fontSize: "18px" }}>
          In this step we will ask you which type of property you have and if
          <br /> and if guest will book the entire hall. Then let us know the{" "}
          <br />
          location and how many guest it can contain.
        </p>
      </div>
      <div className="right">
        <img
          src="/images/EventCentre.jpg"
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default AboutEventCentre;
