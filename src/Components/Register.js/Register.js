import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
import '../Login/Login.css'

initializeAuthentication();


const googleprovider = new GoogleAuthProvider();

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleGoogleSignIn = () => {
        const auth = getAuth();

        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user.email);
            })
    }
    const handleEmail = e => {
        setEmail(e.target.value);

    }
    const handlePassword = e => {
        setPassword(e.target.value);

    }



    const handleRegistration = e => {
        const auth = getAuth();
        console.log(email, password)
        if (password.length < 6) {
            setError('Password Should Be Atleast 6 Chracter')

            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        e.preventDefault();
    }


    return (
        <div>
            <div>
                <h2 className="mt-2 pb-2 fw-bolder">CREATE ACCOUNT</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmail} className="mb-3" type="text" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder="Your Password" required />
                    <br />

                    <input className="mt-3 btn btn-dark " type="submit" value="Register" />
                    <br />
                    <p className="text-danger">{error}</p>

                    <p className="mt-3">Already Hava an Account? <Link to="/login">Log In</Link></p>
                    <div>
                        ------------------or----------------

                    </div>


                </form>
            </div>



            {/* <h1>register</h1>

            <p>Have an Account? <Link to='/login'>Login</Link> </p> */}

            <button className='btn btn-dark' onClick={handleGoogleSignIn}>Google</button>

        </div>
    );
};

export default Register;