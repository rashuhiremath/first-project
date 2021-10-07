
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"


class MyNav extends Component {

    render(){
        return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Strive-Books!!!</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
      <Link to="/registration" className="nav-link">
      Registration
      </Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>)
}
}
export default withRouter(MyNav) 