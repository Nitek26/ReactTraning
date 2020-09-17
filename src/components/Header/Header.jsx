import React from 'react'
import './Header.css'
import SearchTopPane from './SearchTopPane/SearchTopPane'
import Search from './Search/Search'
class Header extends React.Component {
    render() {
        return <div className="header">
            <SearchTopPane></SearchTopPane>
            <Search></Search>
        </div>
    }
}

export default Header;