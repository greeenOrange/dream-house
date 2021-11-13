import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';
import Review from '../Review/Review';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LimitServices></LimitServices>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;