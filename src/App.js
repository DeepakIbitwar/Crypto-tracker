import { Dashboard } from '@mui/icons-material';
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CoinPage from './pages/coin';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
    <Route path="/" element={<HomePage/>}/>
         <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
       </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
