import React, { useState } from 'react';
import styles from './App.css';

import Films from "./containers/Films"

function App() {

  const [currentFilms, updateFilms] = useState([]);

  let fetchedFilms;

  const grabFilms = searchTerm => { 
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=ebaeda17`
  )
    .then(result => result.json())
    .then(result => {
      fetchedFilms = result;
      // console.log(result);
      // console.log(fetchedFilms.Search);

      updateFilms(fetchedFilms.Search);
    })
    .catch(error => console.log(error))
};

  return (
    <div>
      <header>
        <h1>Movies imdb - Tec Test </h1>
          <input type="text" placeholder="Enter name of movie" onInput={e => grabFilms(e.target.value)}  />
          <button>Submit</button>
      </header>
      <section className={styles.filmToPrint}>
        <Films currentFilms={currentFilms} />
      </section>
    </div>
  );
}

export default App;
