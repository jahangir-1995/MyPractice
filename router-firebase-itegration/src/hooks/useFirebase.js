import { useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from "../firebase.init";

const googleProvider = new GoogleAuthProvider();

const auth =getAuth(app)

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

    useEffect( () => {

        }, []);

    // return [user, setUser];
    return {user, signInWithGoogle}
}

export default useFirebase;