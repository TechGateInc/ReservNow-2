"use client";

import React, { useState, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./centreImgCarousel.css";

function CentreImgCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="swiper-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={isHovered}
        pagination={true}
      >
        <SwiperSlide>
          <img
            src="/images/EventcentreImg.jpg"
            alt="ReservNow"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>Content 2</SwiperSlide>
        <SwiperSlide>Content 3</SwiperSlide>
        <SwiperSlide>Content 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CentreImgCarousel;
