import React  from 'react';
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/Logo.png';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
  const { user, logout } = useFirebase();
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="101.74px"
            height="48px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user.email ? (
              <div>
                <button onClick={logout} className="logout-btn px-3 py-2">
                  Logut
                </button>
                
                <img
                  src={
                    user.photoURL
                      ? `${user.photoURL}`
                      : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
                  }
                  alt=""
                  className="img-fluid user-img ms-5"
                />
                <span className='ms-2'>{user.displayName}</span>
                <Link to='/dashboard' className='ms-2'><KeyboardArrowDownIcon/></Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="login-btn me-3">Login</button>
                </Link>
                <Link to="/registration">
                  <button className="reg-btn">Registration</button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
