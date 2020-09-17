import React from 'react'
import './SearchTopPane.css'
import Logo from '../Logo/Logo'
import AddMovie from '../AddMovie/AddMovie'

class SearchTopPane extends React.Component {
    render() {
        return <div className="SearchTopPane">SearchTopPane
        <Logo></Logo>
            <AddMovie></AddMovie>
        </div>
    }
}

export default SearchTopPane;