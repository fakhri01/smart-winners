import star from "../../assets/img/Star-icon.png";
import flag from "../../assets/img/USA.png";
import alarm2 from "../../assets/img/alarm2.png";
import logo from '../../assets/img/mega-millions-logo-circle.png'
import "./card-three.css";

const CardThree = ({title, value, time}) => {
  
  return (
    <div className="card-three">
      <img className="icon" src={star} alt="Star Icon" />
      <img className="logo" src={logo} alt="Mega Millions Logo" />
      <div className="d-flex flex-column">
        <h4 className="card-title">
          <img src={flag} alt="USA Flag" /> {title}
        </h4>
        <p className="price">${value}</p>
        <p>
          <img src={alarm2} alt="Alarm" /> {time}
        </p>
        <button className="card-btn">Play Now</button>
      </div>
    </div>
  );
};

export default CardThree;
