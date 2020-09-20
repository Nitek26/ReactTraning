import React from 'react'
import './FilterBar.css'

class FilterBar extends React.Component {
    render() {
        return <div className="filter-bar">
            <div className="filters">
                <button>ALL</button>
                <button>DOCUMENTARY</button>
                <button>COMEDY</button>
                <button>HORROR</button>
                <button>CRIME</button>
            </div>
            <div className="movie-counter">7 movies found</div>
        </div>
    }
}

export default FilterBar;