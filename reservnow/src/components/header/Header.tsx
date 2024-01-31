"use client";

import React, { useState } from "react";
import "./header.css";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";

function Header() {
  const [userNav, setUserNav] = useState(false);

  const handleUserNavClick = () => {
    setUserNav((prevState) => !prevState);
  };

  return (
    <div className="headerRoot">
      <div className="headerContainer">
        <div>
          <img src="/images/RNL.svg" alt="ReservNow" className="logo" />
        </div>
        <div className="headerSearchBar">
          <div>Anywhere</div>
          <div className="verticalLine"></div>
          <div>Any centre</div>
          <div className="verticalLine"></div>
          <div>No of guests</div>
          <div className="searchBtn">
            <IoSearchOutline fontSize={15} />
          </div>
        </div>
        <div className="userNavContainer">
          <div className="addEventCentre">Add event centre</div>
          <div className="userNav" onClick={handleUserNavClick}>
            <RxHamburgerMenu fontSize={15} />
            <FaCircleUser fontSize={30} />
          </div>
        </div>
      </div>
      {userNav === true && (
        <div className="userActionsPopup">
          <div
            className="userAction"
            style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10%" }}
          >
            Log in
          </div>
          <div className="userAction">Sign Up</div>
          <div className="horinzontalLine"></div>
          <div
            className="userAction"
            style={{
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            Reserve your centre
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
