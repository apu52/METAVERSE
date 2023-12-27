import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import Audioextract from "./Audioextract";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mode, setMode] = useState("light");
  const [popup, setPopup] = useState(false);
  const [myStyle, setStyle] = useState({
    color: "#3512fa",
  });
  const [homeStyle, setHomeStyle] = useState({
    borderColor: "#04ba1c",
  });
  const [welStyle, setWelStyle] = useState({
    borderColor: "black",
  });
  const [blur, setBlur] = useState({
    filter: "none",
  });
  const [user, setLoginUser] = useState({});
  const [parastyle, setparastyle] = useState({
    fontSize: "20px",
    fontWeight: "600",
    color: "blueviolet",
  });

  useEffect(() => {
    // const user_after_every_load=
    setLoginUser(JSON.parse(localStorage.getItem("useraudify")));
  }, []);
  const updateUser = (user) => {
    localStorage.setItem("useraudify", JSON.stringify(user));
    setLoginUser(user);
  };

  // Functions
  const popupfun = () => {
    setPopup(true);
    setBlur({ filter: "blur(5px)" });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setStyle({ color: "white" });
      document.body.style.backgroundColor = "rgb(8 68 114)";
      setHomeStyle({ borderColor: "#4fda7b" });
      setWelStyle({ borderColor: "#4fda7b" });
      setparastyle({
        fontSize: "20px",
        fontWeight: "600",
        color: "white",
      });
    } else {
      setMode("light");
      setStyle({ color: "#3512fa" });
      document.body.style.backgroundColor = "white";
      setHomeStyle({ borderColor: "#04ba1c" });
      setWelStyle({ borderColor: "rgb(108, 13, 13)" });
      setparastyle({
        fontSize: "20px",
        fontWeight: "600",
        color: "blueviolet",
      });
    }
  };
  // console.log(user);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/login"
            element={<Login updateUser={updateUser} />}
          />
          <Route
            exact
            path="/"
            element={
              user && user.email ? (
                <div>
                  <div>
                    <Navbar
                      title="AudioExtract"
                      togglemode={toggleMode}
                      blur={blur}
                      updateUser={updateUser}
                    />
                    <Home
                      title="Audioextract"
                      my_style={myStyle}
                      home_style={homeStyle}
                      wel_style={welStyle}
                      p_style={parastyle}
                      popupfun={popupfun}
                      blur={blur}
                    />

                    <div>
                      {
                        <Audioextract
                          trigger={popup}
                          settrigger={setPopup}
                          setblur={setBlur}
                        />
                      }
                    </div>
                  </div>
                </div>
              ) : (
                <Login updateUser={updateUser} />
              )
            }
          />
          <Route
            path="/"
            element={
              user && user.email ? (
                <div>
                  <div>
                    <Navbar
                      title="Audify"
                      togglemode={toggleMode}
                      blur={blur}
                      updateUser={updateUser}
                    />
                    <Home
                      title="Audioextract"
                      my_style={myStyle}
                      home_style={homeStyle}
                      wel_style={welStyle}
                      popupfun={popupfun}
                      blur={blur}
                    />

                    <div>
                      <Audioextract
                        trigger={popup}
                        settrigger={setPopup}
                        setblur={setBlur}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Login updateUser={updateUser} />
              )
            }
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
