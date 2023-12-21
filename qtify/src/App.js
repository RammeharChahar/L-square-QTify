import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Section from "./component/Section/Section";
import { fetchSongs, fetchTopAlbums, fetctNewAlbums } from "./Api/api";

function App() {
  const [albumData,setAlbumData] = useState([]);
  const [data,setData] = useState({});
  // useEffect(() =>{
  //  async function fetchData(){
  //   const response = await axios.get(
  //     `https://qtify-backend-labs.crio.do/albums/top`
  //   );
  //   setAlbumData(response.data);
  //  }
  //  fetchData();
  // },[])

  const generateData = (key , source) => {
    source().then((data) =>{
      setData((prevData) =>{
        return {...prevData,[key] : data};
      });
    });
  };

  useEffect(() =>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetctNewAlbums);
    generateData("songs",fetchSongs);
  },[])

  console.log("all data",data);
  const { topAlbums = [], newAlbums =[], songs = []} = data;
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Section title="Top Album" data={topAlbums}/>
     <br/>
     <Section title="New Album" data={newAlbums}/>
    </div>
  );
}


export default App;
