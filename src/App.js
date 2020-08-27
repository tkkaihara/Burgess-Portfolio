import React from "react";
import "./css/App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
