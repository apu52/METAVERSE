
import './App.css';
import Home from './pages/Home';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Salon from './pages/Salon';
import HouseWorkers from './pages/HouseWorkers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Saloonregister from './pages/Saloonregister';
import Womesaloon from './pages/Womesaloon';
import Shop1 from './pages/Shopesmens/Shop1';
import Shop2 from './pages/Shopesmens/Shop2';
import Shop3 from './pages/Shopesmens/Shop3';
import Shop4 from './pages/Shopesmens/Shop4';
import Shop5 from './pages/Shopesmens/Shop5';
import { CartProvider } from './components/Contextreducer';
import Myorders from './pages/Myorders';

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Signup/>}/>
        <Route exact path="/SignUp" element={<Signup/>}/>
        <Route exact path="/Man-Salon" element={<Salon/>}/>
        <Route exact path="/Man-Salon/Shop-1" element={<Shop1/>}/>
        <Route exact path="/Man-Salon/Shop-2" element={<Shop2/>}/>
        <Route exact path="/Man-Salon/Shop-3" element={<Shop3/>}/>
        <Route exact path="/Man-Salon/Shop-4" element={<Shop4/>}/>
        <Route exact path="/Man-Salon/Shop-5" element={<Shop5/>}/>
        <Route exact path="/Women-Salon" element={<Womesaloon/>}/>
        <Route exact path="/My-Orders" element={<Myorders/>}/>
        <Route exact path="/House-Workers" element={<HouseWorkers/>}/>
        <Route exact path="/partner-with-us" element={<Saloonregister/>}/>
        
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
