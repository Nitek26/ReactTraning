import React from 'react';
import './FilterBar.css';
import genres from '../../../data/MovieGenres.js';

function FilterBar(props) {
    return <div className="filter-bar">
        <div className="filters">
            <button value={genres.ALL} onClick={props.filterByGenre}>ALL</button>
            <button value={genres.DOCUMENTARY} onClick={props.filterByGenre}>DOCUMENTARY</button>
            <button value={genres.COMEDY} onClick={props.filterByGenre}> COMEDY</button>
            <button value={genres.HORROR} onClick={props.filterByGenre}>HORROR</button>
            <button value={genres.CRIME} onClick={props.filterByGenre}>CRIME</button>
            <button value={genres.DRAMA} onClick={props.filterByGenre}>DRAMA</button>

        </div>
        <div className="movie-counter">{props.found} movies found</div>
    </div>
}

export default FilterBar;