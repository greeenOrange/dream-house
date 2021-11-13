import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, registerUser, isLoading } = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
}
const handleLoginSubmit = e => {
    if(loginData.password !== loginData.password2){
        alert('your password did not match')
        return
    }
    registerUser(loginData.email, loginData.password)
    e.preventDefault();
}
    return (
        <div className='container'>
        <div className="row">
        <h2>Please Register</h2>
            <div className="col-md-6">
            <div className="align-center">
            { !isLoading && <form onSubmit={handleLoginSubmit}>
                <input className="d-block w-100 p-1 m-1" type="text" placeholder="name" name="name" onChange={handleOnChange} />
                <input className="d-block w-100 p-1 m-1" type="email" placeholder="email" name="email" onChange={handleOnChange} />
                <input className="d-block w-100 p-1 m-1" type="password" placeholder="password" name="password" onChange={handleOnChange} />
                <input className="d-block w-100 p-1 m-1" type="password" placeholder="Re-password" name="password2" onChange={handleOnChange} />
                <input className="d-block w-100 my-3" type="submit" />
                <NavLink to="/Login">
                    Alrady Register? Please Login
                </NavLink>
            </form>}
            {isLoading && <Spinner animation="border" />}
            {user?.email && <Alert className="text-success">
            This is a success alert—check it out!
            </Alert>}
            {authError &&  <Alert className="text-danger">
            This is a danger alert—check it out!
            </Alert>}
            </div>
            </div>
        </div>

        </div>
    );
};

export default Register;