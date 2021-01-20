import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from '../../StonksGuyIcon.png';
import './NavBar2.css';

function NavBar2() {
    return (
        <div>
            <ReactBootStrap.Navbar bg="dark" variant="dark" expand="sm">
                <ReactBootStrap.Navbar.Brand href="#home">
                    <div className="nav-bar-home">
                        <img alt="" src={logo} width="8%" height="8%" className="d-inline-block align-center" />{' '} WallStreet Stonks
                    </div>
              </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <div className="search-bar">
                        <ReactBootStrap.Form inline >
                            <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
                        </ReactBootStrap.Form>
                    </div>
                    <ReactBootStrap.Nav className="navbar-nav ml-auto">
                        <ReactBootStrap.Nav.Link href="/ResearchPage">Research</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/LearnPage">Learn</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown alignRight title="Account" id="basic-nav-dropdown">
                            <ReactBootStrap.Nav className="navbar-right">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar2;