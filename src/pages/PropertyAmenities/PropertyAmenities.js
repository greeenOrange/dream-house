import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faVolumeUp, faBuilding, faCity, faParking, faDog, faWifi, faSwimmingPool, faVideo } from '@fortawesome/free-solid-svg-icons'
import './propertyamenities.css'
const PropertyAmenities = () => {
    const element = <FontAwesomeIcon icon={faWifi} />
    const element2 = <FontAwesomeIcon icon={faVolumeUp} />
    const element3 = <FontAwesomeIcon icon={faBuilding} />
    const element4 = <FontAwesomeIcon icon={faCity} />
    const element5 = <FontAwesomeIcon icon={faParking} />
    const element6 = <FontAwesomeIcon icon={faDog} />
    const element7 = <FontAwesomeIcon icon={faSwimmingPool} />
    const element8 = <FontAwesomeIcon icon={faVideo} />
    return (
        <div className="container">
        <h2>Property Amenities</h2> 
        <div className="row">
            <div className="col-md-3">
            <div className="i-icon"><span>{element3}</span>
            <h4>Private Territory</h4>
            <p>Privacy systemt managemaget in good</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element2}</span>
            <h4>Music Station</h4>
            <p>Multimedia center in common Hall</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element}</span>
            <h4>Fast Internet</h4>
            <p>Fast wifi Connection</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element4}</span>
            <h4>Guest Suites</h4>
            <p>Member's Guest are Sweetable</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element5}</span>
            <h4>Car Parking</h4>
            <p>20+ car parking capacity</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element6}</span>
            <h4>Pet House</h4>
            <p>Sutable for all pet Animels</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element7}</span>
            <h4>Swimming Pool</h4>
            <p>Three swimming Pool For all members</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className="i-icon"><span>{element8}</span>
            <h4>CCTv Camera</h4>
            <p>24/7 CCTv camera Control</p>
            </div>
            </div>
        </div>           
        </div>
    );
};

export default PropertyAmenities;