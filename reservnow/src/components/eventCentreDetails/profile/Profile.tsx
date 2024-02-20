import "./styles.css";
import { FaStar } from "react-icons/fa6";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaShieldHalved } from "react-icons/fa6";

function Profile() {
  return (
    <div className="profileRoot">
      <div className="profileContainer">
        <div className="profilePic">
          <img
            src="/images/profilePic1.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="hostInfo">
          <p>Hosted by John Smith</p>
          <span>Joined in July 2023</span>
        </div>
      </div>
      <div className="reviewIdentity">
        <div className="review">
          <FaStar />
          <div
            style={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#414141",
              marginLeft: "10px",
            }}
          >
            1,626 Reviews
          </div>
        </div>
        <div className="identity" style={{ marginLeft: "20px" }}>
          <BsBookmarkCheckFill />
          <div
            style={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#414141",
              marginLeft: "10px",
            }}
          >
            Identity verified
          </div>
        </div>
      </div>
      <div className="duringevent">
        <span>During your event</span>
        <p>
          For any assistance, we are available 7 days a week , 24 hours a day.{" "}
          <br /> The emergencies will be attended to the moments and other
          inconveniences will be taken care of in a timely manner.
        </p>
      </div>
      <div className="registrationNo">Registration Number: VV-38-4-0098778</div>
      <div className="responseTime">Response time: within an hour</div>
      <button className="contactHostBtn">Contact Host</button>
      <div className="protect">
        <FaShieldHalved fontSize={25}/>
        <p>
          To protect your payment, never transfer money or communicate outside
          of the ReservNow website.
        </p>
      </div>
    </div>
  );
}

export default Profile;
