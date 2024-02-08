"use client";

import "./review.css";
import { FaStar } from "react-icons/fa6";
import { RatingStar } from "@/components/RatingStar";
import { useState, useEffect } from "react";
import { ReviewData } from "@/utils/ReviewData";

function Review() {
  const [showMoreButtons, setShowMoreButtons] = useState<boolean[]>([]);

  useEffect(() => {
    const buttonsToShow = ReviewData.map((review) => {
      const reviewText = document.querySelector(`#reviewText-${review.id}`);
      if (reviewText && reviewText.scrollHeight > reviewText.clientHeight) {
        return true;
      }
      return false;
    });
    setShowMoreButtons(buttonsToShow);
  }, []);

  return (
    <div className="reviewRoot">
      <div className="reviewHeader">
        <div className="title">Reviews</div>
        <div className="rating">
          <FaStar fontSize={18} style={{ paddingRight: "5px" }} />
          <div style={{ fontSize: "14px" }}>
            5.0 ·<span className="ratingText"> 41 reviews</span>
          </div>
        </div>
      </div>
      <div className="reviewContent">
        {ReviewData.map((review, index) => (
          <div className="reviewCard" key={index}>
            <div className="user">
              <div className="userProfilePic">
                <img
                  src={review.img}
                  alt={`${review.name} profile picture`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="userInfo">
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {review.name}
                </div>
                <div style={{ fontSize: "14px" }}>{review.location}</div>
              </div>
            </div>
            <div className="rating">
              <RatingStar value={review.rating} />
              <div>· {review.date}</div>
            </div>
            <div
              className={`reviewText`}
              id={`reviewText-${review.id}`}
              style={{
                WebkitLineClamp: "3",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {review.review}
            </div>
            {showMoreButtons[index] && (
              <button className="showMoreBtn">Show More</button>
            )}
          </div>
        ))}
      </div>
      <button className="showAllReviews">Show all 41 reviews</button>
    </div>
  );
}

export default Review;
