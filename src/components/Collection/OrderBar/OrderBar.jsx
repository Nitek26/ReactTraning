import React from 'react'
import './OrderBar.css'

class OrderBar extends React.Component {
    render() {
        return <div className="order-bar">

            <div className="bar">
                <span>SORT BY</span>
                <div className="select-bar-dropdown">
                    <select>
                        <option value="relase_date">RELEASE DATE</option>
                        <option value="views">VIEWS</option>
                        <option value="title">TITLE</option>
                        <option value="stars">STARS</option>
                    </select>
                </div>
            </div>
        </div>
    }
}

export default OrderBar;