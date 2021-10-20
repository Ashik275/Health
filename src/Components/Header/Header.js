import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css'




const Header = () => {
    const { user, logOut } = useAuth();



    return (
        <div>

            <>
                <Navbar fixed="top" collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className="me-5 pe-5 fw-bolder">HEALTH CARE</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <NavLink className="nav-link text-white header" to='/home'>HOME</NavLink>
                            <NavLink className="nav-link text-white header" to='/about'>ABOUT</NavLink>
                            <NavLink className="nav-link text-white header" to='/diagonostic'>DIAGONOSTIC</NavLink>






                            {user.email && <span className="text-white">SignIn as:{user.displayName}</span>}

                            {
                                user.email ?

                                    <button onClick={logOut}>LOGOUT</button>
                                    :



                                    <NavLink className="nav-link text-white header" to='/login'>LOGIN</NavLink>}



                            <NavLink className="nav-link text-white header" to='/services'>SERVICE</NavLink>



                        </Navbar.Collapse>


                    </Container>
                </Navbar>


            </>

            {/* <NavLink to='/login'>Login</NavLink>
            <NavLink to='/home'>Home</NavLink> */}

        </div>
    );
};

export default Header;