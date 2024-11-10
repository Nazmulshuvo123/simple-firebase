import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";



const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () =>{
        
       signInWithPopup(auth, provider)
         .then((result) =>{
            console.log(result.user);
            setUser(result.user);
         })
         .catch((error) =>{
            console.log('Error', error)
         })
    }
    const handleSignOut = () =>{
        signOut(auth) 
        .then(() =>{
            console.log('sign out done')
            setUser(null)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            {/* <button onClick={handleGoogleSingIn}> Login With Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user?
                    <button onClick={handleSignOut}>Sign Out</button>:
                    <button onClick={handleGoogleSingIn}> Login With Google</button>
            }
            {
                user && 
                <div>
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.photoURL}</h2>
                </div>
            }
        </div>
    );
};

export default Login;