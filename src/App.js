import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import "./App.css";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
