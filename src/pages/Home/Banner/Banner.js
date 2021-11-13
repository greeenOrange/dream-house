import React from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../../Shared/Menu-bar/Menu';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="blr">
                <Menu></Menu>
                    <div className="container">
                        <div className='row'>
                        <div className="col">
                            <div className='banner-info'>
                                <div className='mt-5'>
                                <h2 className='display-5'>Let's take you to Your <span className='text-success'>
                                dream house
                                </span></h2>
                                <h4 className='text-secondary'>Let’s find a home that’s perfect for you</h4>
                                <p>1201 Road Uttara Dhaka</p>
                                <button className='button'>Learn More</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;