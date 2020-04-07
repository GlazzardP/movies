import React from 'react';
import styles from './App.css';

import Films from "./containers/Films"

function App() {


  return (
    <div>
      <header>
        <h1>Movies imdb - Tec Test </h1>
          <input type="text" placeholder="search" name="title"/>
          {/* <button onClick={searchInput}>Submit</button> */}
      </header>
      <section className={styles.filmToPrint}>
        <Films />
      </section>
    </div>
  );
}

export default App;
