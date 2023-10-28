import { Group, Table } from '@mantine/core'
import { deleteDoc,doc } from 'firebase/firestore';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { fireDb } from '../FirebaseConfig';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading} from '../redux/alertsSlice';
import { showNotification } from '@mantine/notifications'

const TransactionTable = ({transactions,
    setSelectedTransaction,
    setFormMode,
    setShowForm,
    getData
    }) => {    

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")); 

  
  const getRows = transactions.map((transaction) => (
    <tr key={uuidv4()}>
        <td>{transaction.name}</td>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.date}</td>
        <td>{transaction.category}</td>
        <td>{transaction.reference}</td>
        <td>
            <Group>
                <i className='ri-pencil-line pencil' onClick={() => {
                    setSelectedTransaction(transaction)
                    setFormMode("edit")
                    setShowForm(true)
                }}></i>
                <i className='ri-delete-bin-line delete' 
                onClick={() => deleteTransaction(transaction.id)}></i>
            </Group>
        </td>
    </tr>
  ))

  const deleteTransaction = async (id) => {
    try{
       dispatch(ShowLoading())
       await deleteDoc(doc(fireDb, `users/${user.id}/transactions`, id))
       dispatch(HideLoading());
     
       showNotification({
           title: "Transaction deleted successfully",
           color:"green"
       })

       getData();

    } catch(error){
       console.log(error)
    }
 }

 if(transactions.length === 0){
  return <h2 style={{marginTop:"50px"}}>No Transaction Added</h2>
 }
  
  

  return (
    <Table mt={30} striped verticalSpacing="md" horizontalSpacing="md" highlightOnHover>
       <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Reference</th>
                <th>Action</th>
            </tr>
       </thead>

       <tbody>
            {getRows}
       </tbody>
    </Table>
  )
}

export default TransactionTable