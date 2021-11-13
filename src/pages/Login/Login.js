import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, user, authError, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e =>{
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <div className='container'>
        <div className="row">
        <h2>Please Login</h2>
            <div className="col-md-6">
            <div className="align-center">
            <form onSubmit={handleLoginSubmit}>
                <input className="d-block w-100" type="email" placeholder="email" name="email" onChange={handleOnChange} />
                <input className="d-block w-100" type="password" placeholder="password" name="password" onChange={handleOnChange} />
                <input className="d-block w-100 my-3" type="submit" />
                <NavLink to="/register">
                    New user? Please Register
                </NavLink>
            </form>
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

export default Login;