import React from 'react';
import { Link } from 'react-router-dom';

const SingleServices = ({service}) => {
    const {name, img, area, catefory,worth, _id}= service;
    return (
        <div className="col-md-6">
        <div className="singleService p-3 border border m-2">
          <div className="singleService-img">
            <img className="w-100" src={img} alt="" />
          </div>
          <h3 className='text-secondary'>Project Name:{name}</h3>
          <h6> Total Area: {area}</h6>
          <p> Category: {catefory}</p>
          <p>Net Worth: {worth}</p>
          <Link to={`/booking/${_id}`}>
            {" "}
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    );
};

export default SingleServices;