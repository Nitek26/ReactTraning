import React from 'react'
import './FilterBar.css'

class FilterBar extends React.Component {
    filterByGenre = (e) => {
        e.preventDefault();
        console.log("button clicked: " + e.target.value);
    }

    render() {
        return <div className="filter-bar">
            <div className="filters">
                <button value="all" onClick={this.filterByGenre}>ALL</button>
                <button value="documentary" onClick={this.filterByGenre}>DOCUMENTARY</button>
                <button value="comedy" onClick={this.filterByGenre}> COMEDY</button>
                <button value="horror" onClick={this.filterByGenre}>HORROR</button>
                <button value="crime" onClick={this.filterByGenre}>CRIME</button>
            </div>
            <div className="movie-counter">7 movies found</div>
        </div>
    }
}

export default FilterBar;