// import axios from 'axios'
// import React,{useState} from 'react'

// function MobileUpdateform({data,setPopup}) {
//     const[prodData,setProdData]=useState({
//         name:data.name,
//         price:data.price,
//         desc:data.desc,
//         img:data.img
//     })
//     const handleChange=(e)=>{
//         setProdData({...prodData,[e.target.name]:e.target.value})
//     }
//     const handleSubmit=(e)=>{
//         axios.put(`http://localhost:3000/products/${data.id}`,prodData)
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err))
//     }
//   return (
//     <div className='popup'>
//         <form onSubmit={handleSubmit}>
//             <button onClick={()=>setPopup(false)}>X</button><br></br>
//             <label>Product Name</label><br></br>
//             <input type='text'name='name'value={prodData.name}onChange={handleChange}/><br></br>
//             <label>product price</label><br></br>
//             <input type='number'name='price'value={prodData.price}onChange={handleChange}/><br></br>
//             <label>product description</label><br></br>
//             <textarea name='desc'value={prodData.desc}onChange={handleChange}/><br></br>
//             <label>product image</label><br></br>
//             <input type='text'name='img'value={prodData.img}onChange={handleChange}/><br></br>
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }
// export default MobileUpdateform
import React, { useState } from 'react'
import axios from 'axios'

function MobileUpdateform({data,setPopup}) {
    const[prodData,setProdData]=useState({
        name:data.name,
        price:data.price,
        desc:data.desc,
        img:data.img
    })
    const handleChange=(e)=>{
        setProdData({...prodData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        axios.put(`http://localhost:3000/Product/${data.id}`,prodData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
    <div className='popup'>
        <form onSubmit={handleSubmit}>
            <button onClick={()=>setPopup(false)}>X</button><br></br>
            <label>Product Name</label><br></br>
            <input type='text' name='name' value={prodData.name} onChange={handleChange}/><br></br>
            <label>Product Price</label><br></br>
            <input type='number' name='price' value={prodData.price} onChange={handleChange}/><br></br>
            <label>Product Description</label><br></br>
            <textarea name='desc' value={prodData.desc} onChange={handleChange}/><br></br>
            <label>Product Image</label><br></br>
            <input type='text' name='img' value={prodData.img} onChange={handleChange}/><br></br>
            <button onClick='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}
export default MobileUpdateform