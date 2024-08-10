import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Auth = () => {
    const navigate = useNavigate();

    const googleSuccess = (response) => {
        const decoded = jwtDecode(response.credential);
        console.log(decoded);
        localStorage.setItem('token', response.credential);
        localStorage.setItem('user', JSON.stringify(decoded));
        navigate('/');
    };
    
    const googleError = (error) => {
        console.log(error);
        alert('Google Sign In was unsuccessful. Try again later');
    };

    return (
        <div className="container">
            <div className="login-box">
                <h2 className="title">Login with your account</h2>
                {/* Spacer for additional vertical space */}
                <div className="spacer"></div>
                {/* Placeholder for Google login component */}
                {/* Replace GoogleOAuthProvider and GoogleLogin with actual components */}
                <div>
                    <GoogleOAuthProvider clientId='165461974597-f3rjo7k88q4etvuscbi8vakorule7p7l.apps.googleusercontent.com'>
                        <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    )
}

export default Auth;