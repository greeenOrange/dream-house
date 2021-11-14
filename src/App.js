import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AuthProvider from './Firebase/Contexts/AuthProvider/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import AddServices from './pages/Home/AddServices/AddServices';
import Booking from './pages/Home/Booking/Booking';
import MyBooking from './pages/Home/Home/MyBooking/MyBooking';

import Dashbaord from './pages/Home/Home/DashBoard/DashBoard';
import Admin from './pages/Home/Home/MakeAdmin/Admin';
import ManageServices from './pages/Home/MangeServices/ManageServices';
import Services from './pages/Home/Home/Services/Services';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Pay from './pages/Home/Pay/Pay';
import ManageAllOrder from './pages/Home/ManageAllOrder/ManageAllOrder';
import PropertyAmenities from './pages/PropertyAmenities/PropertyAmenities';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Menu from './pages/Shared/Menu-bar/Menu';


function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
        <Menu></Menu>
          <Switch>
            <Route path="/dashboard">
            <Dashbaord></Dashbaord>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/propartyamenities">
              <PropertyAmenities />
            </Route>
            <PrivateRoute path="/addservices">
              <AddServices />
            </PrivateRoute>
            <Route path="/pay">
              <Pay />
            </Route>
            <PrivateRoute path="/makeAdmin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="/manageServices">
              <ManageServices />
            </Route>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>

            <PrivateRoute path="/review">
              <ReviewForm></ReviewForm>
            </PrivateRoute>

            <Route path="/explore">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
