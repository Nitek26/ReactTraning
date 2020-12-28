import React from 'react';
import { connect } from 'react-redux'
import './HomePage.css';
import Header from '../Header/Header';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import { getSelectedMovie, getIsHeader } from '../../store/selectors'
import { SetSelectedMovie } from '../../store/actions'

function Homepage(props) {
    return (
        <div className="homepage">
            <Header selectedMovie={props.selectedMovie} isHeader={props.isHeader} setSelectedMovie={props.setSelectedMovie} ></Header>
            <Collection setSelectedMovie={props.setSelectedMovie}></Collection>
            <Footer></Footer>
        </div>
    );
};

const MapStateToProps = (state) => {

    return {
        selectedMovie: getSelectedMovie(state),
        isHeader: getIsHeader(state),
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        setSelectedMovie: (movie, isHeader) => dispatch(SetSelectedMovie(movie, isHeader))
    };
}
export default connect(MapStateToProps, MapDispatchToProps)(Homepage);

