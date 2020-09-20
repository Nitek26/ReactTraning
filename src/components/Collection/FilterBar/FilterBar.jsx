import React from 'react';
import './FilterBar.css';
import genres from '../../../data/MovieGenres.js';

class FilterBar extends React.Component {
    filterByGenre = (e) => {
        e.preventDefault();
        console.log("button clicked: " + e.target.value);
    }

    render() {
        return <div className="filter-bar">
            <div className="filters">
                <button value={genres.ALL} onClick={this.filterByGenre}>ALL</button>
                <button value={genres.DOCUMENTARY} onClick={this.filterByGenre}>DOCUMENTARY</button>
                <button value={genres.COMEDY} onClick={this.filterByGenre}> COMEDY</button>
                <button value={genres.HORROR} onClick={this.filterByGenre}>HORROR</button>
                <button value={genres.CRIME} onClick={this.filterByGenre}>CRIME</button>
            </div>
            <div className="movie-counter">{this.props.found} movies found</div>
        </div>
    }
}

export default FilterBar;