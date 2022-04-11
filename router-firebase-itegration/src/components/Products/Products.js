import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
    const {user} = useAuthState(auth);
    return (
        <div>
            <h2>This is From Products</h2>
            <h4>{user ? user.displayName : "No User"}</h4>
            <h4>{user ? user.email: "no Emails"}</h4>
        </div>
    );
};

export default Products;