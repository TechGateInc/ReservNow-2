import "./footer.css";
import { TbWorld } from "react-icons/tb";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

type footerProps = {
  paddingLeft: string;
  paddingRight: string;
};

function Footer(props: footerProps) {
  return (
    <div
      className="footerRoot"
      style={{
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
      }}
    >
      <div className="footerContainer">
        <div className="topSection">
          <div className="left">
            <div className="header">Support</div>
            <div className="item">Help center</div>
            <div className="item">Cancellation options</div>
            <div className="item">Disability support</div>
            <div className="item">Report neighbourhood concern</div>
            <div className="item">Disability support</div>
          </div>
          <div className="middle">
            <div className="header">Hosting</div>
            <div className="item">Reserv your centre</div>
            <div className="item">Hosting resources</div>
            <div className="item">Community forum</div>
            <div className="item">ReservNow for Hosts</div>
          </div>
          <div className="right">
            <div className="header">ReservNow</div>
            <div className="item">Newsroom</div>
            <div className="item">New features</div>
            <div className="item">Gift cards</div>
            <div className="item">Investors</div>
          </div>
          <div></div>
        </div>
        <div className="horinzontalLine"></div>
        <div className="bottomSection">
          <div className="left">
            © 2024 ReservNow, inc. · Terms · Sitemap · Privacy · Your Privacy
            Choices
          </div>
          <div className="right">
            <TbWorld style={{ paddingRight: "5px" }} fontSize={25} />
            <div style={{ fontSize: "14px" }}>
              English (US)
              <span style={{ paddingLeft: "15px", paddingRight: "10px" }}>
                ₦ NGN
              </span>
            </div>
            <FaFacebookSquare style={{ paddingLeft: "5px" }} fontSize={25} />
            <FaInstagramSquare style={{ paddingLeft: "5px" }} fontSize={25} />
            <FaTwitterSquare style={{ paddingLeft: "5px" }} fontSize={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
