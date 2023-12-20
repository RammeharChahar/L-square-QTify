import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Section from "./component/Section/Section";

function App() {
  const [albumData,setAlbumData] = useState([]);

  useEffect(() =>{
   async function fetchData(){
    const response = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/top`
    );
    console.log(response.data);
    setAlbumData(response.data.slice(0,14));
   }
   fetchData();
  },[])

  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Section data={albumData}/>
    </div>
  );
}


export default App;
