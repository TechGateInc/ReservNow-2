"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Loader from "@/components/host-an-eventcentre/loader/Loader";
import NavBtn from "@/components/host-an-eventcentre/navBtn/NavBtn";
import Overview from "@/components/host-an-eventcentre/overview/Overview";
import AboutEventCentre from "@/components/host-an-eventcentre/aboutEventCentre/AboutEventCentre";
import CentreType from "@/components/host-an-eventcentre/centreType/CentreType";
import Address from "@/components/host-an-eventcentre/address/Address";
import Capacity from "@/components/host-an-eventcentre/capacity/Capacity";
import StandOut from "@/components/host-an-eventcentre/standOut/StandOut";
import AmenitiesPicker from "@/components/host-an-eventcentre/amenitiesPicker/AmenitiesPicker";

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
        {active === "CentreTypePicker" && <CentreType />}
        {active === "LocationPicker" && <Address />}
        {active === "Capacity" && <Capacity />}
        {active === "StandOut" && <StandOut />}
        {active === "AmenityPicker" && <AmenitiesPicker />}
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
