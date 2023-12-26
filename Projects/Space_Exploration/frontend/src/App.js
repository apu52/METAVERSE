import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import EarthHome from "./components/EarthHome";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Events from "./components/Events";
import MercuryHome from "./components/planets/MercuryHome";
import VenusHome from "./components/planets/VenusHome";
import MarsHome from "./components/planets/MarsHome";
import JupiterHome from "./components/planets/JupiterHome";
import SatrunHome from "./components/planets/SatrunHome";
import SendEmail from "./components/SendEmail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/earth" element={<EarthHome />} />
          <Route path="/mercury" element={<MercuryHome />} />
          <Route path="/venus" element={<VenusHome />} />
          <Route path="/mars" element={<MarsHome />} />
          <Route path="/jupiter" element={<JupiterHome />} />
          <Route path="/satrun" element={<SatrunHome />} />
          <Route
            path="/sendEmail/:launchName/:launchTime"
            element={<SendEmail />}
          />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
