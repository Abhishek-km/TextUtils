import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [appMode, setappMode] = useState("light");
  const toggleMode = () => {
    if (appMode === "light") {
      setappMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // to blink the website title
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // },
      // 1500
      // );
    } else {
      setappMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} appMode={appMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About appMode={appMode} />} />
            <Route
              path="/"
              element={
                <Textform
                  heading="Enter your text to analyze"
                  appMode={appMode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
