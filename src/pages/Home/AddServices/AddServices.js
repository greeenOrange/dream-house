import React from "react";
import "./AddServices";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/UseAuth";

const AddServices = () => {
  const {user} = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://glacial-temple-95782.herokuapp.com/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center text-info">Please Add Services</h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("text")}
                  placeholder="house area size"
                  type="text"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("text")}
                  placeholder="catagory"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />

                <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("worth", { required: true })}
                  placeholder="worth"
                  type="text"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;