import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
// import useFirebase from '../../hooks/useFirebase';





const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleEmail = e => {
        setEmail(e.target.value);

    }
    const handlePassword = e => {
        setPassword(e.target.value);

    }

    const handleLogIn = e => {
        const auth = getAuth();
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
    }



    return (
        <div>

            <div>
                <h2 className='fw-bolder'>LOGIN</h2>
                <form onSubmit={handleLogIn}>
                    <div>
                        <div> <label className='fw-bold' htmlFor="email">Email:</label></div>
                        <input onBlur={handleEmail} className="mb-3" type="text" placeholder="Your Email" />

                    </div>

                    <div>
                        <div>   <label className='fw-bold' htmlFor="password">Password:</label></div>

                        <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="Enter Password" />
                    </div>

                    <div>
                        <input className="mt-3 btn btn-dark submit" type="submit" value="Submit" />

                    </div>
                    <p className="mt-3">New User? <Link to="/register">Creat Account</Link></p>
                    <div>
                        ------------------or----------------
                        <br /> <br />

                        {/* <button onClick={signInUsingGoogle}>Google</button> */}
                    </div>


                </form>
            </div >

            <button className='btn btn-dark submit' onClick={handleGoogleLogin}>Google</button>


            {/* <p>Already Login? <Link to='/register'>Creat Account</Link></p> */}
        </div>
    );
};

export default Login;