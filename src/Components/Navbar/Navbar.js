import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';  
import { Link } from "react-router-dom";
const Navbars = () => {
    return (

       
        <>  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
          <Container>  
            <Navbar.Brand href="/Home">
            <img className="logo" src={'https://imagizer.imageshack.com/img922/940/NhtgxL.png'} />
            </Navbar.Brand>  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
            <Navbar.Collapse id="responsive-navbar-nav">  
            <div className="All-links">

              <Nav className="me-auto" > 
               
                {/* <Link to="/home">Home</Link> */}
                <Link to="/Home" className="hover-anim">Home</Link>
                <Link to="/Event" className="hover-anim">Events</Link>
                <Link to="/Team" className="hover-anim">Team</Link> 
                <Link to="/Sponsor" className="hover-anim">Sponsor</Link> 
                <Link to="/Alumni" className="hover-anim">Our Alumni</Link> 
                <Link to="/Contact" className="hover-anim">Contact us</Link> 
                {/* <Nav.Link href="#pricing">Link 2</Nav.Link>  
                <Nav.Link href="#pricing">Link 2</Nav.Link>   */}
                
              </Nav>  
            </div>
             
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  
      </>  

    );
}
export default Navbars;