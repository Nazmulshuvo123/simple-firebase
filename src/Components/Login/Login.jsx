import { GoogleAuthProvider } from "firebase/auth";



const Login = () => {

    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{
        console.log('Google comeing soon')
    }
    return (
        <div>
            <button onClick={handleGoogleSingIn}> Login With Google</button>
        </div>
    );
};

export default Login;