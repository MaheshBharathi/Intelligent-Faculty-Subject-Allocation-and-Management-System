import React,{useState} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'

function Users() {
    const [id,setId]=useState('')
    const navigate=useNavigate()
  return (
    <div>
        <input type='search' placeholder='search users' value={id} onChange={(e)=>setId(e.target.value)}/>
        <button onClick={()=>navigate(id)}>search</button>
        <Outlet/>
    </div>
  )
}
export default Users