import CardOne from "../CardOne";
import img1 from "../../assets/img/resource-1-1.png";
import img2 from "../../assets/img/resource-2-1.png";
import img3 from "../../assets/img/resource-3-1.png";

const TopSection = () => {
  return (
    <section className="top-section mt-4">
        <CardOne
          img={img1}
          title="YOU PICK"
          linkText="Play Now>>"
          text="It’s easy! Pick from over 40 official lottery games you wish to play. Then select your winning numbers."
        />
        <CardOne
          img={img2}
          title="WE BUY"
          linkText="More Details>>"
          text="Once you’ve picked your winning numbers we’ll purchase your ticket on your behalf."
        />
        <CardOne
          img={img3}
          title="YOU WIN"
          linkText="Withdraw My Winnings>>"
          text="When you win, we’ll automatically credit your account the full value of your winnings."
        />
    </section>
  );
};

export default TopSection;
