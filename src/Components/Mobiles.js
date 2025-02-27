// import axios from 'axios'
// import React,{useState} from 'react'
// import MobileTable from './MobileTable'
// function Mobiles() {
//     const[prodData,setProdData]=useState({
//         name:'',
//         price:0,
//         desc:'',
//         img:``

//     })
//     const handleChange=(e)=>{
//         setProdData({...prodData,[e.target.name]:e.target.value})
//     }
//         const handleSubmit=(e)=>{
//             e.preventDefault()
//             console.log(prodData)
//             axios.post('http://localhost:3000/products',prodData)
//             .then(res=>{
//                 alert("product added successfully")
//                 setProdData({
//                     name:'',
//                     price:0,
//                     desc:'',
//                     img:``

//                 })
//                 console.log(res)
//             })
//             .catch(err=>console.log(err))
//         }
    
//   return (
//     <div>
//         <div className='formContainer'>
//             <form onSubmit={handleSubmit}>
//                 <label>product name</label><br></br>
//                 <input type='text' name='name'value={prodData.name}onChange={handleChange}/><br></br>
//                 <label>product price</label><br></br>
//                 <input type='number'name='price'value={prodData.price}onChange={handleChange}/><br></br>
//                 <label>product description</label><br></br>
//                 <textarea name='desc'value={prodData.desc}onChange={handleChange}/><br></br>
//                 <label>product image</label><br></br>
//                 <input type='text'name='img' value={prodData.img}onChange={handleChange}/><br></br>
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//         <MobileTable/>

//     </div>
//   )
// }
// export default Mobiles
import React, { useState } from 'react'
import axios from 'axios'
import MobileTable from './MobileTable'

function Mobiles() {
    const[prodData,setProdData]=useState({
        name:'',
        price:0,
        desc:'',
        img:''
    })
    const handleChange=(e)=>{
        setProdData({...prodData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
         e.preventDefault() 
         console.log(prodData)
         axios.post('http://localhost:3000/Product',prodData)
         .then(res=>{
            alert('Product added successfully')
            setProdData({
                name:'',
                price:0,
                desc:'',
                img:''
            })
            console.log(res)
        })
        .catch(err=>console.log(err))
    }
    return (
    <div>
        <div className='formCon'>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label><br></br>
                <input type='text' name='name' value={prodData.name} onChange={handleChange}/><br></br>
                <label>Product Price</label><br></br>
                <input type='number' name='price' value={prodData.price} onChange={handleChange}/><br></br>
                <label>Product Description</label><br></br>
                <textarea name='desc' value={prodData.desc} onChange={handleChange}/><br></br>
                <label>Product Image</label><br></br>
                <input type='text' name='img' value={prodData.img} onChange={handleChange}/><br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <MobileTable/>
    </div>
  )
}
export default Mobiles