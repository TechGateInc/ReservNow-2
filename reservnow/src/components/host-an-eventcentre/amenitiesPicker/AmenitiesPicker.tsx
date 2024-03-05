"use client";

import { useState } from "react";
import "./amenitiesPicker.css";
import { AmenitiesData } from "@/utils/AmenitiesData";

interface Amenity {
  text: string;
  fontSize: number;
  category: string;
}

function AmenitiesPicker() {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>([]);

  const toggleAmenity = (category: string, text: string) => {
    const isSelected = selectedAmenities.some(
      (item) => item.category === category && item.text === text
    );
    if (isSelected) {
      setSelectedAmenities((prevState) =>
        prevState.filter(
          (item) => !(item.category === category && item.text === text)
        )
      );
    } else {
      setSelectedAmenities((prevState) => [
        ...prevState,
        {
          category,
          text,
          icon: AmenitiesData.find((item) => item.text === text)?.icon || null,
          fontSize:
            AmenitiesData.find((item) => item.text === text)?.fontSize || 0,
        },
      ]);
    }
  };

  // Get unique categories
  const uniqueCategories = [
    ...new Set(AmenitiesData.map((item) => item.category)),
  ];

  return (
    <div className="amenitiesRoot">
      <div className="amenitiesContainer">
        <div className="title">Tell guests what your place has to offer</div>
        <div className="subTitle">
          You can add more amenities after you publish your listings
        </div>
        {uniqueCategories.map((category) => (
          <div className="content" key={category}>
            <h2>{category}</h2>
            <div className="itemContainer">
              {AmenitiesData.filter((item) => item.category === category)
                .sort((a, b) => a.text.localeCompare(b.text))
                .map((amenity: any) => (
                  <div
                    key={amenity.text}
                    className={
                      selectedAmenities.some(
                        (item) =>
                          item.category === category &&
                          item.text === amenity.text
                      )
                        ? "clicked"
                        : "item"
                    }
                    onClick={() => toggleAmenity(category, amenity.text)}
                  >
                    {amenity.icon && <amenity.icon size={amenity.fontSize} />}{" "}
                    <div style={{paddingLeft: "5px"}}> {amenity.text}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmenitiesPicker;
