import './Suppliers.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ref, onValue, getDatabase } from 'firebase/database';
import { createSupplier, deleteSupplier, updateSupplier } from '../CRUD';

const Suppliers = () => {

   const database = getDatabase();
   // const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState(true);
   const [newData, setNewData] = useState({ name: "", phone: "" });
   const [prevData,setPrevData] = useState();
   const [edit,setEdit] = useState(false);

   // const handleADE = () => {
   //    navigate('/editsuppliers');
   // }

   useEffect(() => {
      const fetchData = async () => {
         let datadb = [];
         const cartRef = await ref(database, 'suppliers/');
         onValue(cartRef, (snapshot) => {
            try {
               datadb = Object.values(snapshot.val());
               if (!!datadb) {
                  setData(datadb);
                  setIsLoading(false);
               } else {
                  console.log('Data not found');
                  setIsLoading(false);
               }
            } catch (error) {
               console.log("no values to display: CRUD");
               setIsLoading(false);
            }
         });
      }
      fetchData();
   }, [database])

   const handleChange = (e) => {
      setNewData({
         ...newData,
         [e.target.name]: e.target.value
      });
   }
   const handleAdd = (e) => {
      e.preventDefault();
      if (newData === undefined) {
         console.log("please enter values here : handleAdd");
      } else if (newData.name === '' || newData.phone === undefined || newData.phone === '') {
         console.log("please fill all values : handleAdd")
      } else {
         createSupplier(newData);
         setNewData({ name: "", phone: "" });
      }
   }

   //converts add supplier form to update form 
   const handleEdit= (name,phone)=>(e)=>{
      e.preventDefault()
      setEdit(true);
      setPrevData({name:name,phone:phone})
      setNewData({name:name,phone:phone});
   }
   //calls updateSupplier from crud file
   const updateSup=(e)=>{
      e.preventDefault();

      //gets an error because we hadn't made a function to update both values in CRUD file
      updateSupplier(prevData,newData);

      //resetting the update/add button and its input fields
      setEdit(false);
      setNewData({name:"",phone:""});
   }

   const handleDelete = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      if (window.confirm("confirm delete the supplier?") === true) {
         deleteSupplier(e.target.value);
      }
   }

   if (isLoading) {
      return <p>Loading...</p>
   }
   return (
      <div className='Suppliers'>
         <h2>Suppliers</h2>
         <form>
            <input value={newData.name} onChange={handleChange} placeholder='Name' type='text' name='name' />
            <input value={newData.phone} onChange={handleChange} placeholder='Phone no.' type='phone' name='phone' />
            <button onClick={edit?updateSup:handleAdd}>{edit?"Update":"Add Supplier"}</button>
         </form>
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Edit</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {data.map(item => (
                  <tr key={item.name}>
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td>{item.phone}</td>
                     <td><button value={item.name} onClick={(e)=>handleEdit(item.name,item.phone)(e)}>edt</button></td>
                     <td><button value={item.name} onClick={handleDelete}>del</button></td>
                  </tr>
               ))}
            </tbody>
         </table>

         {/* <div className='supplier-operations'>
            <button onClick={handleADE}>Add/Delete/Edit Supplier</button>
         </div> */}
      </div>
   )

}

export default Suppliers