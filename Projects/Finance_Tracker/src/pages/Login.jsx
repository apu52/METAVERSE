import { Card,PasswordInput,Stack,TextInput,Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfig';
import CryptoJS from 'crypto-js';
import { showNotification } from '@mantine/notifications';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading} from '../redux/alertsSlice';

const Login = () => {

  const navigate = useNavigate();

  const loginForm = useForm({
    initialValues : {
        email: "",
        password: ""
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    try{
      e.preventDefault();

      dispatch(ShowLoading());


      // Check if user already exist 

      // Before Encrypt
      // const qry = query(
      //   collection(fireDb, "users"),
      //   where("email","==", loginForm.values.email),
      //   where("password","==", loginForm.values.password)
      // );

      const qry = query(
        collection(fireDb, "users"),
        where("email","==", loginForm.values.email),
      );

      const existingUsers = await getDocs(qry);

      if(existingUsers.size > 0){
        // Decrypt Password
        const decryptedPassword = CryptoJS.AES.decrypt(
          existingUsers.docs[0].data().password,
          "djkhkjasF98329JHDS9T863IHADS97",
        ).toString(CryptoJS.enc.Utf8);
        if(decryptedPassword === loginForm.values.password){
          showNotification({
            title:"User logged in succesfully",
            color: "green",
            autoClose: 3000,
          })
        const dataToStoreLs = {
          name: existingUsers.docs[0].data().name,
          email: existingUsers.docs[0].data().email,
          id: existingUsers.docs[0].id
        }  

        localStorage.setItem("user", JSON.stringify(dataToStoreLs));
        navigate("/");
        } else {
          showNotification({
            title:"Invalid",
            color: "red",
            autoClose: 3000,
          })
        }
       
      } else {
        showNotification({
          title:"User not found",
          color: "red",
          autoClose: 3000,
        })
      }
      dispatch(HideLoading());
    } catch(error){
      dispatch(HideLoading());
      console.log("Something went worng");
    }
  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center" , height:"100vh"}}>
         <Card
         shadow={'lg'}
         mt={"lg"}
         sx={{
          width:400
         }}
         withBorder>
            <Stack>
                <h2>Login</h2>
            </Stack>
            <form onSubmit={onSubmit}>
                <Stack mb={20}>
                    <TextInput label="Email"
                    required
                    type="email"
                    placeholder='Enter your email'
                    name="email"
                    {...loginForm.getInputProps("email")}/>
                </Stack>
                <Stack mb={20}>
                    <PasswordInput label="Password"
                    required
                    minLength={6}
                    placeholder='Enter your Password'
                    name="password"
                    {...loginForm.getInputProps("password")}/>
                </Stack>

                <Button fullWidth type='submit' mb={20}>Submit</Button>

                <Link to="/register" style={{color:"grey", textDecoration:"none",}}>Don't have an account? Register Here</Link>
            </form>
        </Card>
    </div>
  )
}

export default Login