import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enabled", "success");
      // document.body.style.color = 'white'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");

      // document.body.style.color = 'black'
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        menu1="Home"
        menu2="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />
      <div className="container">
        {/* <Textform heading="Enter text to analyse" mode={mode} />
        <About mode={mode}/> */}

        <Routes>
          {/* <Route path='Path You want to use' element={<What you want to render >}/>  */}
          <Route
            exact
            path="/"
            element={<Textform heading="Enter text to analyse" mode={mode} />}
          />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
