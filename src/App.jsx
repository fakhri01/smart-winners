import { Container } from "reactstrap";
import "./App.css";
import banner from "./assets/img/banner.png";
import BiggestUpcomingSection from "./components/BiggestUpcomingSection";
import Header from "./components/Header";
import PlayOnlineSection from "./components/PlayOnline";
import TopSection from "./components/TopSection";
import WinnersSection from "./components/WinnersSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="hero">
        <img src={banner} alt="Sweat Winners Banner" />
      </div>
      <main>
        <Container fluid>
          <TopSection />
          <BiggestUpcomingSection />
          <PlayOnlineSection />
          <WinnersSection />
          <FaqSection />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
