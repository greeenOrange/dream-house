import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAuth from '../../Hook/UseAuth';

const ReviewForm = () => {
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    reset
    
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://glacial-temple-95782.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank You for your feedback",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  }
  return (
    <div
      className="container-fluid "
     
    >
      <h1 className="pt-2 fw-bold" >
        Give your FeedBack
      </h1>

      <div className="row mx-auto py-5">
        <div className="col-md-6 col-sm-12 align-self-center">
          <img className="img-fluid w-75 rounded-3"  alt="" />
        </div>

        <div className="col-md-6 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              className="p-2 m-2 w-75 border border-white rounded-2"
              defaultValue={user?.email}
            />

            <input
              className="p-2 m-2 w-75 border border-white rounded-2"
              placeholder="City"
              defaultValue=""
              {...register("city")}
            />

            <input
              {...register("rating")}
              className="p-2 m-2 w-75 border border-white rounded-2"
              placeholder="Give your ratting 1 to 5"
              required
            />

            <textarea
              {...register("comment")}
              rows="5"
              cols="15"
              className="p-2 m-2 w-75 border border-white rounded-2"
              placeholder="Write your Feedback"
              required
            />

            <input
              type="submit"
              value="Send"
              className="btn w-75 rounded-2 text-white"
              style={{ backgroundColor: "#DCC397" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;