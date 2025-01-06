import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
  <main className="relative min-h-screen w-screen overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
  </main>
  )
}

export default App;
