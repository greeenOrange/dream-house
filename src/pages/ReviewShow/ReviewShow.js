import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SetReview from '../SetReview/SetReview';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <Container className="mt-5">
      <div>
        <h1 className="text-center mb-5 text-info">TESTIMONIAL</h1>
      </div>

      <div className="row">
        {reviews?.map((review) => (
          <SetReview key={review._id} review={review}></SetReview>
        ))}
      </div>
      <div>
        
      </div>
    </Container>
    );
};

export default ReviewShow;