import styles from "./page.module.css";
import DetailsGallery from "@/components/eventCentreDetails/detailsGallery/DetailsGallery";
import Header from "@/components/header/Header";
import MainDetailsLeft from "@/components/eventCentreDetails/mainDetailsLeft/MainDetailsLeft";
import BookingForm from "@/components/eventCentreDetails/bookingForm/BookingForm";
import Review from "@/components/eventCentreDetails/review/Review";

function details() {
  return (
    <div className={styles.detailsRoot}>
      <div className={styles.header}>
        <Header />
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
          <div className={styles.bookingForm}>
            <BookingForm />
          </div>
        </div>
        <div className={styles.horinzontalLine}></div>
        <div className={styles.reviewContainer}>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default details;
