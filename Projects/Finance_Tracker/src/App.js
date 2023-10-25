import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login";

// Routed
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

const App = () => {

  const {loading} = useSelector(state => state.alerts);
  return (
    <>
    <div style={{
      //background color
        backgroundColor: '#FFD3B0',
      }}>
      {loading && (
        <div className="spinner">
           <Spinner/>
        </div>
      )}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}></Route>
          <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App