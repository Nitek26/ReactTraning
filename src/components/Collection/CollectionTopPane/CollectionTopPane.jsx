import React from 'react'
import './CollectionTopPane.css'
import FilterBar from '../FilterBar/FilterBar'
import OrderBar from '../OrderBar/OrderBar'


function CollectionTopPane(props) {
    return <div className="collection-top-pane">
        <FilterBar found={props.found} filterByGenre={props.filterByGenreEvent}></FilterBar>
        <OrderBar orderBy={props.orderByEvent}></OrderBar>
    </div>
}

export default CollectionTopPane;