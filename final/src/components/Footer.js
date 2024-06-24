import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__wrapper">
        <address className="Footer__wrapper-items">
          <p>
            <FontAwesomeIcon
              className="Footer__wrapper-icon"
              icon={faMapMarker}
            />
            55 Mountain Road, Alaska
          </p>
          <p>
            <FontAwesomeIcon className="Footer__wrapper-icon" icon={faPhone} />
            325 004 321
          </p>
          <p>
            <FontAwesomeIcon
              className="Footer__wrapper-icon"
              icon={faEnvelope}
            />
            mountainshop@mountain.com
          </p>
        </address>
        <div className="Footer__wrapper-items">
          <h4 className="Footer__wrapper-title">About the company</h4>
          <p className="Footer__wrapper-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="Footer__wrapper-links">
            <FontAwesomeIcon
              className="Footer__wrapper-link"
              icon={faFacebook}
              size="2x"
            />
            <FontAwesomeIcon
              className="Footer__wrapper-link"
              icon={faInstagram}
              size="2x"
            />
            <FontAwesomeIcon
              className="Footer__wrapper-link"
              icon={faTwitter}
              size="2x"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
