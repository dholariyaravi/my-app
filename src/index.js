import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Regested from './EMS/Regested';
import LoginEMS from './EMS/LoginEMS';
import Header from './EMS/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ToastContainer/>

        
        {/* <Header/> */}
          {/* <Regested/><br/>
         <LoginEMS/> */}

    
       {/* <BrowserRouter>
       <Routes>
         <Header/>

       <Route path="/login" element={<LoginEMS/>} />
         <Route path="/Regested" element={<Regested/>} />

       </Routes>
       </BrowserRouter> */}

    <App/>

  </React.StrictMode>
);


reportWebVitals();
