
import {useEffect, useState} from 'react';
import './App.css';

import MovieCard from './MovieCard';

import SearchIcon from './search.svg';

function App(){

    const API_URL = "http://www.omdbapi.com?apikey=d2621646";

    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =  useState('');

  

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        
    };

    useEffect(()=>{
        searchMovies("Superman")
    },[]);

    const movie1 = {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
      };


    

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='Search for movies' 
                        value={searchTerm}
                        onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                ></input>

                <img src={SearchIcon} alt='search' onClick={()=>{searchMovies(searchTerm)}}></img>
            </div>

            {
                
                movies.length >0 ? (
                    <div className='container'>
                       {
                            movies.map((movie) => (
                                <MovieCard movie1={movie}></MovieCard>
                            ))
                       }
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
            

        </div>
    );
}

export default App;