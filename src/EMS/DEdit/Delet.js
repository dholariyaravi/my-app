import axios from 'axios';
import React, { useState } from 'react'
import { json } from 'react-router-dom';

export default function Delet(props) {

    // const [data, setdata] = useState([]);
  
    const mydeleted = async (e,id) => {
        // let data = localStorage.getItem('user11')
        // let x = json.parse(data);

        // e.preventDefault();
        // console.log(e);
        // axios.delete(`http://localhost:4000/accounts?=${props.data.delete}`,{
        //     headers: {
        //         'Authorization': 'Bearer ' + x?.jwtToken
        //     }
        // });            
    };

  return (
    <div>
    
        <button><i onClick={mydeleted} class="fa fa-trash-o" aria-hidden="true"><span className='p-2'>Delete</span></i></button>


    </div>
  )
}
