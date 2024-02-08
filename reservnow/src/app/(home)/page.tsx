"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import CentreCard from "@/components/landingPage/centreCard/CentreCard";
import Header from "@/components/header/Header";

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

  return (
    <div className={styles.homeRoot}>
      <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <Header />
      </div>
      <div className={styles.landingPageContainer}>
        <div className={styles.container}>
          <div className={styles.cardContainer}>
            <CentreCard />
          </div>
          <div className={styles.cardContainer}>
            <CentreCard />
          </div>
          <div className={styles.cardContainer}>
            <CentreCard />
          </div>
          <div className={styles.cardContainer}>
            <CentreCard />
          </div>
          <div className={styles.cardContainer}>
            <CentreCard />
          </div>
          <div className={styles.cardContainer}>
            <CentreCard />
          </div>
        </div>
      </div>
    </div>
  );
}
