import React from 'react';
import Footer from '../../Footer/Footer';
import PropertyAmenities from '../../PropertyAmenities/PropertyAmenities';
import ReviewShow from '../../ReviewShow/ReviewShow';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LimitServices></LimitServices>
            <PropertyAmenities></PropertyAmenities>
            <ReviewShow></ReviewShow>
            <Footer></Footer>
        </div>
    );
};

export default Home;