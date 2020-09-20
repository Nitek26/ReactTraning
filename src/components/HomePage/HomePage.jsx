import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                <Header></Header>
                <Collection></Collection>
                <Footer></Footer>
            </div>
        );
    }
}

export default Homepage;