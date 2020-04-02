import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const Auth = () => {
    const [user, setUser] = useState(null);
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => { //res - response
            // console.log(res);
            const {displayName, email, photoURL} = res.user;
            const signInUser = {name: displayName, email, photoURL}
            setUser(signInUser);
            console.log(user)
            return res.user;
        })
        .catch(error => {
            // console.log(error);
            setUser(null);
            return error.message;
        })

        
    }
    const signOut = () => {
        firebase.auth().signOut().then(function() {
        setUser(null);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    return{
        user,
        signInWithGoogle,
        signOut,
    }
}

export default Auth;