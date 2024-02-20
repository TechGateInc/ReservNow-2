import "./overview.css";

function Overview() {
  return (
    <div className="overviewRoot">
      <div className="left">
        <div className="text">
          It's easy to get <br /> started on ReservNow
        </div>
      </div>
      <div className="right">
        <div className="item">
          <div className="words">
            <div style={{ fontWeight: "bold" }}>1.</div>
            <div className="content" style={{ marginLeft: "30px" }}>
              <div style={{ fontWeight: "bold" }}>Tell us about your space</div>
              <div
                className="subHeader"
                style={{ width: "500px", marginTop: "10px" }}
              >
                Share some basic info, like where it is and the guest it can
                contain
              </div>
            </div>
          </div>
          <div className="image" style={{ height: "100px", width: "100px" }}>
            <img
              src="/images/EventCentre.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className="horinzontalLine"></div>
        <div className="item">
          <div className="words">
            <div style={{ fontWeight: "bold" }}>2.</div>
            <div className="content" style={{ marginLeft: "30px" }}>
              <div style={{ fontWeight: "bold" }}>Make it stand out</div>
              <div
                className="subHeader"
                style={{ width: "500px", marginTop: "10px" }}
              >
                Add five or more photos plus a title and description, we will
                help you out
              </div>
            </div>
          </div>
          <div className="image" style={{ height: "100px", width: "100px" }}>
            <img
              src="/images/Decoration.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className="horinzontalLine"></div>
        <div className="item">
          <div className="words">
            <div style={{ fontWeight: "bold" }}>3.</div>
            <div className="content" style={{ marginLeft: "30px" }}>
              <div style={{ fontWeight: "bold" }}>Finish up and publish</div>
              <div
                className="subHeader"
                style={{ width: "500px", marginTop: "10px" }}
              >
                Set a starting price and publish your listing
              </div>
            </div>
          </div>
          <div className="image" style={{ height: "100px", width: "100px" }}>
            <img
              src="/images/Finishup.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
