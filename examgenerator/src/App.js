import './App.css';
import { Dashboard } from './components/Dashboard';
import { Topbar } from './components/Navigation/Topbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<Topbar/>} />
      <Route path="dashboard/*" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
