import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth, sighOut, signOut } from 'firebase/auth';


const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/register">Register</Link>
                {/* <span>{user?.displayName && user.displayName}</span> */}
                {
                    user?.uid 
                    ? 
                    <button onClick={ () => signOut(auth)}>Sign Out</button>
                    :
                    <Link to="/login">Log In</Link>
                }
            </nav>
        </div>
    );
};

export default Header;