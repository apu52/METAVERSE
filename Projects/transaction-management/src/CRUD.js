import { getDatabase, ref, set, push, child, orderByChild, query, equalTo, get, update } from 'firebase/database';

const database = getDatabase();

// write data operation for transactions
const createTransaction = (personType,personName,productName,productQuantity) => {
   const dataObj={
      name:personName,
      product:productName,
      quantity:productQuantity
   };
   let date=new Date();
   let year=date.getFullYear();
   let month=date.getMonth()+1;
   let day=date.getDate();
   //let zero=0;
   const key = push(child(ref(database), 'transactions')).key;
   set(ref(database, 'transactions/'+0+"/"+year+"/"+month+"/"+day+"/"+personType+"/" + key), dataObj).then(() => {
      console.log("transaction created");
   }).catch((error) => {
      console.log(error);
   });
}

// write data operation for create Customers
const createCustomer = (newData) => {
   const key = push(child(ref(database), 'customers')).key;
   set(ref(database, 'customers/' + key), newData).then(() => {
      console.log("customer created");
   }).catch((error) => {
      console.log(error);
   });
}


//Delete data by its value for customer
const deleteCustomer = async (nameToDelete) => {
   if (nameToDelete === null || nameToDelete === undefined) {
      return console.log("select options OR no values to delete");
   }
   const customersRef = ref(database, 'customers');
   // Query to find the customer with the specified name
   const queryByName = query(customersRef, orderByChild('name'), equalTo(nameToDelete));
   try {
      // Get the snapshot of customers matching the query
      const snapshot = await get(queryByName);
      // Loop through the results to get the key(s) and delete the data
      snapshot.forEach((childSnapshot) => {
         const keyToDelete = childSnapshot.key;
         // Delete the customer data
         set(ref(database, 'customers/' + keyToDelete), null).then(() => {
            // Success
            console.log("success deleting the data");
         })
            .catch((error) => {
               console.log("getting an error as ", error);
            });
      });
   } catch (error) {
      console.error('Error querying customers:', error);
   }
}


//update customer
const updateCustomer = async (preValue, updateValue) => {
   const updateRef = ref(database, 'customers');
   const queryByName = query(updateRef, orderByChild('name'), equalTo(preValue.name));
   if(updateValue.name ===""||updateValue.phone===""){
      return alert("you cannot enter empty values");
   }
   try {
      const snapshot = await get(queryByName);
      snapshot.forEach((childSnapshot) => {
         const keyToUpdate = childSnapshot.key;
         const updates = {};
         updates['customers/' + keyToUpdate + "/name"] = updateValue.name;
         update(ref(database), updates);
         updates['customers/' + keyToUpdate + "/phone"] = updateValue.phone;
         update(ref(database), updates);

         console.log("customer updated successfully");
      });
   } catch (error) {
      console.log("error catched in ctach block  :  ", error);
   }
}


// write data operation for create Suppliers
const createSupplier = (newData) => {

   const key = push(child(ref(database), 'suppliers')).key;
   set(ref(database, 'suppliers/' + key), newData).then(() => {
      console.log("supplier created");
   }).catch((error) => {
      console.log(error);
   });

}


//Delete data by its value for supplier
const deleteSupplier = async (nameToDelete) => {
   if (nameToDelete === null || nameToDelete === undefined) {
      return console.log("select options OR no values to delete");
   }
   const customersRef = ref(database, 'suppliers');
   // Query to find the customer with the specified name
   const queryByName = query(customersRef, orderByChild('name'), equalTo(nameToDelete));
   try {
      // Get the snapshot of customers matching the query
      const snapshot = await get(queryByName);
      // Loop through the results to get the key(s) and delete the data
      snapshot.forEach((childSnapshot) => {
         const keyToDelete = childSnapshot.key;
         // Delete the customer data
         set(ref(database, 'suppliers/' + keyToDelete), null).then(() => {
            // Success
            console.log("success deleting the one supplier");
         })
            .catch((error) => {
               console.log("getting an error as ", error);
            });
      });
   } catch (error) {
      console.error('Error querying customers:', error);
   }
}


//update supplier
const updateSupplier = async (preValue, updateValue) => {
   const updateRef = ref(database, 'suppliers');
   const queryByName = query(updateRef, orderByChild('name'), equalTo(preValue.name));
   if(updateValue.name ===""||updateValue.phone===""){
      return alert("you cannot enter empty values");
   }
   try {
      const snapshot = await get(queryByName);
      snapshot.forEach((childSnapshot) => {
         const keyToUpdate = childSnapshot.key;
         const updates = {};
         updates['suppliers/' + keyToUpdate + "/name"] = updateValue.name;
         update(ref(database), updates);

         updates['suppliers/' + keyToUpdate + "/phone"] = updateValue.phone;
         update(ref(database), updates);

         console.log("supplier updated successfully");
      });
   } catch (error) {
      console.log("error catched in catch block  :  ", error);
   }
}

// write data operation for create Pruducts
const createProduct = (newData) => {
   const key = push(child(ref(database), 'rates')).key;
   set(ref(database, 'rates/' + key), newData).then(() => {
      console.log("Product created");
   }).catch((error) => {
      console.log(error);
   });
}

//Delete data by its value for supplier
const deleteProduct = async (nameToDelete) => {
   if (nameToDelete === null || nameToDelete === undefined) {
      return console.log("select options OR no values to delete");
   }
   const customersRef = ref(database, 'rates');
   // Query to find the customer with the specified name
   const queryByName = query(customersRef, orderByChild('name'), equalTo(nameToDelete));
   try {
      // Get the snapshot of customers matching the query
      const snapshot = await get(queryByName);
      // Loop through the results to get the key(s) and delete the data
      snapshot.forEach((childSnapshot) => {
         const keyToDelete = childSnapshot.key;
         // Delete the customer data
         set(ref(database, 'rates/' + keyToDelete), null).then(() => {
            // Success
            console.log("success deleting the product");
         })
            .catch((error) => {
               console.log("getting an error as ", error);
            });
      });
   } catch (error) {
      console.error('Error querying customers:', error);
   }
}

//update product
const updateProduct = async (preValue, updateValue) => {
   const updateRef = ref(database, 'rates');
   const queryByName = query(updateRef, orderByChild('name'), equalTo(preValue.name));
   if(updateValue.name ===""||updateValue.phone===""){
      return alert("you cannot enter empty values");
   }
   try {
      const snapshot = await get(queryByName);
      snapshot.forEach((childSnapshot) => {
         const keyToUpdate = childSnapshot.key;
         const updates = {};
         updates['rates/' + keyToUpdate + "/name"] = updateValue.name;
         update(ref(database), updates);

         updates['rates/' + keyToUpdate + "/rate"] = updateValue.rate;
         update(ref(database), updates);

         console.log("product updated successfully");
      });
   } catch (error) {
      console.log("error catched in catch block  :  ", error);
   }
}




export { createCustomer, deleteCustomer, updateCustomer, createSupplier, deleteSupplier, updateSupplier,createProduct ,deleteProduct,updateProduct,createTransaction};