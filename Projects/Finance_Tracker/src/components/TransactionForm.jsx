import { Stack, TextInput, Select, Button} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import React, { useEffect } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfig';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading} from '../redux/alertsSlice';

 

const TransactionForm = ({formMode,setFormMode,showForm,setShowForm, transactionData,getData}) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const transactionForm = useForm({
    initialValues: {
        name: "",
        type: "",
        amount:"",
        category:"",
        date:"",
        reference:""
    }
  }) 


  const {name, type, amount, category, date, reference} = transactionForm.values;

  const onSubmit = async(e) => {
    e.preventDefault();
    if(
    name === "" || 
    type === "" || 
    amount === "" || 
    category === "" || 
    date === "" || reference === ""){
        showNotification({
            title:"please fill all the filed",
            color:'red'
        });
        return;
    }
    
    try{
      dispatch(ShowLoading());
    
    // 1st Before to edit  

    //   await addDoc(collection(fireDb,
    //   `users/${user.id}/transactions`),
    //   transactionForm.values
    //   );

    if(formMode === "add"){
        await addDoc(collection(fireDb,
            `users/${user.id}/transactions`),
            transactionForm.values
        );
    } else {
        await setDoc(doc(fireDb,
            `users/${user.id}/transactions`, transactionData.id),
            transactionForm.values
        );
    }


    // Hideform
    setShowForm(false);

    showNotification({
    title: formMode === "add" ? "Transaction added successfully" : "Transaction Updated successfully",
    color:"green"
    })

    getData();

    dispatch(HideLoading());
      
    }catch(error){

        console.log(error);

        showNotification({
            title:"Error adding successfully",
            color:"red"
        })

        dispatch(HideLoading());
    }


  }

  useEffect(() => {
     if(formMode === "edit"){
        transactionForm.setValues(transactionData);
     }
  },[transactionData]);


  return (
    <div>
        <form onSubmit={onSubmit}>
            <Stack mb={10}>
                <TextInput
                 name="name"
                 label="Name"
                 placeholder="Enter Transaction Name"
                 {...transactionForm.getInputProps("name")}
                />
            </Stack>
            <Stack mb={10}>
            <Select
                name="type"
                label="Type"
                placeholder="Select Transaction Type"
                data={[
                    { value: 'income', label: 'Income' },
                    { value: 'expense', label: 'Expense' }
                ]}
                {...transactionForm.getInputProps("type")}
            />
            </Stack>
            <Stack mb={10}>
            <Select
                name="category"
                label="Category"
                placeholder="Select Transaction Category"
                data={[
                    { value: 'food', label: 'Food' },
                    { value: 'transport', label: 'Transport' },
                    { value: 'shopping', label: 'shopping' },
                    { value: 'entertainment', label: 'Entertainment' },
                    { value: 'education', label: 'Education' },
                    { value: 'salary', label: 'Salary' },
                    { value: 'freelance', label: 'Freelance' },
                ]}
                {...transactionForm.getInputProps("category")}
            />
            </Stack>
            <Stack mb={10}>
                <TextInput
                 name="amount"
                 label="Amount"
                 type="number"
                 placeholder="Enter Transaction Amount"
                 {...transactionForm.getInputProps("amount")}
                />
            </Stack>
            <Stack mb={10}>
                <TextInput
                 name="date"
                 label="Date"
                 type="date"
                 placeholder="Enter Transaction Name"
                 {...transactionForm.getInputProps("date")}
                />
            </Stack>
            <Stack mb={10}>
                <TextInput
                 name="reference"
                 label="Reference"
                 placeholder="Enter Transaction Reference"
                 {...transactionForm.getInputProps("reference")}
                />
            </Stack>
            <Stack mt={20}>
                <Button type='submit' color={formMode === "add" ? "green" : "yellow"}>
                    {
                      formMode === "add" ? "Add Transaction" : "Edit Transaction"
                    }
                </Button>
            </Stack>

        </form>
    </div>
  )
}

export default TransactionForm