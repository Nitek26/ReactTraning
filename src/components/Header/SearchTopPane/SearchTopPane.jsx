import React from 'react'
import './SearchTopPane.css'
import Logo from '../../Logo/Logo'
import AddMovie from '../AddMovie/AddMovie'

function SearchTopPane() {
    return <div className="search-top-pane">
        <Logo></Logo>
        <AddMovie></AddMovie>
    </div>
}

export default SearchTopPane;