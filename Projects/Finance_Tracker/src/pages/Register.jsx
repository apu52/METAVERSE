import { Card,PasswordInput,Stack,TextInput,Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link,useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfig';
import CryptoJS from 'crypto-js';
import { showNotification } from '@mantine/notifications';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading} from '../redux/alertsSlice';

const Register = () => {

  const registerForm = useForm({
    initialValues : {
        name: "",
        email: "",
        password: ""
    },
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async(e) => {
    
    try{

      e.preventDefault();
      dispatch(ShowLoading())

      // Check if user already exist 

      const qry = query(
        collection(fireDb, "users"),
        where("email","==", registerForm.values.email)
      );

      const existingUsers = await getDocs(qry);

      if(existingUsers.size > 0){
        showNotification({
          title:"User already Exist",
          color: "red",
          autoClose: 3000,
        })
        dispatch(HideLoading())
        return;
      } else {
        // encrypted password
        const entryptedPassword = CryptoJS.AES.encrypt(
          registerForm.values.password,
          "djkhkjasF98329JHDS9T863IHADS97",
        ).toString();
        const response = await addDoc(collection(fireDb, "users"),{
          ...registerForm.values,
          password: entryptedPassword
        });
        if(response.id){
          showNotification({
            title:"User created succesfully",
            color: "green",
            autoClose: 3000,
          })
        } else {
          showNotification({
            title:"Invalid credential",
            color: "red",
            autoClose: 3000,
          })
        }
      }
      dispatch(HideLoading())
      navigate("/login");
      // Before Encrypted
      // const response = await addDoc(collection(fireDb, "users"), registerForm.values);
    } catch(error){
      dispatch(HideLoading())
      showNotification({
        title:"Invalid credential",
        color: "red",
        autoClose: 3000,
      })
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
                <h2>Registration</h2>
            </Stack>
            <form onSubmit={onSubmit}>
                <Stack mb={20}>
                    <TextInput label="Name"
                    required
                    placeholder='Enter your name'
                    name="name"
                    {...registerForm.getInputProps("name")}/>
                </Stack>
                <Stack mb={20}>
                    <TextInput label="Email"
                    required
                    type="email"
                    placeholder='Enter your email'
                    name="email"
                    {...registerForm.getInputProps("email")}/>
                </Stack>
                <Stack mb={20}>
                    <PasswordInput label="Password"
                    required
                    minLength={6}
                    placeholder='Enter your Password'
                    name="password"
                    {...registerForm.getInputProps("password")}/>
                </Stack>

                <Button fullWidth type='submit' mb={20}>Submit</Button>

                <Link to="/login" style={{color:"grey", textDecoration:"none"}}>Already have an account! Login</Link>
            </form>
        </Card>
    </div>
  )
}

export default Register