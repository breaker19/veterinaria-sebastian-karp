import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../marca.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";

export const NavBar = () => {

 
return (
 

    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
    <Container>
   <Link to="/"><Navbar.Brand><img  src= {img}  width="100%" height="100%"className="d-inline-block align-top"></img></Navbar.Brand></Link>

  
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className=" responsive-navbar">
     
      <Link to={`/category/perros`}> Perros</Link>

     <Link to="/category/gatos"> Gatos </Link>
     <Link to="/category/juguetes"> Juguetes </Link>


      </Nav>

     
    </Navbar.Collapse>

    <Link to="/cart"><CartWidget /></Link>
     
    </Container>
     
  </Navbar>
 
)

}

