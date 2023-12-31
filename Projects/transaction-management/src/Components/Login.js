import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import { auth} from '../firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';

function Login({ setAuthMiddleware }) {
   const [isLoading, setLoading] = useState(false);
   const [text, setText] = useState();
   const navigate = useNavigate();
   
   const handleText = (e) => {
      e.preventDefault();
      setText({                                   
         ...text,
         [e.target.name]: e.target.value
      });
   }
   const handleLogin = (e) => {
      e.preventDefault();
      //login check
      setLoading(true);
      signInWithEmailAndPassword(auth, text.username, text.password)
         .then((userCredential) => {
            handleSuccess();
            setAuthMiddleware(true);
            setLoading(false);
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setLoading(false);
         });

   }
   const handleSuccess = () => {
      navigate('/home');
   }
   return (
      <>
         Login page
         <Form className='loginForm'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control onChange={handleText} name='username' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control onChange={handleText} name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button  disabled={isLoading} onClick={handleLogin} variant='outline-dark'>{isLoading ? 'Loading…' : 'Login'}</Button>
         </Form>
      </>
   );
}
export default Login;