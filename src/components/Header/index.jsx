import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import logo from "./logo.png";
import whatsApp from "../../assets/img/social/whatsapp.png";
import facebook from "../../assets/img/social/facebook.png";
import twitter from "../../assets/img/social/twitter.png";
import facebookMessenger from "../../assets/img/social/facebook-messenger.png";
import usa from "../../assets/img/USA.png";
import germany from "../../assets/img/Germany.png";
import avatar from "../../assets/img/avatar.png";
import menu from "../../assets/img/menu.png";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [dropwownOpen, setDropdownOpem] = useState(false);
  const [language, setLanguage] = useState("English");
  const [flagName, setFlagName] = useState(usa);
  const [showNav, setShowNav] = useState(false);

  const toggle = () => setDropdownOpem((prevState) => !prevState);
  const toggleNav = () => setShowNav(!showNav);
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="Smart Winners Logo" />
        </div>
        <div className="logout">
          <p>
            Welcome <strong>Roma —</strong> <a href="#">Logout</a>
          </p>
          <p>
            Your balance: <strong>P 0,00</strong>
          </p>
        </div>
        <div className="language">
          <ul>
            <li>
              <img src={facebook} alt="Link to Facebook account" />
            </li>
            <li>
              <img src={twitter} alt="Link to Twitter account" />
            </li>
            <li>
              <img src={facebookMessenger} alt="Link to Facebook Messenger" />
            </li>
            <li>
              <img src={whatsApp} alt="Link to WhatsApp" />
            </li>
          </ul>
          <Dropdown className="dropdown" isOpen={dropwownOpen} toggle={toggle}>
            <DropdownToggle className="dropdown" caret>
              <img src={flagName} alt={flagName} /> {language}
            </DropdownToggle>
            <DropdownMenu container="body">
              <DropdownItem
                onClick={function noRefCheck() {
                  setLanguage("English");
                  setFlagName(usa);
                }}
              >
                <img src={usa} alt="English" />
                English
              </DropdownItem>
              <DropdownItem
                onClick={function noRefCheck() {
                  setLanguage("German");
                  setFlagName(germany);
                }}
              >
                <img src={germany} alt="German" />
                German
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Container fluid>
        <div className="mini-menu">
          <button onClick={toggleNav}>
            <img src={menu} alt="Menu icon" />
          </button>
          <div className="logo">
            <img src={logo} alt="Smart Winners Logo" />
          </div>
          <button>
            <img src={avatar} alt="Avatar" />
          </button>
        </div>
      </Container>
      <nav className={`${showNav ? "show-nav" : ""}`}>
        <ul>
          <li className="active">
            <a href="#">HOME</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">PLAY ALL LOTTERY</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">LOTTERY GROUPS</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">PROMOTIONS</a>
          </li>
          <li>|</li>
        </ul>
        <div className="logo">
          <img src={logo} alt="Smart Winners Logo" />
        </div>

        <a className="myAccount" href="#">
          MY ACCOUNT
        </a>
      </nav>
    </header>
  );
};

export default Header;
