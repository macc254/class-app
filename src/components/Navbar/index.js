import React from "react";
import { Nav, NavLink, NavMenu }
from "./NavbarElements";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from "react-bootstrap";



const Navbar = () => {
    return (
        <>
        <Nav>
        <NavMenu>
        <NavLink to = "/home"activeStyle>Home </NavLink>
        <NavLink to = "/about"activeStyle>Announcements </NavLink>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary"  size="sm">Search</Button>
      </Form>
        <NavLink to = "/sign-up"activeStyle >Profile </NavLink>
        <NavLink to = "/blogs"activeStyle >Logout </NavLink>
        </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
