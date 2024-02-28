import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Flowers</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='custom-nav-link' to="/">Home</Link>
                    <Link className='custom-nav-link' to="/fav">Favourite-Flowers</Link>
                    <Link className='custom-nav-link' to="/about">About-us</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;