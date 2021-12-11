import './App.css';
import { Dashboard } from './components/Dashboard';
import { Topbar } from './components/Navigation/Topbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './components/Pages/LoginPage';
import { Register } from './components/Pages/Register';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000';
function App() {
  return (
    <>
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="dashboard/*" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
