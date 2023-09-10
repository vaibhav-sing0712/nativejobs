import { useState,useEffect } from "react";
import axios from 'axios'



const useFetch=(endpoint,query)=>{

const [data,setData]=useState([])
const [isLoading,setIsLoading]=useState(false)
const [error,setError]=useState(null)

const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '1c1ac0da4bmsh8bdd70c3bc1f931p1dd5f6jsn3258c49eb35e',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async ()=>{
  setIsLoading(true);

  try {
    const response = await axios.request(options);
console.log('1')
    setData(response.data.data);
    setIsLoading(false);
    console.log('2')
    
  } catch (error) {
    setError(error);
    console.log(error)
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchData();
}, []);

const refetch = () => {
  setIsLoading(true);
  fetchData();
};

return {data,isLoading,error,refetch}
}

export default useFetch