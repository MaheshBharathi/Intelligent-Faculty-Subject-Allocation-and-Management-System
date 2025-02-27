// import axios from 'axios'
// import React,{useEffect,useState} from 'react'
// import MobileUpdateform from './MobileUpdateform'



// function MobileTable() {
//     const[list,setList]=useState([])
//     const[popup,setPopup]=useState(false)
//     const[data,setData]=useState({})
//     useEffect(()=>{
//         axios.get(`http://localhost:3000/products`)
//         .then(res=>setList(res.data))
//         .catch(err=>console.log(err))
//     },[])
//     const handleDel=(id)=>{
//         axios.delete(`http://localhost:3000/products/${id}`)
//         .then(res=>{
//             console.log(res)
//             alert('deleted successfully')
//         })
//         .catch(err=>console.log(err))
//     }
//     const handleEdit=(data)=>{
//         setPopup(true)
//         setData(data)
//     }
//   return (
//     <div>
//         <table>
//             <thead>
//                 <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Description</th>
//                 <th>Image</th>
//                 <th>Action</th>
//                 </tr> 
//             </thead>
//             <tbody>
//                 {list.map(x=>{
//                     <tr>
//                         <td>{x.name}</td>
//                         <td>{x.price}</td>
//                         <td>{x.desc}</td>
//                         <td><img src={x.img}width={100}height={100}/></td>
//                         <td>
//                             <button onClick={()=>handleEdit(x)}>Edit</button>
//                             <button onClick={()=>handleDel(x.id)}>Delete</button>
//                         </td>
//                     </tr>
//                 })}
//             </tbody>
//         </table>
//         {popup&&<MobileUpdateform data={data}setPopup={setPopup}/>}

//     </div>
//   )
// }
// export default MobileTable
import React, { useEffect , useState } from 'react'
import axios from 'axios'
import MobileUpdateform from './MobileUpdateform'

function MobileTable() {
    const[list,setList]=useState([])
    const[popup,setPopup]=useState(false)
    const[data,setData]=useState({})
    useEffect(()=>{
        axios.get('http://localhost:3000/Product')
        .then(res=>setList(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDel=(id)=>{
        axios.delete(`http://localhost:3000/Product/${id}`)
        .then(res=>{
            console.log(res)
            alert('Deleted successfully')
        })
        .catch(err=>console.log(err))
    }
    const handleEdit=(data)=>{
        setPopup(true)
        setData(data)
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>(
                    <tr>
                        <td>{x.name}</td>
                        <td>{x.price}</td>
                        <td>{x.desc}</td>
                        <td> <img src={x.img} width={100} height={100}/></td>
                        <td>
                            <button onClick={()=>handleEdit(x)}>Edit</button>
                            <button onClick={()=>handleDel(x.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {popup && <MobileUpdateform data={data} setPopup={setPopup}/>}
    </div>
  )
}
export default MobileTable