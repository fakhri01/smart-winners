import CardTwo from "../CardTwo";

const BiggestUpcomingSection = () => {
  return (
    <div className="upcoming-lottery">
      <h2 style={style}>BIGGEST UPCOMING LOTTERY DRAWS</h2>
      <div className="lottery-card-wrapper">
        <CardTwo />
        <CardTwo />
        <CardTwo />
      </div>
    </div>
  );
};

const style = {
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "36px",
  paddingLeft: "0.7rem",
};

export default BiggestUpcomingSection;
