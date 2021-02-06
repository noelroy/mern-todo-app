import React from 'react';
import {
    Nav,
    Navbar
} from 'react-bootstrap';

function AppNavBar() {
    return ( 
    <Navbar bg = "dark" expand="lg" variant="dark" >
        <Navbar.Brand href="#home" > Hello </Navbar.Brand> 
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default AppNavBar;