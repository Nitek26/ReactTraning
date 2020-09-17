import React from 'react'
import './CollectionTopPane.css'
import FilterBar from '../FilterBar/FilterBar'
import OrderBar from '../OrderBar/OrderBar'


class CollectionTopPane extends React.Component {
    render() {
        return <div>CollectionTopPane
            <FilterBar></FilterBar>
            <OrderBar></OrderBar>
        </div>
    }
}

export default CollectionTopPane;