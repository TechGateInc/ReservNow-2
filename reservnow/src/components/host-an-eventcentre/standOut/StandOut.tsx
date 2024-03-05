import "./standOut.css";

function StandOut() {
  return (
    <div className="standoutRoot">
      <div className="left">
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>Step 2</p>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Make your place stand out
        </p>
        <p style={{ fontSize: "18px" }}>
          In this step you will add some of the amenities your place
          <br /> offers, plus five or more photos. Then you'll create a title
          and
          <br />
          description
        </p>
      </div>
      <div className="right">
        <img
          src="/images/Decoration.jpg"
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default StandOut;
