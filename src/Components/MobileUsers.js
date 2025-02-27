import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
function MobileUsers() {
    const navigate=useNavigate()
    const [list,setList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/Product')
        .then(res=>setList (res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='cards'>
        {list.map(x=>(
            <div className='grid-items'>
                <img src={x.img} width={200} height={200}/>
                <h1>{x.name}</h1>
                <h2>{x.price}</h2>
                <button onClick={()=>navigate(`/mobiles/${x.id}`)}>See Details</button>
                </div>
))}

    </div>
  )
}
export default MobileUsers