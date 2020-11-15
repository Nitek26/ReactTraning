import React from 'react'
import './Search.css'
import { connect } from 'react-redux'
import { getGenreFilter, getOrderByVal, getSearchTxt } from '../../../store/selectors.js'
import { SetSearchTxt } from '../../../store/actions.js'
import { SearchForMovie } from '../../../store/asyncActions.js'

function Search(props) {
    return <div className="search">
        <div className="find-movie-txt">FIND YOUR MOVIE</div>
        <div>
            <input className="search-input" placeholder="What do you want to watch?"
                value={props.searchTxt}
                onChange={(e) => props.handleSearchTxtChange(e.target.value)} >
            </input>
            <button className="pink-full-btn" onClick={() => props.searchForMovie(props.searchTxt, props.genreFilter, props.orderByVal)}>Search</button>
        </div>
    </div>
}
const MapStateToProps = (state) => {
    return {
        searchTxt: getSearchTxt(state),
        genreFilter: getGenreFilter(state),
        orderByVal: getOrderByVal(state)
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleSearchTxtChange: (txt) => dispatch(SetSearchTxt(txt)),
        searchForMovie: (txt) => dispatch(SearchForMovie(txt))
    };
}


export default connect(MapStateToProps, MapDispatchToProps)(Search);