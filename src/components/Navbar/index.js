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
        <NavLink to = "/home"activestyle="true">Home </NavLink>
        <NavLink to = "/about"activestyle="true">Announcements </NavLink>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary"  size="sm">Search</Button>
      </Form>
        <NavLink to = "/sign-up"activestyle="true" >Profile </NavLink>
        <NavLink to = "/blogs"activestyle="true" >Logout </NavLink>
        <NavLink to = "/commentform"activestyle="true" >comment</NavLink>

        </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
