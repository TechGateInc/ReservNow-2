"use client";

import React, { useState } from "react";
import "./mainDetailsLeft.css";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { PiMedalThin } from "react-icons/pi";
import EllipsisText from "@/components/ElipsisText";
import { AmenitiesData } from "@/utils/AmenitiesData";
import Popup from "@/modals/popup/Popup";

type Amenity = {
  icon: any;
  text: string;
  fontSize: number;
  category: string;
};

function MainDetailsLeft() {
  const [amenities, setAmenities] = useState(false);
  const [about, setAbout] = useState(false);

  // Organize data into categories
  const categorizedData: Record<string, Amenity[]> = AmenitiesData.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, Amenity[]>
  ); // Add type assertion here

  // Sort categories alphabetically
  const sortedCategories: string[] = Object.keys(categorizedData).sort();

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
        <div className="hostProfilePic">
          <img
            src="/images/profilePic1.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
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
        <EllipsisText maxLines={6} setAbout={setAbout} />
      </div>
      <Popup trigger={about} setTrigger={setAbout} maxWidth={"650px"}>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px" }}>
          About this place
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum possimus
          nesciunt, veniam exercitationem ex rerum dolorem ea deleniti rem
          pariatur quisquam unde laborum aliquam velit consequuntur, ipsa harum
          numquam nostrum. Alias quibusdam suscipit, praesentium in assumenda
          cum atque nesciunt sapiente omnis debitis expedita perferendis
          incidunt non fugit itaque. Cumque, est. Asperiores quaerat assumenda
          dolore vel iure explicabo quibusdam corrupti dolorem harum. Voluptatum
          asperiores amet, itaque maiores esse consectetur. Incidunt commodi
          iure non, minima error ducimus culpa, quos officiis tempore quasi esse
          tenetur consectetur atque dolore obcaecati earum expedita maiores
          quisquam iste modi illo possimus dolorum molestiae. Illum, rem ratione
          porro accusamus obcaecati autem eveniet qui repellat ipsum incidunt
          temporibus, perferendis voluptates earum. Incidunt sapiente
          repudiandae rem facere nisi placeat, quae, iusto rerum ipsam explicabo
          quaerat ut aliquam doloremque quo? Numquam hic adipisci inventore
          quidem sapiente iste nam molestiae voluptatibus. Ad labore quia esse
          voluptates ipsa sit. Temporibus possimus alias soluta tempore
          consequatur molestiae reiciendis aperiam. Officia eum, quasi
          asperiores iusto mollitia, odit magni aperiam dolorem molestias
          officiis praesentium. Quaerat, illo repellat tempora nihil numquam
          atque accusamus assumenda omnis, dignissimos, laborum repudiandae
          aspernatur quisquam recusandae aut iusto sint? Minus adipisci quis
          quasi modi! Ex accusamus, perferendis commodi ipsam quidem optio
          pariatur?
        </p>
      </Popup>
      <div className="horinzontalLine"></div>
      <div className="amenities">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          What this place offers
        </div>
        <div className="amenitiesList">
          {AmenitiesData.slice(0, 11).map((amenity, index) => (
            <div className="amenitiesItem" key={index}>
              <amenity.icon />
              <span style={{ marginLeft: "10px" }}>{amenity.text}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="showAllAmenities" onClick={() => setAmenities(true)}>
        Show all 64 amenities
      </button>
      <Popup trigger={amenities} setTrigger={setAmenities} maxWidth={"650px"}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          What this place offers
        </div>
        {sortedCategories.map((category, index) => (
          <div key={index}>
            <div className="amenitiesPopupTitle">{category}</div>
            {/* Map through amenities and render each */}
            {categorizedData[category]
              .sort((a, b) => a.text.localeCompare(b.text))
              .map((amenity, idx) => (
                <div>
                  <div className="amenitiesPopupItem" key={idx}>
                    <amenity.icon fontSize={amenity.fontSize} />
                    <span style={{ marginLeft: "10px" }}>{amenity.text}</span>
                  </div>
                  <div className="horinzontalLine"></div>
                </div>
              ))}
          </div>
        ))}
      </Popup>
    </div>
  );
}

export default MainDetailsLeft;
