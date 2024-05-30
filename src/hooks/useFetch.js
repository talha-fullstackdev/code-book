import { useState, useEffect } from "react";
export const useFetch = (apiPath ) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=97b85a3e493dbe5c6ec0337641ae6907
  `
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results); 
      console.log(json)
    }
    fetchMovies();
  }, [url]);

  return { data };
};
