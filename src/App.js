import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Data} from './Data';
import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import FilterMovie from './Components/FilterMovie';
import AddMovie from './Components/AddMovie';

function App() {
  const[movies,setMovies]=useState(Data);
  const addmv=(newMovie)=>{(setMovies([...movies,newMovie]))}
  const [search, setSearch] = useState("");
  
  
  return (
    <div className="App">

        
        <FilterMovie search={search} setSearch={setSearch} />
        <AddMovie  addmv={addmv}/>     
      <MovieList movies={movies} search={search}/>
    </div>
  );
}

export default App;