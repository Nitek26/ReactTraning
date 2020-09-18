import React from 'react'
import './SearchTopPane.css'
import Logo from '../Logo/Logo'
import AddMovie from '../AddMovie/AddMovie'

class SearchTopPane extends React.Component {
    render() {
        return <div className="search-top-pane">
            <Logo></Logo>
            <AddMovie></AddMovie>
        </div>
    }
}

export default SearchTopPane;