import React from 'react';
import './FilterBar.css';
import genres from '../../../data/MovieGenres.js';

class FilterBar extends React.Component {
    render() {
        return <div className="filter-bar">
            <div className="filters">
                <button value={genres.ALL} onClick={this.props.filterByGenre}>ALL</button>
                <button value={genres.DOCUMENTARY} onClick={this.props.filterByGenre}>DOCUMENTARY</button>
                <button value={genres.COMEDY} onClick={this.props.filterByGenre}> COMEDY</button>
                <button value={genres.HORROR} onClick={this.props.filterByGenre}>HORROR</button>
                <button value={genres.CRIME} onClick={this.props.filterByGenre}>CRIME</button>
                <button value={genres.DRAMA} onClick={this.props.filterByGenre}>DRAMA</button>

            </div>
            <div className="movie-counter">{this.props.found} movies found</div>
        </div>
    }
}

export default FilterBar;