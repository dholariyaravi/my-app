import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "./EMS11.css";


export default function LoginEMS() {


  const [data1, setdata1] = useState({
    email: "",
    password: "",
  });
  const myNav =useNavigate()

  const myhedal1 = (e) => {
    setdata1({ ...data1, [e.target.name]: e.target.value });
  };

  const mysubmit = (e) => {
    e.preventDefault();
    console.log(e);

    axios
      .post("http://localhost:4000/accounts/authenticate", data1)
      .then((p) => {
        console.log(p);
        localStorage.setItem("user11", JSON.stringify(p.data));
        myNav("/dashboard")

        toast("login Successfully");
      })
      .catch((p) => {
        toast("falid");
        console.log(p);
      });
  };

  return (
    <div className="clssLOgin">
      
      <form className="FormLogin12" onSubmit={mysubmit}>
      <h2><i className="fa fa-user-circle-o" style={{color:'darkblue'}} 
       aria-hidden="true"><span   style={{color:'darkslategray'}} className="p-2">     Sign in</span></i>
      </h2>
     
      <br/>
        <TextField
          label="email"
          variant="outlined"
          className="coll-1222"
          onChange={myhedal1}
          name="email"
        />
        <br />
        <br />
        <TextField
          label="password"
          variant="outlined"
          className="coll-1222"
          onChange={myhedal1}
          name="password"
        />
        <br />
        <br />

        <div className="container">
          <input type='submit' style={{color:'darkblue'}} href="#" className="btn" value=' Login ' />
       </div>

      </form>

   
      {/* <Link className='btn btn-dark' to={'/register'}>Regested11</Link> */}
    </div>
  );
}
