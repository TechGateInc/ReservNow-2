import styles from "./page.module.css";
import CentreCard from "@/components/landingPage/centreCard/CentreCard";

export default function Home() {
  return (
    <div className={styles.main}>
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
