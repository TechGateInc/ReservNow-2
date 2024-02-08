"use client";

import { useState, useEffect } from "react";
import "./userAction.css";

type Props = {
  setUserNav: any;
  setAuth: any;
};

function UserAction({ setUserNav, setAuth }: Props) {
  return (
    // <div className="userActionRoot">
      <div className="userActionsPopup">
        <div
          className="userAction"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10%" }}
          onClick={() => {
            setAuth(true);
            setUserNav(false);
          }}
        >
          Log in
        </div>
        <div
          className="userAction"
          onClick={() => {
            setAuth(true);
            setUserNav(false);
          }}
        >
          Sign Up
        </div>

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
    // </div>
  );
}

export default UserAction;
