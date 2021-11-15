import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SetReview from '../SetReview/SetReview';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://glacial-temple-95782.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <Container className="mt-5">
      <div>
        <h1 className="text-center mb-5">What Client Say About Us</h1>
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