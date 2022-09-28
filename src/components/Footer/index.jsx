import React from "react";
import { Col, Container, Row } from "reactstrap";
import whatsApp from "../../assets/img/social/whatsapp.png";
import facebook from "../../assets/img/social/facebook.png";
import twitter from "../../assets/img/social/twitter.png";
import facebookMessenger from "../../assets/img/social/facebook-messenger.png";
import payment from "../../assets/img/cards/Payment.png";
import payment1 from "../../assets/img/cards/Payment1.png";
import payment2 from "../../assets/img/cards/Payment2.png";
import securityIcon from "../../assets/img/security-icon.png";
import stars from "../../assets/img/stars.png";

const Footer = () => {
  return (
    <footer>
      <img className="footer-stars" src={stars} alt="Footer Background" />
      <Container>
        <Row>
          <Col lg="8" md="8">
            <Row>
              <div className="live-chat mb-1">
                <div>
                  <img src={whatsApp} alt="WhatsApp Logo" />
                </div>
                <div>
                  <h4>Live chat by WhatsApp</h4>
                  <p>Customer Service</p>
                </div>
              </div>
              <Col lg="6" md="6">
                <h3 className="footer-title footer-title-main">
                  USEFULL LINKS
                </h3>
                <ul className="usefull-links">
                  <li className="mobile-link">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Lottery Results & Winners</a>
                  </li>
                  <li>
                    <a href="#">Lottery Promotions</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
                <ul className="usefull-links">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Acceptable Use Policy</a>
                  </li>
                  <li>
                    <a href="#">Website Use Policy</a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>Affiliate program</strong>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg="6" md="6">
                <h3 className="footer-title">SMARTWINNERS</h3>
                <p>
                  The trade name SmartWinners and all content on this website is
                  a copyright of SmartWinners Limited. All rights reserved. We
                  are an independent lottery ticket purchasing service. We are
                  not affiliated with nor are we endorsed by any State
                  sanctioned lottery organization. We make no claims on our site
                  to be such.
                </p>
                <p>
                  Our registered business address is Unit 6158, PO Box 6945,
                  London, W1A 6US, United Kingdom.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg="4" md="4">
            <div className="social-icons">
              <ul className="d-flex mb-3">
                <li className="m-2">
                  <a href="#">
                    <img src={facebook} alt="Facebook Account Link" />
                  </a>
                </li>
                <li className="m-2">
                  <a href="#">
                    <img src={twitter} alt="Twitter Account Link" />
                  </a>
                </li>
                <li className="m-2">
                  <a href="#">
                    <img
                      src={facebookMessenger}
                      alt="Facebook Messenger Link"
                    />
                  </a>
                </li>
              </ul>
              <div>
                <h3 className="footer-title mb-3">PAYMENT METHODS</h3>
                <ul>
                  <li className="mb-2">
                    <img src={payment} alt="Bank Cards" />
                  </li>
                  <li className="mb-2">
                    <img src={payment1} alt="Bank Cards" />
                  </li>
                  <li className="mb-2">
                    <img src={payment2} alt="Bank Cards" />
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title mt-4 mb-3">SECURITY & TRUST</h3>
                <img src={securityIcon} alt="Security & Trust" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
