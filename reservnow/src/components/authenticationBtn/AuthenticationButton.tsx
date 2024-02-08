import React from "react";
import "./authenticationButton.css"

function AuthenticationButton(props: any) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: "#de1261",
        width: "100%",
        border: "none",
        color: "white",
      }}
      className="authenticationBtn"
    >
      {props.text}
    </button>
  );
}

export default AuthenticationButton;
