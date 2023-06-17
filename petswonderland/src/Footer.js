import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="NavBoxx">
      <footer className="footer">
        <br />
        <br />
        <div class="footer-content">
          <h5>PetsWonderland</h5>
          <br />
          <div class="footer-info">
            <p>
              <small>1-xxx-xxx-xxxx</small>
            </p>
          </div>
          <div class="footer-info">
            <p>
              <small>12345 Pets Rd, Wonderland, CA 91000</small>
            </p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebookF} />
          {"\xa0\xa0"}
          <FontAwesomeIcon icon={faLinkedin} />
          {" \xa0"}
          <FontAwesomeIcon icon={faTwitterSquare} />
        </div>
        <br /> <br />
        <div class="disclaimer">
          <p>
            <small>
              © 2023 PetsWonderland All right reserved.{" "}
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};
