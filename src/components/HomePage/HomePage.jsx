import React, { useState } from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';

function Homepage() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    return (
        <div className="homepage">
            <Header selectedMovie={selectedMovie} ></Header>
            <Collection setSelectedMovie={setSelectedMovie}></Collection>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;