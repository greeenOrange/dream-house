import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LimitServices = () => {
    const [limitServices, setlimitServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/productsLimit')
        .then(res => res.json())
        .then(data => setlimitServices(data))
    },[])
    console.log(limitServices);
    return (
        <div>
            <h2>limit services {limitServices.length}</h2>
            <div className="container">
                <div className="row">
                {limitServices?.map((pd, index) => (
                    <div className="col-md-6">
        <div className="service p-3 border border m-2">
          <div className="service-img">
            <img className="w-100" src={pd?.img} alt="" />
          </div>
          <h3 className='text-secondary'>Project Name:{pd?.name}</h3>
          <h6> Total Area: {pd?.area}</h6>
          <p> Category: {pd?.catefory}</p>
          <p>Net Worth: {pd?.worth}</p>
          <Link to={`/booking/${pd?._id}`}>
            {" "}
            <button>Order Now</button>
          </Link>
              </div>
            </div>
          ))}
                </div>
            </div>
        </div>
    );
};

export default LimitServices;