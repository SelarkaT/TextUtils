// import logo from './logo.svg';

import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //dark mode flag
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    // console.log(alert.type + ":" + alert.msg);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode On....", "success");
      document.title = "TextUtils | Dark Mode";

      // setInterval(() => {
      // document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      // document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode On....", "success");
      document.title = "TextUtils | Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          mode={mode}
          title="TextUtils"
          aboutText="About"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* It is advised to use keyword "exact" before path */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to analyze below"
                />
              }
            />
          </Routes> */}
          <Textform
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to analyze below"
            />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
