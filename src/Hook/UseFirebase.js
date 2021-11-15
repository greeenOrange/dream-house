import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup ,createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import intializeFirebase from '../Firebase/Firebase.init';


// initialize firebase app
intializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password, displayName) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((userCredential) => {
                handleUserInfoRegister(userCredential.user.email)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            setUser(result.user);
            
            // console.log(result.user);
            setAuthError('');
          })
          .catch((error) => setAuthError(error.message));
      };

    const handleUserInfoRegister = (email, displayName) =>{
        fetch("https://glacial-temple-95782.herokuapp.com/addUserInfo",{
            method:"POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({email, displayName}),
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        handleGoogleLogin,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;