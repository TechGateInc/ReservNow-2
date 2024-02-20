import { FaStar } from "react-icons/fa6";
import {
  IoLocationOutline,
  IoPeopleOutline,
  IoCashOutline,
} from "react-icons/io5";
import "./centreCard.css";
import CentreImgCarousel from "../centreImgCarousel/CentreImgCarousel";
import Link from "next/link";

interface CentreData {
  name: string;
  rating: number;
  location: string;
  capacity: string;
  amount: string;
}

interface CentreCardProps {
  centreData: CentreData;
}

function CentreCard({ centreData }: CentreCardProps) {
  const { name, rating, location, capacity, amount } = centreData;

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
            <div style={{ fontSize: "18px" }}>{name}</div>
            <div className="rating">
              <FaStar fontSize={18} style={{ paddingRight: "5px" }} /> {rating}
            </div>
          </div>
          <div className="subTitle">
            <IoLocationOutline fontSize={25} style={{ paddingRight: "10px" }} />
            <div style={{ fontSize: "14px", color: "#999b9e" }}>{location}</div>
          </div>
          <div className="subTitle">
            <IoPeopleOutline fontSize={25} style={{ paddingRight: "10px" }} />
            <div style={{ fontSize: "14px", color: "#999b9e" }}>{capacity}</div>
          </div>
          <div className="subTitle">
            <IoCashOutline fontSize={25} style={{ paddingRight: "10px" }} />
            <div style={{ fontSize: "14px", color: "#999b9e" }}>
              ₦{amount}/hr
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CentreCard;
