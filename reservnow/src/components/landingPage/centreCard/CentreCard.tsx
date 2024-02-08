import { FaStar } from "react-icons/fa6";
import {
  IoLocationOutline,
  IoPeopleOutline,
  IoCashOutline,
} from "react-icons/io5";
import "./centreCard.css";
import CentreImgCarousel from "../centreImgCarousel/CentreImgCarousel";
import Link from "next/link";

function CentreCard() {
  return (
    <Link
      href={`/details`}
      style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
    >
      <div className="eventCentreContainer">
        <div className="eventCentreImgContainer">
          <CentreImgCarousel />
        </div>
        <div className="eventCentreContent">
          <div className="title">
            <div style={{ fontSize: "18px" }}>Protea Event Centre</div>
            <div className="rating">
              <FaStar fontSize={18} style={{ paddingRight: "5px" }} /> 0
            </div>
          </div>
          <div className="subTitle">
            <IoLocationOutline fontSize={25} style={{ paddingRight: "10px" }} />
            <div style={{ fontSize: "14px", color: "#999b9e" }}>
              No 24 Lanre Awolokun Street
            </div>
          </div>
          <div className="subTitle">
            <IoPeopleOutline fontSize={25} style={{ paddingRight: "10px" }} />
            <div style={{ fontSize: "14px", color: "#999b9e" }}>200 - 500</div>
          </div>
          <div className="subTitle">
            <IoCashOutline fontSize={25} style={{ paddingRight: "10px" }} />
            <div style={{ fontSize: "14px", color: "#999b9e" }}>₦12000/hr</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CentreCard;
