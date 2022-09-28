import "./card-two.css";
import img from "../../assets/img/mega-millions-logo.png";
import alarm1 from "../../assets/img/alarm1.png";
import flag from "../../assets/img/USA.png";

const CardTwo = () => {
  return (
    <div className="card-two">
      <div className="card-header d-flex justify-content-around py-2">
        <div className="logo-wrapper">
          <img src={img} alt="OZ Lotto Logo" />
        </div>
        <div>
          <h4 className="card-title">
            <img src={flag} alt="USA Flag" /> MEGA MILLIONS
          </h4>
          <p className="price">$94 000 000</p>
        </div>
      </div>
      <div className="card-footer bg-primary">
        <button className="card-btn">Play Now</button>
        <p>
          <img src={alarm1} alt="Alarm" /> 1:22:01
        </p>
      </div>
    </div>
  );
};

export default CardTwo;
