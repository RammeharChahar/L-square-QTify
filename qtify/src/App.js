import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
    </div>
  );
}

export default App;
