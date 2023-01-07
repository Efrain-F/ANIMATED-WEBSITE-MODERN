import "../styles/footer.css"
import { IoLogoFirefox } from 'react-icons/io5';
import { AiFillInstagram,AiFillFacebook,AiOutlineTwitter } from 'react-icons/ai';


import { Link } from "react-router-dom";


function Footer() {
  return (
    <section className="footer">
      <footer className="sct-standar home-section footer-section">
        
        <div className="footer-section-top">
          <div className="footer-section-top-logo"><IoLogoFirefox className="footer-section-top-logo-icon"/></div>
          <div className="footer-section-top-nav">
            <Link className="footer-section-top-nav-link" to={"/ANIMATED-WEBSITE-MODERN/"}>About</Link>
            <Link className="footer-section-top-nav-link" to={"/ANIMATED-WEBSITE-MODERN/"}>About</Link>
            <Link className="footer-section-top-nav-link" to={"/ANIMATED-WEBSITE-MODERN"}>About</Link>
            <Link className="footer-section-top-nav-link" to={"/ANIMATED-WEBSITE-MODERN/"}>About</Link>
            <Link className="footer-section-top-nav-link" to={"/ANIMATED-WEBSITE-MODERN/"}>About</Link>
          </div>
        </div>
        <div className="footer-section-bottom">
          <div className="footer-section-bottom-describ">
            <h3>Lorem ipsum dolor</h3>
            <p>T103-00340</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>TEL:04-4038-2402</p>
          </div>
          <div className="footer-section-bottom-contact">
            <div className="footer-section-bottom-contact-redScl">
              <AiFillFacebook className="footer-section-bottom-contact-redScl-icon"/>
              <AiFillInstagram className="footer-section-bottom-contact-redScl-icon"/>
              <AiOutlineTwitter className="footer-section-bottom-contact-redScl-icon"/>
            </div>
            <div className="footer-section-bottom-contact-nav">
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;