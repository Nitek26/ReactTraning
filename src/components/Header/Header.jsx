import React from 'react'
import './Header.css'
import SearchTopPane from './SearchTopPane/SearchTopPane'
import Search from './Search/Search'
import MovieDetails from './MovieDetails/MovieDetails'

function Header(props) {
    return <div className="header">
        <div className="blur">
            {props.selectedMovie
                ? <MovieDetails selectedMovie={props.selectedMovie} /> :
                <><SearchTopPane />
                    <Search /></>
            }
        </div>
    </div>
}

export default Header;