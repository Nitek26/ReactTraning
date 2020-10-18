import React from 'react'
import './Search.css'

function Search() {
    return <div className="search">
        <div className="find-movie-txt">FIND YOUR MOVIE</div>
        <div>
            <input className="search-input" placeholder="What do you want to watch?"></input>
            <button className="pink-full-btn">Search</button>
        </div>
    </div>
}

export default Search;