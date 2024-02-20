import React from 'react'
import "./loader.css";

type loaderProps = {
    active: string
}
function Loader(props: loaderProps) {
  return (
    <div className="loaderBackground">
        <div
          className={`${"pageLoader"} ${"loaderBackground"} ${
            props.active === "Overview"
              ? "loaderZeroWidth"
              : props.active === "AboutCentreOverview"
              ? "loaderMediumWidth"              
              : props.active === "CentreTypePicker"
              ? "loaderMedium2Width"
              : props.active === "LocationPicker"
              ? "loaderMedium3Width"
              : props.active === "Capacity"
              ? "loaderMedium4Width"
              : props.active === "StandOut"
              ? "loaderMedium5Width"
              : props.active === "AmenityPicker"
              ? "loaderMedium6Width"
              : props.active === "UploadGallery"
              ? "loaderMedium7Width"
              : props.active === "NamePicker"
              ? "loaderMedium8Width"
              : props.active === "DescriptionInfo"
              ? "loaderMedium9Width"
              : props.active === "DescriptionPicker"
              ? "loaderMedium10Width"
              : props.active === "FinishSetup"
              ? "loaderMedium11Width"
              : props.active === "PricePicker"
              ? "loaderMedium12Width"
              : props.active === "Legal"
              ? "loaderMedium13Width"
              : "loaderBackground" // Default loader background style
          }`}
        ></div>
      </div>
  )
}

export default Loader