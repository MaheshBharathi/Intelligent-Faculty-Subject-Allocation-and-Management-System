// // // import React,{useState} from 'react'
// // // import {useAuth} from './Auth'
// // // import{useNavigate} from 'react-router-dom'

// // // function Login() {
// // //     const[username,setUsername]=useState('')
// // //     const navigate=useNavigate()
// // //     const auth=useAuth()
// // //     const handleLogin=()=>{
// // //         auth.login(username)
// // //         navigate('/')
// // //     }
// // //   return (
// // //     <div>
// // //         <label>Username</label>
// // //         <input type='text'value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br>
// // //         <button onClick={handleLogin}>Login</button>
// // //     </div>
// // //   )
// // // }
// // // export default Login
//first signup
import React,{useState} from 'react'
 import { useNavigate } from 'react-router-dom'
 import { useAuth } from './Auth'
 import axios from 'axios'

function Login() {
 const navigate=useNavigate()
const auth=useAuth()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [formData,setFormData]=useState('')
  const[message,setMessage]=useState('')
  const handleSubmit=(e)=>{

    e.preventDefault()
    //axios.get('http://localhost:3000/users')
    axios.post('http://localhost:3001/users/login')
    .then(res=>{
      const user=res.data.find(x=>x.username===username&&x.password===password)
      if(user){
        setMessage('Login Successfull Redirecting to Course Details...')
        setTimeout(()=>{
          // auth.login(username)
          navigate('/courserdetails')
        },3000)
      }
      else{
        setMessage('Invalid user or password')
      }
    })
    .catch(err=>console.log(err))
  }
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(formData)
  //   axios.post('http://localhost:3000/users',formData)
  //    //axios.post('http://localhost:3001/users/signup',formData)
   
  //   .then(res=>{
  //       setMessage('Login  successfull redirecting to course details')
  //       setTimeout(()=>{
  //           navigate('/coursedetails')
  //       },3000)
  //   })
  //   .catch(err=>{
  //       setMessage('Invalid user or password')
  //       console.log(err)})
  //   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label><br></br>
        <input type='text'value={username}onChange={(e)=>setUsername(e.target.value)}/><br></br>
        <label>Password</label>
        <input type='password'value={password}onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <button type='submit'>Login</button>
      </form>
      {message}
    </div>
  )
}
export default Login

//end


// import React,{useState} from 'react'
//  import { useNavigate } from 'react-router-dom'
//  import { useAuth } from './Auth'
//  import axios from 'axios'

// function Login() {
//  const navigate=useNavigate()
// const auth=useAuth()
//   const [username,setUsername]=useState('')
//   const [password,setPassword]=useState('')
//   const [formData,setFormData]=useState('')
//   const[message,setMessage]=useState('')
//   const handleSubmit=(e)=>{
//     // const user=res.data.find(x=>x.username===username&&x.password===password)
//     console.log({username,password})
//     e.preventDefault()
//     //axios.get('http://localhost:3001/users')
//     axios.post('http://localhost:3001/users/login',{username,password},)
//     .then(res=>{
//       console.log(res)
//       setMessage(res.data.message)
//       setTimeout(()=>{
//         auth.login(res.data.username)
//         navigate('/coursedetails')
//       },3000)
//       // const user=res.data.find(x=>x.username===username&&x.password===password)
//       // if(user){
//       //   setMessage('Login Successfull Redirecting to Course Details...')
//       //   setTimeout(()=>{
//       //     // auth.login(username)
//       //     navigate('/coursedetails')
//       //   },3000)
//       // }
//       // else{
//       //   setMessage('Invalid user or password')
//       // }
//      })
//     .catch(err=>{setMessage(err?.response?.data.message)
//       console.log(err)
//     })
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label><br></br>
//         <input type='text'value={username}onChange={(e)=>setUsername(e.target.value)}/><br></br>
//         <label>Password</label>
//         <input type='password'value={password}onChange={(e)=>setPassword(e.target.value)}/><br></br>
//         <button type='submit'>Login</button>
//       </form>
//       {message}
//     </div>
//   )
// }
// export default Login



