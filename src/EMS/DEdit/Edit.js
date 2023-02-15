import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import axios from 'axios';
// import React, { useState } from 'react';
import { toast } from 'react-toastify';



export default function Edit() {

    const [data, setdata] = React.useState({
        title : "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: 'true'
    });

     const myhedal = (e) => {
        setdata({...data,[e.target.name]: e.target.value});
     }

     const mysubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        axios.post('http://localhost:4000/accounts/register',data)
            .then(p => {
                console.log(p.data)
                toast('login Successfully')
            }).catch(
                p => {
                   toast('faled')
                   console.log(p)
        });
     }



// ============================================================
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
 
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>

      <div className='css111'>
           <form className='from122' onSubmit={mysubmit}>
           
           <h2 style={{color:'white'}}>Register</h2><br/>
        
        <TextField  label="title" variant="outlined" className='coll-11' name="title" onChange={myhedal}/><br/><br/>
        <TextField  label="firstName" variant="outlined" className='coll-11' name="firstName" onChange={myhedal}/><br/><br/>
        <TextField  label="lastName" variant="outlined" className='coll-11' name="lastName" onChange={myhedal}/><br/><br/>
        <TextField  label="email" variant="outlined" className='coll-11' name="email" onChange={myhedal}/><br/><br/>
        <TextField  label="password" variant="outlined" className='coll-11' name="password" onChange={myhedal}/><br/><br/>
        <TextField  label="confirmPassword" variant="outlined" className='coll-11' name="confirmPassword" onChange={myhedal}/><br/><br/>

        {/* <input type='submit' value='Save' className='btnbuttom'/> */}

        <div className="container">
          <input type='submit' href="#" className="btn" value=' Submit ' />
       </div>

        </form>

        {/* <Link className='btn btn-dark' to={'/'}>LoginEMS</Link> */}

    </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
 </div>
  );
}