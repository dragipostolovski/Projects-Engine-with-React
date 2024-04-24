// Movies.js

import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { Search } from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`;

export function Movies () {
    const [find, setFind] = useState("");
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const response = await res.json();

            setMovies(response.results);

            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect( () => {
        getMovies();
    }, [])
    
    return (
        <>
        <div className='c-title'>
            <div className='c-title__inner container'>
                <h1>Movies</h1>
            </div>
        </div>
        <div className="c-grid">
            <div className="c-search container">
                <Search find={find} setFind={setFind} label="Find movie"/>
            </div>
            <div className="c-grid__inner container">
                {movies.filter( (movie) => 
                    movie.title.toLowerCase().includes(find.toLowerCase())
                ).map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
        </>
    )
}