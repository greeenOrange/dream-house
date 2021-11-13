import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import './Menu.css'

const Menu = () => {
    const {user, logout} = useAuth();
    console.log({user});
    return (
        <div>

            <Navbar expand="lg">
  <Container>
    <Navbar.Brand to="/home">Dream House</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto top-menu">
        <Link className='text-dark' to="/home">Home</Link>
        <Link className='text-dark' to="/explore">Explore</Link>
        <Link className='text-dark' to="/login">login</Link>
        <Link className='text-dark' to="/review">review</Link>
        <Link className='text-dark' to="/mybooking">My Order</Link>
        <span className='menu-button'>
        {
            user?.email?
            <Button className="me-2" onClick={logout}>Log Out</Button>:
            <NavLink to="/login"><Button>Login</Button></NavLink>
        }
        <Navbar.Text className='text-dark'>
        Signed in as: <a  href="#login">{user.email}</a>
      </Navbar.Text>
        </span>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menu;