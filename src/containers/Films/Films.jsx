import React from "react";
import FilmCard from "../../components/FilmCard";
// import filmsFromData from "../../data/data"

const Films = (props) => {

  const { currentFilms} = props;



//   useEffect(() => {
//     fetch(`http://www.omdbapi.com/?s=${setSearchText}&apikey=ebaeda17`
//     )
//       .then(result => result.json())
//       .then(result => {
//         fetchedFilms = result;
//         console.log(result);
//         console.log(fetchedFilms.Search);

//         updateFilms(fetchedFilms.Search);
//       })
//       .catch(error => console.log(error))
// }, []);


  const printFilms = currentFilms.map(filmObj => {
    return (
      <FilmCard filmObj={filmObj}  />
    );
  });

  return <section>{printFilms}</section>;
};

export default Films;
