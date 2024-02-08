import React from "react";
import "./mainDetailsLeft.css";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { PiMedalThin } from "react-icons/pi";
import EllipsisText from "@/components/ElipsisText";
import { FaWifi, FaRestroom, FaShower, FaChair } from "react-icons/fa";
import { IoCarSport, IoPeople } from "react-icons/io5";
import { BsFillSpeakerFill } from "react-icons/bs";
import { MdSoupKitchen, MdSecurity } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";

function MainDetailsLeft() {
  return (
    <div className="mainDetailsLeftRoot">
      <div className="titleDesc">Telemundo Hotel Centre, Lagos</div>
      <div className="capacity">100 - 150 guest · 2 bathrooms · 5 speakers</div>
      <div className="rating">
        <FaStar fontSize={18} style={{ paddingRight: "5px" }} />
        <div style={{ fontSize: "14px" }}>
          5.0 ·<span className="ratingText">41 reviews</span>
        </div>
      </div>
      <div className="horinzontalLine"></div>
      <div className="host">
        <div className="hostProfilePic"></div>
        <div className="hostInfo">
          <p>Hosted by John Smith</p>
          <span>Been a host for 5 years</span>
        </div>
      </div>
      <div className="horinzontalLine"></div>
      <div>
        <div className="container">
          <PiMedalThin fontSize={30} />
          <div className="text">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>Superhost</p>
            <p style={{ color: "grey", fontSize: "14px" }}>
              Superhosts are experienced, high rated and reliable hosts
            </p>
          </div>
        </div>
        <div className="container">
          <CiLocationOn fontSize={30} />
          <div className="text">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Great Location
            </p>
            <p style={{ color: "grey", fontSize: "14px" }}>
              No 24 Lanre Awolokun, Gbagada Phase 2, Lagos State
            </p>
          </div>
        </div>
        <div className="container">
          <CiCalendar fontSize={30} />
          <div className="text">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Free Cancellation before March 27
            </p>
          </div>
        </div>
      </div>
      <div className="horinzontalLine"></div>
      <div className="otherInfo">
        <EllipsisText maxLines={6} />
      </div>
      <div className="horinzontalLine"></div>
      <div className="amenities">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          What this place offers
        </div>
        <div className="amenitiesList">
          <div className="amenitiesItem">
            <FaWifi fontSize={15} />
            <span style={{ marginLeft: "10px" }}>Wi-Fi</span>
          </div>
          <div className="amenitiesItem">
            <IoPeople fontSize={18} />
            <span style={{ marginLeft: "10px" }}>Staff</span>
          </div>
          <div className="amenitiesItem">
            <FaRestroom fontSize={18} />
            <span style={{ marginLeft: "10px" }}>Restroom</span>
          </div>
          <div className="amenitiesItem">
            <FaShower fontSize={18} />
            <span style={{ marginLeft: "10px" }}>Shower</span>
          </div>
          <div className="amenitiesItem">
            <IoCarSport fontSize={18} />
            <span style={{ marginLeft: "10px" }}>Free parking on premises</span>
          </div>
          <div className="amenitiesItem">
            <BsFillSpeakerFill fontSize={18} />
            <span style={{ marginLeft: "10px" }}>Sound system</span>
          </div>
          <div className="amenitiesItem">
            <MdSoupKitchen fontSize={18} />
            <span style={{ marginLeft: "10px" }}>Catering</span>
          </div>
          <div className="amenitiesItem">
            <MdSecurity fontSize={18} />
            <span style={{ marginLeft: "10px" }}>
              Security and safety measures
            </span>
          </div>
          <div className="amenitiesItem">
            <GiPartyPopper fontSize={20} />
            <span style={{ marginLeft: "10px" }}>
              Decor and equipment rentals
            </span>
          </div>
          <div className="amenitiesItem">
            <FaChair fontSize={15} />
            <span style={{ marginLeft: "10px" }}>Seating Arrangements</span>
          </div>
        </div>
      </div>
      <button className="showAllAmenities">Show all 64 amenities</button>
    </div>
  );
}

export default MainDetailsLeft;
