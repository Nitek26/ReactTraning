import React from 'react';
import './OrderBar.css';
import movieSortProps from '../../../data/MovieSortProps.js';

class OrderBar extends React.Component {
    render() {
        return <div className="order-bar">

            <div className="bar">
                <span>SORT BY</span>
                <div className="select-bar-dropdown">
                    <select onChange={this.props.orderBy}>
                        <option value={movieSortProps.RELEASE_DATE}>RELEASE DATE</option>
                        <option value={movieSortProps.VOTE_AVRAGE}>VOTE AVRAGE</option>
                        <option value={movieSortProps.VOTE_COUNT}>VOTE COUNT</option>
                        <option value={movieSortProps.TITLE}>TITLE</option>
                        <option value={movieSortProps.BUDGET}>BUDGET</option>
                        <option value={movieSortProps.REVENUE}>REVENUE</option>
                    </select>
                </div>
            </div>
        </div>
    }
}

export default OrderBar;
