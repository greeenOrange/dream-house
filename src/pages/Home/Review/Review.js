import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allReview')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className='container'>
            <div className="row">
            {review?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
            <Rating className="icon-color"
            initialRating={5}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
            />
              <h2>{pd?.number}/5</h2>
              </div>
            </div>
          ))}
            </div>
        </div>
    );
};

export default Review;