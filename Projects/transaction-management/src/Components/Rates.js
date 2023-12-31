import './Rates.css'
import React, { useEffect, useState } from 'react'
import { ref, onValue, getDatabase } from 'firebase/database';
import { createProduct, deleteProduct, updateProduct } from '../CRUD';

const Rates = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState(true);
   const [newData, setNewData] = useState({ name: "", rate: "" });
   const database = getDatabase();
   const [prevData,setPrevData] = useState();
   const [edit,setEdit] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         let datadb = [];
         const cartRef = await ref(database, 'rates/');
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
   }, [database]);

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
      } else if (newData.name === '' || newData.rate === undefined || newData.rate === '') {
         console.log("please fill all values : handleAdd")
      } else {
         createProduct(newData);
         setNewData({ name: "", rate: "" });
      }
   }

   //converts add supplier form to update form 
   const handleEdit= (name,rate)=>(e)=>{
      e.preventDefault()
      setEdit(true);
      setPrevData({name:name,rate:rate})
      setNewData({name:name,rate:rate});
   }
   //calls updateSupplier from crud file
   const updateRate=(e)=>{
      e.preventDefault();

      //gets an error because we hadn't made a function to update both values in CRUD file
      updateProduct(prevData,newData);

      //resetting the update/add button and its input fields
      setEdit(false);
      setNewData({name:"",rate:""});
   }

   const handleDelete = (e) => {
      e.preventDefault();
      if (window.confirm("confirm Delete? ") === true) {
         deleteProduct(e.target.value);
      }
   }


   if (isLoading) {
      return <p>Loading...</p>
   }
   return (
      <>
         <div><h4>Rates</h4></div>
         <div>
            <form>
               <input value={newData.name} onChange={handleChange} placeholder='Name' type='text' name='name' />
               <input value={newData.rate} onChange={handleChange} placeholder='Rate.' type='phone' name='rate' />
               <button onClick={edit?updateRate:handleAdd}>{edit?"Update":"Add Rates"}</button>
            </form>
         </div>
         <div>
            <table>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Rate</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map(item => (
                     <tr key={item.name}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.rate}</td>
                        <td><button value={item.name} onClick={(e)=>handleEdit(item.name,item.rate)(e)}>edt</button></td>
                        <td><button value={item.name} onClick={handleDelete}>del</button></td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   )
}

export default Rates