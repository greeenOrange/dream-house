import React, { useEffect, useState } from 'react';
import Menu from '../../../Shared/Menu-bar/Menu';
import SingleServices from '../SingleServices/SingleServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://glacial-temple-95782.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='container my-4'>
        <h1>Property Information</h1>
            <div className="row">
            {
                services?.map(service =><SingleServices
                key={service._id}
                service={service}
                ></SingleServices>)
                
            }
            </div>
        </div>
    );
};

export default Services;