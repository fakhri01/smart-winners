import { Container } from "reactstrap";
import CardThree from "../CardThree";
import data from '../../assets/db/db.json'

const PlayOnlineSection = () => {



  return (
    <div className="my-5 upcoming-games-section">
      <h2 style={style}>PLAY UPCOMING LOTTERIES ONLINE</h2>
      <Container fluid>
        <div className="play-online">
          {data.map((item) => (
            <CardThree key={item.id} title={item.title} value={item.value} logo={item.logo} time={item.time} />
          ))}
        </div>
        <div className="text-end mt-2">
          <a href="#">More Details {`>>`}</a>
        </div>
      </Container>
    </div>
  );
};

const style = {
  color: "#fff",
  background: "#F30000",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "24px",
  textAlign: "center",
  borderRadius: "8px",
  paddingTop: "7px",
  paddingBottom: "7px",
};

export default PlayOnlineSection;
