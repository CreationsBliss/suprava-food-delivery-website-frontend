import { assets } from "../../assets/assets";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            praesentium odio ducimus laborum ab maxime vitae eum, ea, quo enim
            suscipit, eligendi architecto voluptate. Totam!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-567-8911</li>
            <li>info@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
