"use client";

import React, { useState, useEffect } from "react";
import "./header.css";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import UserAction from "@/modals/useraction/UserAction";
import Authentication from "@/modals/authentication/Authentication";
import Signup from "@/modals/authentication/signup/Signup";
import Login from "@/modals/authentication/login/Login";
import Link from "next/link";

function Header(props: any) {
  const [userNav, setUserNav] = useState(false);

  const handleUserNavClick = () => {
    setUserNav((prevState) => !prevState);
  };

  const [auth, setAuth] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (auth || signup || login) {
      // Disable scrolling when auth, signup, or login is true
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when none of auth, signup, or login is true
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      // Restore scrolling to default when component unmounts
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [auth, signup, login]);

  return (
    <div className={`headerRoot`}>
      <div className="headerContainer">
        <Link href={"/"}>
          <img src="/images/RNL.svg" alt="ReservNow" className="logo" />
        </Link>
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
          <Link
            href={`/host`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <div className="addEventCentre">Add event centre</div>
          </Link>
          <div className="userNav" onClick={handleUserNavClick}>
            <RxHamburgerMenu fontSize={15} />
            <FaCircleUser fontSize={30} />
          </div>
        </div>
      </div>
      {userNav === true && (
        <UserAction setUserNav={setUserNav} setAuth={setAuth} />
      )}
      {
        <Authentication
          auth={auth}
          setAuth={setAuth}
          setSignup={setSignup}
          setLogin={setLogin}
        />
      }
      {<Signup signup={signup} setSignup={setSignup} />}
      {<Login login={login} setLogin={setLogin} />}
    </div>
  );
}

export default Header;
