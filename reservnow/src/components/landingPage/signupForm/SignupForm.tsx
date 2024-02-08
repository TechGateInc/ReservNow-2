import React from "react";
import "./signupForm.css";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationButton";

function SignupForm() {
  return (
    <div className="signupForm">
      <div className="topRow">
        <div className="formItem">
          <input type="text" className="formInput" placeholder="First name" />
        </div>
        <div className="formItem">
          <input type="text" className="formInput" placeholder="Last name" />
        </div>
      </div>
      <div className="formItem2">
        <input type="email" className="formInput" placeholder="Email Address" />
      </div>
      <div className="topRow">
        <div className="countryNo">
          <input type="text" className="formInput" value="+ 234" disabled />
        </div>
        <div className="numberContainer">
          <input type="text" className="formInput" placeholder="PhoneNo" />
        </div>
      </div>
      <div className="formItem2">
        <input type="password" className="formInput" placeholder="Password" />
      </div>
      <div className="formItem2">
        <input
          type="password"
          className="formInput"
          placeholder="Confirm Password"
        />
      </div>
      <div className="tos">
        By selecting{" "}
        <b style={{ color: "black", cursor: "default" }}>Agree and Continue</b>,
        i agree to ReservNow's{" "}
        <b>Terms of Service, Payments Terms of Service</b> and{" "}
        <b>Nondiscrimination Policy</b> and acknowledge the{" "}
        <b>Privacy Policy</b>
      </div>
      <AuthenticationButton text="Agree and Continue" />
    </div>
  );
}

export default SignupForm;
