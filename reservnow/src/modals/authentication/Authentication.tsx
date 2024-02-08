import Signup from "./signup/Signup";
import { AiOutlineClose } from "react-icons/ai";
import "./authentication.css";
import { useState } from "react";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationButton";

function Authentication(props: any) {
  const generateRandomNumber = () => {
    // Generate a random number between 1 and 2
    return Math.floor(Math.random() * 2) + 1;
  };

  const handleButtonClick = () => {
    const randomNumber = generateRandomNumber();

    // Use conditional statement to setSignup or setLogin
    if (randomNumber === 1) {
      props.setSignup(true);
      props.setLogin(false);
      props.setAuth(false);
    } else {
      props.setSignup(false);
      props.setLogin(true);
      props.setAuth(false);
    }
  };

  return props.auth ? (
    <div className="authRoot">
      <div className="authcontainer">
        <div className="cancelBtnContainer">
          <div
            className="cancelBtn"
            onClick={() => {
              props.setAuth(false);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="authHeader">Log in and sign up</div>
        <div className="authTitle">
          Welcome to{" "}
          <img src="/images/RNL.svg" alt="ReservNow" className="logo" />
        </div>
        <div className="formItem">
          <input type="email" className="formInput" placeholder="Email" />
        </div>
        <div className="notice">
          We'll call or text you to confirm your email. Standard messages and
          data rates apply, Privacy Policy and Terms of Service
        </div>
        <AuthenticationButton text="Continue" onClick={handleButtonClick} />
        <div className="or">
          <div className="left-line">
            <hr />
          </div>
          <div className="right-line">
            <hr />
          </div>
          <p>or</p>
        </div>
        <div className="with">
          <div className="withGoogle">
            <img
              src="/images/google.png"
              alt="ReservNow"
              className="continueWith"
            />
            <div>Continue with Google</div>
            <div></div>
          </div>
          <div className="withGoogle">
            <img
              src="/images/apple.png"
              alt="ReservNow"
              className="continueWith"
            />
            <div>Continue with Apple</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Authentication;
