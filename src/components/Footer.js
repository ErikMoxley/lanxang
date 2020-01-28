import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => (
  <div className="footerDiv">
    <footer id="footer-container">
      <div className="footerContent">
        <Link className="footerLinks" to="about">
          About
        </Link>
        <Link className="footerLinks" to="careers">
          Careers
        </Link>
        <Link className="footerLinks" to="contact">
          Contact
        </Link>
        <Link className="footerLinks" to="menu">
          Menu
        </Link>
        <Link className="footerLinks" to="promos">
          Promos
        </Link>
        <Link className="footerLinks" to="order">
          Order
        </Link>
      </div>
      <div className="address">
        <p>
          1734 Lakeview Ave, <br />
          Dracut, MA 01826
        </p>
      </div>
      <div className="footerSocial">
        <ul>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </ul>
      </div>
      <div className="footer-copyright">
        <container>
          &copy; {new Date().getFullYear()} Copyright: {"Erik Moxley"}
        </container>
      </div>
    </footer>
  </div>
);

export default Footer;
