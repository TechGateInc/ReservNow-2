"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Loader from "@/components/host-an-eventcentre/loader/Loader";
import NavBtn from "@/components/host-an-eventcentre/navBtn/NavBtn";
import Overview from "@/components/host-an-eventcentre/overview/Overview";
import AboutEventCentre from "@/components/host-an-eventcentre/aboutEventCentre/AboutEventCentre";

function hostEventCentre() {
  const [active, setActive] = useState("Overview");

  return (
    <div className={styles.hostEventCentreRoot}>
      <div className={styles.header}>
        <Link href={"/"}>
          <img src="/images/RNL.svg" alt="ReservNow" className="logo" />
        </Link>
        <button>Save & Exit</button>
      </div>
      <div className={styles.content}>
        {active === "Overview" && <Overview />}
        {active === "AboutCentreOverview" && <AboutEventCentre />}
      </div>
      <div>
        <Loader active={active} />
      </div>
      <div className={styles.navBtn}>
        <NavBtn active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default hostEventCentre;
