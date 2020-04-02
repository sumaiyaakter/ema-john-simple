// 28.3
import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    console.log(auth.singInWithGoogle);
    return (
        <div>
            <h1>login</h1>
            <button onClick={auth.singInWithGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;

// 28.4
import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    // console.log(auth);
    return (
        <div>
            <h1>login</h1>
            {
                auth.user ? <button onClick={auth.signOut}>sign out</button> :
                <button onClick={auth.signInWithGoogle}>Sign In With Google</button>
            }
        </div>
    );
};

export default Login;