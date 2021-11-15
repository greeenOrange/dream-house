import React, { useEffect, useState } from "react";
import { useRouteMatch, Link, Switch, Route, NavLink, } from "react-router-dom";

import './DashBoard.css'

import useAuth from "../../../../Hook/UseAuth";
import MyBooking from "../MyBooking/MyBooking";
import Admin from "../MakeAdmin/Admin";
import ManageServices from "../../MangeServices/ManageServices";
import AddServices from "../../AddServices/AddServices";
import { Button, Offcanvas } from "react-bootstrap";
import Pay from "../../Pay/Pay";
import ManageAllOrder from "../../ManageAllOrder/ManageAllOrder";
import Menu from "../../../Shared/Menu-bar/Menu";
import ReviewForm from "../../../ReviewForm/ReviewForm";


const Dashbaord = () => {
  const {user, logout} = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://glacial-temple-95782.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (
    <div className="container">
    <Button className="d-flex" variant="success" onClick={handleShow}>
        DashBoard Menu
      </Button>

      <div className="row">
      <div className='col-md-12'>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <Link to={`${url}/mybooking`}>
                <li className="dashboard-menu mt-5">My Orders</li>
              </Link>

              <Link to={`${url}/pay`}>
                <li className="dashboard-menu mt-5">Pay</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              

              <Link to={`${url}/logout`}>
                <li className="dashboard-menu mt-5">{
            user?.email?
            <Button className="me-2" onClick={logout}>Log Out</Button>:
            <NavLink to="/login"><Button>Login</Button></NavLink>
        }</li>
              </Link>
            
                {isAdmin &&(
                  <span>
                <Link to={`${url}/addServices`}>
                <li className="dashboard-menu mt-5">addServices</li>
              </Link>

                <Link to={`${url}/manageallorder`}>
                <li className="dashboard-menu mt-5">all Orders</li>
              </Link>
              

              <Link to={`${url}/makeAdmin`}>
                <li className="dashboard-menu mt-5">Admin</li>
              </Link>

              <Link to={`${url}/manageServices`}>
                <li className="dashboard-menu mt-5">Manage All Services</li>
              </Link>
                </span>
                )}

              
        </Offcanvas.Body>
      </Offcanvas>
      <Switch>
              <Route exact path={`${path}/mybooking`}>
                <MyBooking></MyBooking>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/manageallorder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
              <Admin></Admin>
              </Route>

              <Route exact path={`${path}/addServices`}>
              <AddServices></AddServices>
              </Route>

              <Route exact path={`${path}/review`}>
              <ReviewForm></ReviewForm>
              </Route>

              <Route exact path={`${path}/manageServices`}>
               <ManageServices></ManageServices>
              </Route>
            </Switch>
    </div>
      </div>
    </div>
  );
};

export default Dashbaord;