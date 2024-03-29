import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hook/UseAuth';


const Admin = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, registerUser, isLoading } = useAuth();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        fetch("https://dream-house-server.up.railway.app/makeAdmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
      };
    return (
        <div className="container">
                <h1>make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
        </div>
    );
};

export default Admin;