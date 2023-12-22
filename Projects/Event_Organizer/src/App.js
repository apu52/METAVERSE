import "./App.css";
import About from "./components/About";
import ChooseUs from "./components/ChooseUs";
import EventIdea from "./components/EventIdea";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Nav from "./components/Nav";
import PastInfo from "./components/PastInfo";
import Pricing from "./components/Pricing";
import Protfolio from "./components/Protfolio";
import Services from "./components/Services";
import Testmonial from "./components/Testmonial";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <PastInfo />
      <Services />
      <ChooseUs />
      <Protfolio />
      <EventIdea />
      <Testmonial />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
