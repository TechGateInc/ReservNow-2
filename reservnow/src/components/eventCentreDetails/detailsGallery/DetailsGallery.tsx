import "./detailsGallery.css";
import { TfiGallery } from "react-icons/tfi";

function DetailsGallery() {
  return (
    <div className="detailsGalleryContainer">
      <div className="detailsLeft">
        <img
          src="/images/details.jpg"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="detailsRight">
        <div className="top">
          <div className="left">
            <img
              src="/images/details.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="right">
            <img
              src="/images/details.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="/images/details.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="right">
            <img
              src="/images/details.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="show-all-photos">
        <button>
          <TfiGallery />
          Show all photos
        </button>
      </div>
    </div>
  );
}

export default DetailsGallery;
