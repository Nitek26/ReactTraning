import React from 'react'
import './MovieCover.css'
import MoreActionsButton from './MoreActionsButton/MoreActionsButton'

class MovieCover extends React.Component {
    render() {
        return <div className="movie-cover">
            <MoreActionsButton></MoreActionsButton>
            <img src="https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"></img>
            <div className="movie-details">
                <div className="title">Black Panther</div>
                <div className="year">2020</div>
                <div className="genre">Adventure, Comedy, Action</div>
            </div>

        </div>
    }
}

export default MovieCover;