"use client";

import "./review.css";
import { FaStar } from "react-icons/fa6";
import { RatingStar } from "@/components/RatingStar";
import { useState, useEffect } from "react";
import { ReviewData } from "@/utils/ReviewData";
import Popup from "@/modals/popup/Popup";
import RatingBar from "@/components/ratingBar/RatingBar";
import ReviewFilterSelector from "@/components/ReviewFilterSelector";
import SearchBar from "@/components/searchBar/SearchBar";

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

  const [review, setReview] = useState(false);

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
        {ReviewData.slice(0, 6).map((review, index) => (
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
              <div> · {review.date}</div>
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
      <button className="showAllReviews" onClick={() => setReview(true)}>
        Show all 41 reviews
      </button>
      <Popup trigger={review} setTrigger={setReview} maxWidth="950px">
        <div className="reviewPopup">
          <div className="leftPopup">
            <div className="popupRatingText">
              <FaStar fontSize={40} style={{ paddingRight: "10px" }} />
              <div style={{ fontSize: "35px", fontWeight: "600" }}>4.93</div>
            </div>
            <div className="popupRanking">
              <div className="title">Overall rating</div>
              <RatingBar starCount={5} percentage={50} />
              <RatingBar starCount={4} percentage={30} />
              <RatingBar starCount={3} percentage={10} />
              <RatingBar starCount={2} percentage={0} />
              <RatingBar starCount={1} percentage={0} />
            </div>
          </div>
          <div className="rightPopup">
            <div className="header">
              <div
                className="reviewCount"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                25 Reviews
              </div>
              <ReviewFilterSelector />
            </div>
            <div className="searchBar">
              <SearchBar />
            </div>
            <div
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                width: "100%",
                position: "absolute",
                maxWidth: "555px",
                overflowX: "hidden",
              }}
            >
              {ReviewData.map((review, index) => (
                <div
                  className="reviewCard"
                  key={index}
                  style={{ marginTop: "30px" }}
                >
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
                    <div> · {review.date}</div>
                  </div>
                  <div className={`reviewText`} id={`reviewText-${review.id}`}>
                    {review.review}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Review;
