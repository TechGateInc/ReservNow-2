"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function host() {
  const address = "24 lanre awolokun street, gbagada phase 2";
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 574, { duration: 3 });

    return animation.stop;
  }, []);

  return (
    <div className={styles.hostRoot}>
      <div className={styles.hostHeader}>
        <div className={styles.left}>
          <Link href={"/"}>
            <img
              src="/images/RNL.svg"
              alt="ReservNow"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.right}>
          <div style={{ marginRight: "50px" }}>Ready to Reserv it?</div>
          <Link href={"/venueOwners/host-an-eventcentre"}>
            <button>ReservNow Setup</button>
          </Link>
        </div>
      </div>
      <div className={styles.hostContentContainer}>
        <div className={styles.hostContent}>
          <div className={styles.left}>
            <div
              style={{ color: "#de1261", fontSize: "50px", fontWeight: "bold" }}
            >
              Reserv it.
            </div>
            <div style={{ fontSize: "50px", fontWeight: "800" }}>
              You could earn
            </div>
            <div
              style={{
                fontSize: "80px",
                fontWeight: "800",
                display: "flex",
                alignItems: "center",
              }}
            >
              $<motion.h3>{rounded}</motion.h3>
            </div>
            <div>
              <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
                7 nights
              </span>{" "}
              at an estimated $81 a night
            </div>
          </div>
          <div className={styles.right}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2s${encodeURIComponent(
                address
              )}!5e0!3m2!1sen!2sng!4v1686910536404!5m2!1sen!2sng`}
              width="600"
              height="450"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "20px",
              }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default host;
