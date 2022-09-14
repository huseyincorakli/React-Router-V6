import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

function Personel() {
    const {id}=useParams();
    const [user,setUser]=useState({})
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .catch()
        .finally(()=>setLoading(false));
        
    },[id])
  return (
    <div className='personelMain'>
        {loading && <div>Loading...</div>}
        <div>{user.name}</div>
        <div>{user.phone}</div>
    </div>
  )
}

export default Personel
