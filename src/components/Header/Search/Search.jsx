import React from 'react'
import './Search.css'
import { connect } from 'react-redux'
import { getSearchTxt } from '../../../store/selectors.js'
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
            <button className="pink-full-btn" onClick={() => props.searchForMovie(props.searchTxt)}>Search</button>
        </div>
    </div>
}
const MapStateToProps = (state) => {
    console.log(JSON.stringify(state));
    let searchTxt = getSearchTxt(state);
    return { searchTxt }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleSearchTxtChange: (txt) => dispatch(SetSearchTxt(txt)),
        searchForMovie: (txt) => dispatch(SearchForMovie(txt))
    };
}


export default connect(MapStateToProps, MapDispatchToProps)(Search);