import React from 'react'
import './Collection.css'
import CollectionTopPane from './CollectionTopPane/CollectionTopPane'
import MovieCoversList from './MovieCoversList/MovieCoversList'

class Collection extends React.Component {
    render() {
        return <div className="movie-collection">
            <CollectionTopPane></CollectionTopPane>
            <MovieCoversList></MovieCoversList>
        </div>
    }
}

export default Collection;
