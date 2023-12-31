import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AddPlant } from "./components/AddPlant";
import { Footer } from "./components/Footer";
import { PlantDetails } from "./components/PlantDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-plant-care" element={<AddPlant />} />
        <Route path="/plant-details/:id" element={<PlantDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
