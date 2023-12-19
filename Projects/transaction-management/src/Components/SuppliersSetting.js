import { getDatabase,ref, onValue } from 'firebase/database';
import React, { useState } from 'react';
import { createSupplier, deleteSupplier, updateSupplier } from '../CRUD';

const SuppliersSetting = () => {
   const database = getDatabase();
   let datadb = [];
   const cartRef = ref(database, 'suppliers/');
   onValue(cartRef, (snapshot) => {
      try {
         datadb = Object.values(snapshot.val());
         if (!!datadb) {
            return datadb
         } else {
            console.log('Data not found');
         }
      } catch (error) {
         console.log("no values left: SUPPLIERSSETTING");
      }
   });

   const [prevalue, setPrevalue] = useState();
   const [updateValue, setUpdateValue] = useState();
   const [newData, setNewData] = useState();
   const [selected, setSelected] = useState();
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
         createSupplier(newData);
      }
   }
   const handleDelete = async (e) => {
      e.preventDefault();
      deleteSupplier(selected);
   }
   const handleSelect = (e) => {
      setSelected(e.target.value);
      //set previous value for update parameter
      console.log("prev value"+e.target.value)
      setPrevalue(e.target.value);

      //set to input value field
      let updateInput = document.querySelector('#updateField');
      updateInput.value = e.target.value;
   }
   const handleUpdate = (e) => {
      e.preventDefault();
      console.log(prevalue, updateValue);
      updateSupplier(prevalue, updateValue);
   }
   const handleChangeUpdate = (e) => {
      console.log("update value : "+e.target.value);
      setUpdateValue(e.target.value);
   }

   return (
      <>
         <div>SuppliersSetting</div>
         <form>
            <input onChange={handleChange} placeholder='Name' type='text' name='name' />
            <input onChange={handleChange} placeholder='Phone no.' type='phone' name='phone' />
            <button onClick={handleAdd}>Add Supplier</button>
         </form>
         <form>
            <select onChange={handleSelect}>
               <option>none</option>
               {
                  datadb.map((db) => (
                     <option value={db.name} key={db.name}>{db.name}</option>
                  ))
               }
            </select>
            <button onClick={handleDelete}>delete Supplier</button>
            <h2>To </h2>
            <input id='updateField' onChange={handleChangeUpdate} placeholder='Name' type='text' name='name' />
            <button onClick={handleUpdate}>update Supplier</button>
         </form>
      </>
   )
}

export default SuppliersSetting