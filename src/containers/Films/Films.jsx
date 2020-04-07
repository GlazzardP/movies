import React, { useState, useEffect } from "react";
import FilmCard from "../../components/FilmCard";

const Films = () => {

  const [currentFilms, updateFilms] = useState([]);

  let fetchedFilms;

  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=indiana&apikey=ebaeda17"
    )
      .then(result => result.json())
      .then(result => {
        fetchedFilms = result;
        // console.log(result);
        // console.log(fetchedFilms);

        updateFilms(fetchedFilms);
      })
      .catch(error => console.log(error))
}, []);



  // MAP through
  const printFilms = currentFilms.map(film => {
    return (
      <FilmCard film={film}  />
    );
  });

  return <section>{printFilms}</section>;
};

export default Films;
