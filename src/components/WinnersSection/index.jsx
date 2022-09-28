import { Row, Col } from "reactstrap";
import lottoStar from "../../assets/img/lotto-star.png";
import winners from "../../assets/img/winners.png";
import confetti from "../../assets/img/confetti.png";
import CardFour from "../CardFour";

const WinnersSection = () => {
  return (
    <Row className="winners-section">
      <Col lg="8" md="6" sm="12" xs="12" className="mb-3">
        <h2 className="text-center" style={style}>
          BIGGEST LOTTERY WINNER
        </h2>
        <div className="winners mt-3">
          <h2 className="mt-4">
            <img src={lottoStar} alt="Lotto" /> WON
            <strong>€100 000 000</strong>
          </h2>
          <Row className="mt-4">
            <Col lg="7" md="7" sm="12" xs="12">
              <div className="winner-img-wrapper">
                <img src={winners} alt="Winners" />
                <img src={confetti} alt="Confetti" />
              </div>
              <div className="line"></div>
              <div className="winners-bottom mt-3 d-flex justify-content-center">
                <p className="me-2">UK LOTTO RESULTS: </p>
                <div>
                  <ul className="d-flex">
                    <li>07</li>
                    <li>07</li>
                    <li>07</li>
                    <li>07</li>
                    <li>07</li>
                  </ul>
                  <p>Date: 20.11.2021</p>
                </div>
              </div>
            </Col>
            <Col lg="5" md="5" sm="12" xs="12" className="winner-info">
              <h2>Shaun Vincent a Lottery Winner</h2>
              <p>
                Shaun Vincent, from Barnsley, celebrates his £1,158,038 National
                Lottery win after his cheque presentation at the Cedar Court
                Hotel, Wakefield.
              </p>
              <a href="#">Read the full story</a>
              <button className="card-btn">Play Now</button>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg="4" md="6" sm="12" xs="12" className="latest-winners mb-3">
        <h2 className="text-center" style={style}>
          OUR LATEST WINNERS
        </h2>
        <div className="total-prices mt-3 mb-4">
          <h4>Total prizes paid out</h4>
          <p className="total-amount">US$ 107 233 768</p>
          <p>
            <strong>6 975 146</strong> winning tickets
          </p>
        </div>
        <div className="winners-list">
          <CardFour />
          <CardFour />
          <CardFour />
          <CardFour />
        </div>
      </Col>
    </Row>
  );
};

const style = {
  backgroundColor: "#f30000",
  color: "#fff",
  padding: "10px",
  borderRadius: "8px",
};
export default WinnersSection;
