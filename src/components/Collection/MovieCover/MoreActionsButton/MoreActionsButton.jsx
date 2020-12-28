import React from 'react'
import { connect } from 'react-redux'
import './MoreActionsButton.css'
import { Dropdown } from 'react-bootstrap';
import { ViewDeleteModal, ViewEditModal, SetSelectedMovie } from '../../../../store/actions'


function MoreActionsButton(props) {
    return (
        <>
            <Dropdown className="dropdown-dark">
                <Dropdown.Toggle className="more-btn" id="dropdown-basic" tag="button" type="button">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.handleEditShow(props.movie)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleDeleteShow(props.movie)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
const MapStateToProps = (state) => {
    return {}
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleEditShow: (movie) => {
            dispatch(SetSelectedMovie(movie)); dispatch(ViewEditModal(true))
        },
        handleDeleteShow: (movie) => {
            dispatch(SetSelectedMovie(movie)); dispatch(ViewDeleteModal(true))
        },
    };
}
export default connect(MapStateToProps, MapDispatchToProps)(MoreActionsButton);

