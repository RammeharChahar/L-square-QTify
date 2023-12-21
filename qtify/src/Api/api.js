import axios from "axios";

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () =>{
   try{
     const response = axios.get(`${BACKEND_ENDPOINT}/albums/top`);
     return (await response).data;
   }catch(e){
    console.error(e);
   }
}

export const fetctNewAlbums = async () =>{
    try{
      const response = axios.get(`${BACKEND_ENDPOINT}/albums/new`);
      return (await response).data;
    }catch(e){
     console.error(e);
    }
 }

 export const fetchSongs = async () =>{
    try{
      const response = axios.get(`${BACKEND_ENDPOINT}/songs`);
      return (await response).data;
    }catch(e){
     console.error(e);
    }
 }

 export const fetchFilters = async () =>{
    try{
      const response = axios.get(`${BACKEND_ENDPOINT}/albums/genres`);
      return (await response).data;
    }catch(e){
     console.error(e);
    }
 }