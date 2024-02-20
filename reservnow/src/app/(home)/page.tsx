"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import CentreCard from "@/components/landingPage/centreCard/CentreCard";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { EventCentreData } from "@/utils/EventCentreData";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [displayCount, setDisplayCount] = useState(4);

  const handleShowMore = () => {
    // Increase the display count by 4
    setDisplayCount((prevCount) => prevCount + 4);
  };

  return (
    <div className={styles.homeRoot}>
      <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <Header />
      </div>
      <div className={styles.landingPageContainer}>
        <div className={styles.container}>
          <div className={styles.cardContainer}>
            {EventCentreData.slice(0, displayCount).map((centreData, index) => (
              <CentreCard key={index} centreData={centreData} />
            ))}
          </div>
          <div className={styles.continueExploring}>
            <p>Continue exploring event centres</p>
            <button onClick={handleShowMore}>Show more</button>
          </div>
        </div>
      </div>
      <div>
        <Footer paddingLeft="80px" paddingRight="80px" />
      </div>
    </div>
  );
}
