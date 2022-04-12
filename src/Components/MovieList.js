import React from 'react'
import CardMovie from './CardMovie'

function MovieList({movies,search}) {
  console.log(movies)
  return (
    <div className='listMovies'>

 {movies.filter((mv)=> mv.title.toLowerCase().includes(search.toLowerCase())).map((movie,indice)=>(<CardMovie movie={movie} key={indice}/>))}

    </div>
  )
}

export default MovieList