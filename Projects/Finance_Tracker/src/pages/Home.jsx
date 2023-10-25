import { Box, Card, Container, Button,Modal} from "@mantine/core";
import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfig';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading} from '../redux/alertsSlice';
import TransactionTable from "../components/TransactionTable";
import Filters from "../components/Filters";
import moment from "moment";
const Home = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // Filters
  const [filters, setFilters] = useState({
    type: "",
    frequency: "7",
  });

  // 1st state

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add");

  // 2nd AFTER FORM SUBMIT GET DATA
  const [transactions, setTransactions] = useState([]);

  // 3rd for selected transaction

  const [selectedTransaction, setSelectedTransaction] = useState({});


  const dispatch = useDispatch();

  const getWhereConditions = () => {
    const tempConditions = [];

    // Type condition
    if(filters.type !== ""){
      tempConditions.push(
        where("type", "==", filters.type)
      )
    }

    // Frequency condition

    if(filters.frequency === "7"){
      tempConditions.push(
        where("date", ">=", moment().subtract(7, "days").format("YYYY-MM-DD"))
      )
    }

    if(filters.frequency === "30"){
      tempConditions.push(
        where("date", ">=", moment().subtract(30, "days").format("YYYY-MM-DD"))
      )
    }

    if(filters.frequency === "365"){
      tempConditions.push(
        where("date", ">=", moment().subtract(365, "days").format("YYYY-MM-DD"))
      )
    }

    return tempConditions;
   
  }

  const getData = async () => {

    try{


      const whereConditions = getWhereConditions();

      dispatch(ShowLoading());

      const qry = query(collection(fireDb, `users/${user.id}/transactions`),
      orderBy("date", "desc"),
      ...whereConditions);

      const response = await getDocs(qry)
      
      const data = response.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),
      }))

      setTransactions(data);

      // Hideform
      setShowForm(false);

      dispatch(HideLoading());
      
    }catch(error){
        dispatch(HideLoading());
    }
  }

  useEffect(() => {
    getData();
  },[])

  useEffect(() => {
    getData();
  },[filters])
    
  return (
    <Container size={"lg"}>
      <Box>
        <Card 
        sx={{
          height:"100vh"
        }}
        shadow={"md"}
        withBorder
        mt={50}
        style={{backgroundColor:'#FFF9DE'}}>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
               <div>
                   <Filters
                   filters={filters}
                   setFilters={setFilters}
                   getData={getData}/>
               </div>
               <div>
                   <Button color="red" 
                   onClick={() => {
                    setShowForm(true);
                    setFormMode("add");
                   }}>
                       <i className="ri-add-line" style={{fontSize:"18px", marginRight:"10px"}}></i>
                       Add Transction
                   </Button>
               </div>
          </div>

          {/* last Show Data after get */}
          <TransactionTable 
          getData={getData}
          transactions={transactions} 
          setSelectedTransaction={setSelectedTransaction}
          setFormMode={setFormMode}
          setShowForm={setShowForm}
          />
        </Card>

      </Box>
    

      <Modal
        size={"md"}
        centered
        opened={showForm} 
        onClose={() => setShowForm(false)} title={
        formMode === "add" ? "Add Transaction" : "Edit Transaction"
      }>
        <TransactionForm
        formMode={formMode}
        setFormMode={setFormMode}
        setShowForm={setShowForm}
        showForm={showForm}
        transactionData={selectedTransaction}
        getData={getData}/>
      </Modal>
    </Container>
  )
}

export default Home