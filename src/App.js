import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchUser from "./components/SearchUser";
import AboutInfo from "./components/AboutInfo.jsx";
import { LoginContext } from "./context/LoginForm.js";
import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  const [signed, setSigned] = useState(false);
  console.log(signed);
  
  return (
    <LoginContext.Provider value={{ signed, setSigned }}>
      <BrowserRouter>
      {/* <LoginForm /> */}
      {/* <Navbar setSigned={setSigned} /> */}
      {/* <SearchUser  /> */}

        <Routes>
          
          <Route path="/" element={signed ? <SearchUser /> : <LoginForm /> } />
          <Route path="/about" element={signed ? <AboutInfo /> : <LoginForm /> } />
          {/* <Route path="/About" element={<AboutInfo />} /> */}
          <Route path="/" element={!signed && <SearchUser /> } />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
