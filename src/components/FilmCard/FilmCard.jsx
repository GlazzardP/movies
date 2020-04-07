import React from "react";

const FilmCard = props => {

  const {film} = props;


  return (
    <div>
        <h3>{film.Title}</h3>
        <p>{film.Year}</p>
    </div>
  );
};

export default FilmCard;
