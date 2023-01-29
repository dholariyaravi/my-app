import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginEMS from './EMS/LoginEMS';
import Regested from './EMS/Regested';
import RequireAuth from './EMS/Private/Requauth';
import Dashboard from './EMS/Dashboard';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginEMS/>}/>
      <Route path="/register" element={<Regested/>}/>
      <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
