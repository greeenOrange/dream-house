import React, { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import './Booking.css'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';

const Booking = () => {
const {id} = useParams();
const [details, setDetails] = useState({})
const { register, handleSubmit, reset, formState:{errors}, } = useForm();
const {user} = useAuth()
const history = useHistory();


useEffect(()=>{
    fetch(`https://glacial-temple-95782.herokuapp.com/services/${id}`)
    .then(res => res.json())
    .then(data => {
       setDetails(data)
    })
},[id])

const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("https://glacial-temple-95782.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data => {
        if(data.insertedId){
          alert('successfully added');
        reset();
        history.push('/home')
        }
      })
    console.log(data);
  };

    return (
            <div>
        <div className="container mt-3">
        <div className="row">
        <div className='col-md-6'>
        <h3>Booking ID: {details?._id}</h3>
        <img className="w-50" src={details?.img} alt="" />
        <h3 className='text-secondary'>Project Name:{details?.name}</h3>
          <h6> Total Area: {details?.area}</h6>
          <p> Category: {details?.catefory}</p>
          <p>Net Worth: {details?.worth}</p>
    <Link className='btn btn-lg btn-outline-dark' to='/'>go back</Link>
        </div>
      <div className="col-md-6 max-auto">
      <h2>Enter your Information</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="poject name"
                defaultValue={details?.name}
                className="p-2 m-2 w-100 input-field"
              />
              <input
                {...register("description")}
                defaultValue={details?.area}
                placeholder="floor size area"
                className="p-2 m-2 w-100 input-field"
              />
              <input
                {...register("address", { required: true })}
                placeholder="User Address"
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("phone", { required: true })}
                placeholder="User Number"
                
                type="text"
                className="p-2 m-2 w-100 input-field"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
            <p className="m-2 mb-2">
              {/* already have account?{" "} */}
              <Link to="/login">
                <span className="text-danger">create account</span>
              </Link>
            </p>
      </div>
        </div>
        </div>
        </div>
    );
};

export default Booking;