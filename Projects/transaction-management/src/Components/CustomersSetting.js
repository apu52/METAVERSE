import React, { useEffect, useState } from 'react';
import { createCustomer, deleteCustomer, updateCustomer } from '../CRUD';
import { getDatabase, ref, onValue } from 'firebase/database';

const CustomersSetting = () => {

   const [prevalue, setPrevalue] = useState();
   const [updateValue, setUpdateValue] = useState();
   const [newData, setNewData] = useState({ name: "", phone: "" });
   const [selected, setSelected] = useState("");
   const database = getDatabase();
   const [phoneData, setPhoneData] = useState();
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         let datadb = [];
         const cartRef = await ref(database, 'customers/');
         onValue(cartRef, (snapshot) => {
            try {
               datadb = Object.values(snapshot.val());
               if (!!datadb) {
                  console.log("customer data retrived");
                  setData(datadb);
                  setIsLoading(false);
               } else {
                  console.log('Data not found');
                  setIsLoading(false);
               }
            } catch (error) {
               console.log("no values to display: CUSTOMERSETTINGS");
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
      }
      else if (newData.name === '' || newData.phone === undefined || newData.phone === '') {
         console.log("please fill all values : handleAdd")
      } else {
         createCustomer(newData);
         setNewData({ name: "", phone: "" });
      }
   }
   const handleDelete = async (e) => {
      e.preventDefault();
      deleteCustomer(selected);
      //empty the field
      let updateInput = document.querySelector('#updateField');
      updateInput.value = "";
      setPhoneData("");
   }
   const handleSelect = (e) => {
      let selectedValue = e.target.value;
      setSelected(selectedValue);
      console.log(selectedValue);
      //set previous value for updateCustomer function parameter
      setPrevalue(selectedValue);

      //set value to phoneMenu list as per name Menu
      let result = data.find(item => item.name === selectedValue);
      if (result) {
         const phone = result.phone;
         let phoneMenu = document.querySelector('#phoneMenu');
         phoneMenu.value = phone;
         setPhoneData(phone);
      }
      if(selectedValue==="none"){
         setPhoneData("");
      }

      //set to input value field
      let updateInput = document.querySelector('#updateField');
      updateInput.value = selectedValue;
   }
   const handleUpdate = (e) => {
      e.preventDefault();
      if (updateValue === undefined) {
         updateCustomer(prevalue, prevalue, phoneData)
      }
      else {
         updateCustomer(prevalue, updateValue, phoneData);
      }
      let updateInput = document.querySelector('#updateField');
      updateInput.value = "";
      setPhoneData("");
   }
   const handleChangeUpdate = (e) => {
      setUpdateValue(e.target.value);
   }
   const handleChangeUpdatePhone = (e) => {
      setPhoneData(e.target.value);
   }

   if (isLoading) {
      return <p>Loading...</p>
   }
   return (
      <>
         <div>CustomersSetting</div>
         <form>
            <input value={newData.name} onChange={handleChange} placeholder='Name' type='text' name='name' />
            <input value={newData.phone} onChange={handleChange} placeholder='Phone no.' type='phone' name='phone' />
            <button onClick={handleAdd}>Add Customer</button>
         </form>
         <form>
            <select onChange={handleSelect}>
               <option>none</option>
               {
                  data.map((db) => (
                     <option value={db.name} key={db.name}>{db.name}</option>
                  ))
               }
            </select>
            <select disabled id='phoneMenu'>
               <option>none</option>
               {
                  data.map((db) => (
                     <option value={db.phone} key={db.phone}>{db.phone}</option>
                  ))
               }
            </select>
            <button onClick={handleDelete}>delete Customer</button>
            <h2>To </h2>
            <input id='updateField' onChange={handleChangeUpdate} placeholder='Name' type='text' name='name' />
            <input value={phoneData} id='updateFieldPhone' onChange={handleChangeUpdatePhone} placeholder='Phone' type='text' name='phone' />
            <button onClick={handleUpdate}>update Customer</button>
         </form>

      </>

   )
}

export default CustomersSetting