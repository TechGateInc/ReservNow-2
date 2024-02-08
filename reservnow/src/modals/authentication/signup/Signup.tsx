import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SignupForm from "@/components/landingPage/signupForm/SignupForm";
import "./signup.css"

function Signup(props: any) {
  return props.signup ? (
    <div className="signupRoot">
      <div className="signupcontainer">
        <div className="signupHeader">
          <div
            className="cancelBtn"
            onClick={() => {
              props.setSignup(false);
            }}
          >
            <AiOutlineClose />
          </div>
          <div className="title">Finish signing up</div>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Signup;
