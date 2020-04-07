import React from "react";
import styles from "./FilmCard.css";


const FilmCard = props => {

  const {filmObj} = props;

  return (
    <div className={styles.filmCard}>
        <h3>{filmObj.Title}</h3>
        <p>{filmObj.Year}</p>
    </div>
  );
};

export default FilmCard;
