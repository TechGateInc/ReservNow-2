import React from "react";
import "./navBtn.css";

type NavBtnProps = {
  active: string;
  setActive: any;
};

function NavBtn(props: NavBtnProps) {
  return (
    <div className="host-footer">
      {props.active === "Overview" && <div></div>}
      {props.active === "Overview" && (
        <button
          onClick={() => props.setActive("AboutCentreOverview")}
          className="get-started-btn"
        >
          Get started
        </button>
      )}
      {props.active === "AboutCentreOverview" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("Overview")}
        >
          Back
        </button>
      )}
      {props.active === "AboutCentreOverview" && (
        <button
          onClick={() => props.setActive("CentreTypePicker")}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "CentreTypePicker" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("AboutCentreOverview")}
        >
          Back
        </button>
      )}
      {props.active === "CentreTypePicker" && (
        <button
          onClick={(e) => {
            props.setActive("LocationPicker");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "LocationPicker" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("CentreTypePicker")}
        >
          Back
        </button>
      )}
      {props.active === "LocationPicker" && (
        <button
          onClick={(e) => {
            props.setActive("Capacity");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "Capacity" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("LocationPicker")}
        >
          Back
        </button>
      )}
      {props.active === "Capacity" && (
        <button
          onClick={(e) => {
            props.setActive("StandOut");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "StandOut" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("Capacity")}
        >
          Back
        </button>
      )}
      {props.active === "StandOut" && (
        <button
          onClick={(e) => {
            props.setActive("AmenityPicker");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "AmenityPicker" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("StandOut")}
        >
          Back
        </button>
      )}
      {props.active === "AmenityPicker" && (
        <button
          onClick={(e) => {
            props.setActive("UploadGallery");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "UploadGallery" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("AmenityPicker")}
        >
          Back
        </button>
      )}
      {props.active === "UploadGallery" && (
        <button
          onClick={() => props.setActive("NamePicker")}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "NamePicker" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("UploadGallery")}
        >
          Back
        </button>
      )}
      {props.active === "NamePicker" && (
        <button
          onClick={(e) => {
            props.setActive("DescriptionInfo");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "DescriptionInfo" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("NamePicker")}
        >
          Back
        </button>
      )}
      {props.active === "DescriptionInfo" && (
        <button
          onClick={(e) => {
            props.setActive("DescriptionPicker");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "DescriptionPicker" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("DescriptionInfo")}
        >
          Back
        </button>
      )}
      {props.active === "DescriptionPicker" && (
        <button
          onClick={(e) => {
            props.setActive("FinishSetup");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "FinishSetup" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("DescriptionPicker")}
        >
          Back
        </button>
      )}
      {props.active === "FinishSetup" && (
        <button
          onClick={() => props.setActive("PricePicker")}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "PricePicker" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("FinishSetup")}
        >
          Back
        </button>
      )}
      {props.active === "PricePicker" && (
        <button
          onClick={(e) => {
            props.setActive("Legal");
          }}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "Legal" && (
        <button
          className="back-btn"
          onClick={() => props.setActive("PricePicker")}
        >
          Back
        </button>
      )}
      {props.active === "Legal" && (
        <button
          onClick={() => props.setActive("ReviewListings")}
          className="next-btn"
        >
          Next
        </button>
      )}
      {props.active === "ReviewListings" && (
        <button className="back-btn" onClick={() => props.setActive("Legal")}>
          Back
        </button>
      )}
      {props.active === "ReviewListings" && (
        <button onClick={() => props.setActive("")} className="next-btn">
          Next
        </button>
      )}
    </div>
  );
}

export default NavBtn;
