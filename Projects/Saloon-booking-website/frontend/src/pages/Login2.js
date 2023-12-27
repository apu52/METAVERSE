import React, { useState } from 'react'
import firebase from './firebase';
import { } from "firebase/auth";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { Link, useNavigate } from 'react-router-dom';

import Navebar from '../components/Navebar';
import { render } from 'react-dom';

export default function Login2() {
    const navigate = useNavigate();
    

    const [credentials, setcredentials] = useState({ phoneNumber: "", otp: "" })
    const [proceed, setproceed] = useState(false)




    const configurecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
            }
        });
    }

    const onSignInSubmit = (e) => {
        setvisible(true);
        e.preventDefault();
        configurecaptcha();

        const appVerifier = window.recaptchaVerifier;

        console.log(credentials.phoneNumber);
        firebase.auth().signInWithPhoneNumber("+91" + credentials.phoneNumber.toString(), appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                alert(" Otp Sent");
                console.log("otp sent");
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                alert(error.message)
                console.log("sms not sent", error.message)
                // ...
            });
    }
    const submitOtp = (e) => {
        e.preventDefault();
        console.log(credentials.otp
        )
        const code = credentials.otp.toString();
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log('verified')
            setproceed(true);
            let element=document.getElementById("sign-in-button")
            element.innerHTML="verified"
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
    // const onSumbmitOtp = () => {
    //     const code = getCodeFromUserInput();
    //     window.confirmationResult.confirm(code).then((result) => {
    //         // User signed in successfully.
    //         const user = result.user;
    //         // ...
    //     }).catch((error) => {
    //         // User couldn't sign in (bad verification code?)
    //         // ...
    //     });
    // }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(proceed)
        {
       
            console.log("proceed")
        console.log(JSON.stringify({ phoneNumber: credentials.phoneNumber }))
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber: credentials.phoneNumber.toString() })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid phone number")
            
        }
        else {
            
            localStorage.setItem("phoneNumber",credentials.phoneNumber);
            window.location.reload(true)
        }
    }
    else{
        alert("Enter correct otp")
        return false
    }
    }
    // const handleVerify = () => {
    //     const auth = getAuth();
    //     const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptchaVerifier', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //             // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             signInWithPhoneNumber(auth, '+918619050846', recaptchaVerifier);
    //         }

    //     }.auth)
    // }
    //  function signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //     .then((e) => {
    //         let code=prompt('enter the otp','');
    //             if(code==null)
    //             {
    //                 return;
    //             }
    //             e.confirm(code).then(function(result){
    //                 console.log(result.user,'user');
    //             })
    //       }).catch((error) => {
    //         // Error; SMS not sent
    //         // ...
    //       });

    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).

    // ...

    //}

    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: [event.target.value] })

    }
    const [visible, setvisible] = useState(false);

    return (
        <>
           <div >
           <div className='fs-4 ms-3 fw-bold'>Enable Us</div> 
            <hr/>
           </div>

            <div className="container-fluid w-50">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3 ">
                        <label htmlFor="exampleInputphoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name='phoneNumber' value={credentials.phoneNumber} onChange={onchange} />
                        {visible && (<div><label htmlFor="exampleInputphoneNumber" className="form-label">OTP</label>
                            <input type="text" className="form-control" name='otp' value={credentials.otp} onChange={onchange} />
                            <button type="submit" className="btn btn-primary my-3 h-50 float-right" id="sign-in-button" onClick={submitOtp}>Verify</button>
                            <button type="submit" className=" btn btn-success my-3 h-50 ms-3">Login</button></div>)}
                        {!visible && (<div> <button type="submit" className="btn btn-primary my-3 h-50" id="sign-in-button" onClick={onSignInSubmit}>Get OTP</button></div>)}

                        {/* <div id="emailHelp" className="form-text">* Required</div> */}
                    </div>


                   
                    {/* <button className="btn ms-3 fs-5 " style={{ "border": "none" }}><Link to="/Login">Already A User?</Link></button> */}
                </form>
            </div>
        </>
    )
}

