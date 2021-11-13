import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/UseAuth";

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div className='container'>
      <div className="row">
            <p className='fw-bold'>Review</p>

          <div className="col-md-8 mx-auto">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control  className="input-field"
            name="email"
            value={user?.email}
            type="email"
            {...register("email", { required: true })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Rate the Servies</Form.Label>
        <Form.Control  className="input-field"
            name="rating"
            placeholder="rating"
            {...register("number", { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

        <Form.Control
        name="submit"
        className="submit-btn btn btn-danger mt-3"
        type="submit"
        value="submit"/>
        </Form.Group>

        </Form>
          </div>
      </div>
    </div>
  );
};

export default Review;