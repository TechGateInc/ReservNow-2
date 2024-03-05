"use client";

import { useState } from "react";
import styles from "./page.module.css";
import DetailsGallery from "@/components/eventCentreDetails/detailsGallery/DetailsGallery";
import Header from "@/components/header/Header";
import MainDetailsLeft from "@/components/eventCentreDetails/mainDetailsLeft/MainDetailsLeft";
import BookingForm from "@/components/eventCentreDetails/bookingForm/BookingForm";
import Review from "@/components/eventCentreDetails/review/Review";
import { differenceInHours } from "date-fns";
import Location from "@/components/eventCentreDetails/location/Location";
import Profile from "@/components/eventCentreDetails/profile/Profile";
import Footer from "@/components/footer/Footer";

function details() {
  // Set startTime to this time tomorrow
  const [startTime, setStartTime] = useState<Date | null>();

  // Set endTime to one hour after startTime
  const [endTime, setEndTime] = useState<Date | null>();

  const totalHours =
    startTime && endTime ? differenceInHours(endTime, startTime) : 0;

  return (
    <div className={styles.detailsRoot}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <Header />
        </div>
      </div>
      <div className={styles.detailsPageContainer}>
        <div className={styles.title}>Telemundo Hotel Centre</div>
        <div className={styles.detailsGalleryContainer}>
          <DetailsGallery />
        </div>
        <div className={styles.mainDetails}>
          <div className={styles.left}>
            <MainDetailsLeft />
          </div>
          <div
            className={styles.bookingForm}
            style={{ height: totalHours > 0 ? "565px" : "445px" }}
          >
            <BookingForm
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
              totalHours={totalHours}
            />
          </div>
        </div>
        <div className={styles.horinzontalLine}></div>
        <div className={styles.reviewContainer}>
          <Review />
        </div>
        <div className={styles.horinzontalLine}></div>
        <div className={styles.locationContainer}>
          <Location />
        </div>
        <div className={styles.horinzontalLine}></div>
        <div className={styles.profile}>
          <Profile />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer paddingLeft="200px" paddingRight="200px" />
      </div>
    </div>
  );
}

export default details;
