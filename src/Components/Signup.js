// import React,{useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// function Signup() {
//     const navigate=useNavigate()
//     const[message,setMessage]=useState('')
//     const[formData,setFormData]=useState({
//         name:'',
//         email:'',
//         password:'',
//         degree:''
//     })
//     const handleChange=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(formData)
//         axios.post('http://localhost:3000/users',formData)
//         .then(res=>{
//             setMessage('signup successfull redirecting to login...')
//             setTimeout(()=>{
//                 navigate('/login')
//             },3000)
//         })
//         .catch(err=>{
//             setMessage('something went wrong')
//             console.log(err)})
//         }
    
//   return (
//     <div className='formcont'>
//         <br></br>
//         <form onSubmit={handleSubmit}>
//             <label>Username</label><br></br>
//             <input type='text'name='name'value={formData.name}onChange={handleChange}/><br></br>
//             <label>Email</label><br></br>
//             <input type='email'name='email'value={formData.email}onChange={handleChange}/><br></br>
//             <label>Password</label><br></br>
//             <input type='password'name='password'value={formData.password}onChange={handleChange}/><br></br>
//             <button type='submit'>Signup</button>
//         </form>
//         {message}


//     </div>
//   )
// }
// export default Signup
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const navigate=useNavigate()
    const[message,setMessage]=useState('')
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
        degree:''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        //axios.post('http://localhost:3000/users',formData)
         axios.post('http://localhost:3001/users/signup',formData)
       
        .then(res=>{
            setMessage('signup successfull redirecting to login...')
            setTimeout(()=>{
                navigate('/login')
            },3000)
        })
        .catch(err=>{
            setMessage('something went wrong')
            console.log(err)})
        }
    
  return (
    <div className='formcont'>
        <br></br>
        <div className='sig1'>
        <form onSubmit={handleSubmit}>
            <center>
            <label className='sig2'>Username</label><br></br>
            <input className='sig3'type='text'name='username'value={formData.username}onChange={handleChange}/><br></br>
            <label className='sig2'>Email</label><br></br>
            <input className='sig3' type='email'name='email'value={formData.email}onChange={handleChange}/><br></br>
            <label className='sig2'>Password</label><br></br>
            <input className='sig3'type='password'name='password'value={formData.password}onChange={handleChange}/><br></br>
            {/* projects */}
            <label className='sig2'>Degree</label><br></br>
            <select className='sig4'name='degree'value={formData.degree}onChange={handleChange}>
                <option value='me'>M.E</option>
                <option value='mtech'>Mtech</option>
                <option value='phd'>Phd</option>
            </select><br></br>
            <button className='sig5'type='submit'>Signup</button>
            </center>
        </form>
        {message}
        </div>


    </div>
  )
}
export default Signup
// import React,{useState} from 'react'
// import axios from 'axios'
// // import { useNavigate } from 'react-router-dom'
// import './Signup.css'

// export default function Signup() {
//     //  const navigate=useNavigate()
//     const[message,setMessage]=useState('')
//     const[formData,setFormData]=useState({
//         // fname:'',
//         // lname:'',
//         // email:'',
//         // password:'',
//         // expr:''
//         username:'',
//         email:'',
//         password:'',
//         degree:''
//     })
//     const handleChange=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(formData)
//         axios.post('/users/signup',formData)
//         .then(res=>{
//             setMessage('Signup Successfull Redirecting to login...')
//         // setTimeout(()=>{
//         //      navigate('/login')
//         // },3000)
//     })
//     .catch(err=>{
//         setMessage('Something went wrong')
//         console.log(err)
//     })
// }
//   return (
//     <div className='formCont'>
//         <br></br>
//         <center>
//         <form onSubmit={handleSubmit}>
//              <label>Username</label><br></br>
//             <input type='text' name='username' placeholder='Enter the Username' value={formData.username} onChange={handleChange}/><br></br>  
//              {/* <label>First Name</label><br></br>
//             <input type='text' name='fname' placeholder="Enter the firstname"value={formData.fname} onChange={handleChange}/><br></br>
//             <label>Last Name</label><br></br>
//             <input type='text' name='lname' placeholder="Enter the lastname" value={formData.lname} onChange={handleChange}/><br></br>   */}
//             <label>Email</label><br></br>
//             <input type='email' name='email' placeholder="Enter the Email" value={formData.email} onChange={handleChange}/><br></br>
//             <label>Password</label><br></br>
//             <input type='password' name='password' placeholder="Enter the Password" value={formData.password} onChange={handleChange}/><br></br>
//             {/* <label>Experience:</label><br></br>
//             <label htmlFor='phd'>PhD </label>
//             <input type='radio' id='phd' name='phd' value={formData.phd} onChange={handleChange}/><br></br>
//             <label htmlFor='me'>ME/MTech </label>
//             <input type='radio' id='me' name='me' value={formData.me} onChange={handleChange}/><br></br>
//             <label htmlFor='be'>BE/BTech </label>
//             <input type='radio' id='be' name='be' value={formData.be} onChange={handleChange}/><br></br> */}
//              <label>Degree:</label><br></br>
//             <select value={formData.degree} name='degree' onChange={handleChange}><br></br>
//             <option value='phd'>PhD</option>
//             <option value='me'>ME/MTech</option>
//             <option value='be'>BE/BTech</option>
//             </select><br></br> 
//             <br></br>
//             <button type='submit' onClick={handleSubmit}>Signup</button>  
//         </form>
//         </center>
//         {message}
//         <br></br>
//     </div>
//   )
// }
// export default Signup
