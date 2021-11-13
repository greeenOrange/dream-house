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
import Review from './pages/Review/Review';
import Dashbaord from './pages/Home/Home/DashBoard/DashBoard';
import Admin from './pages/Home/Home/MakeAdmin/Admin';
import ManageServices from './pages/Home/MangeServices/ManageServices';
import Services from './pages/Home/Home/Services/Services';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Pay from './pages/Home/Pay/Pay';
import ManageAllOrder from './pages/Home/ManageAllOrder/ManageAllOrder';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Switch>
            <Route path="/dashboard">
            <Dashbaord></Dashbaord>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/addservices">
              <AddServices />
            </Route>
            <Route path="/pay">
              <Pay />
            </Route>
            <Route path="/makeAdmin">
              <Admin />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="/manageServices">
              <ManageServices />
            </Route>
            <Route path="/manageallorders">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
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
