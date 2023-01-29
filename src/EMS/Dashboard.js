import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Global } from '@emotion/react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import Delet from './DEdit/Delet';
import Edit from './DEdit/Edit';

export default function Dashboard() {

  
  const [column,setcolumn] = useState ([
    {field:"title",filter: true},
    {field:"firstName",filter: true},
    {field:"lastName",filter: true},
    {field:"email",filter: true},
    {field:"id",filter: true},
    {field:"title",filter: true},
    {field:"role",filter: true},
    // {field:"created",filter: true},
    {
      field: "delet",
      cellRenderer: Delet,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
    },
    {
      field: "edit",
      cellRenderer: Edit,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
     },
    },

    
  

  ]);
  

  const [row, setrow] = useState ([]);  

  useEffect(()=>{
    let data = localStorage.getItem("user11")
    let p = JSON.parse(data)

    axios.get("http://localhost:4000/accounts",{
        headers: {
            'Authorization': 'Bearer ' + p?.jwtToken
        }
    })
 
    .then(y => {
        setrow(y.data)
    })
   },[])

  return (
    <div>
        <Header/>

        <div className="ag-theme-alpine" style={{width: 'auto', height: 500}}>
        <AgGridReact rowData={row} columnDefs={column} ></AgGridReact>
       </div>

     </div>
  )
}

// rr11@gmail.com


// {"id":"63ce96ce8b6bc290341df1d7","title":"nameee","firstName":"ravi","lastName":"dholariya","email":"rr11@gmail.com","role":"User","created":"2023-01-23T14:16:46.818Z","isVerified":false,"jwtToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2NlOTZjZThiNmJjMjkwMzQxZGYxZDciLCJpZCI6IjYzY2U5NmNlOGI2YmMyOTAzNDFkZjFkNyIsImlhdCI6MTY3NDU2MjE5NCwiZXhwIjoxNjc0NTYzMDk0fQ.-UAfLpokbH4NW70aKReNc61I2AgQGPXTzmFCggDkpZA"}