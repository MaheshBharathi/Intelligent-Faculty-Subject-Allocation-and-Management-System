import React,{useState} from 'react'
import Person from './Person'
import './Phd.css'
import axios from 'axios'
function Phd() {
    const [course,setCourse]=useState('')
    const[formData,setFormData]=useState({
                courses:''
            })
    const list=[{
        SNo:1,
        Course_name:"Machine Learning",
        Course_code:191134
    },{
        SNo:2,
        Course_name:"Deep Learning",
        Course_code:191139
    },
{
    SNo:3,
    Course_name:"Data Science",
    Course_code:191120
},{
    SNo:4,
    Course_name:"Computer Networks",
    Course_code:192309
},{
    SNo:5,
    Course_name:"Web Engineering",
    Course_code:192208
}]
const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(list)
    alert('submitted Successfully...')
    axios.post('http://localhost:3000/users',formData)
}
  return (
    <div>
     
        <form onSubmit={handleSubmit}className='ph2'>
            <center>
                <h1>PHD Course Details</h1>
        <table className='ph1'>
            <thead>
                <tr>
                    <th><h3>S.no</h3></th>
                    <th><h3>Course name</h3></th>
                    <th><h3>Course code</h3></th>
                </tr>

            </thead>
            <tbody>
                {list.map((person,index)=><tr key={index}><Person person={person}/></tr>)}
            </tbody>
        </table>
        <h3><label>Choose your courses</label></h3><br/>
        <label>Machine Learning</label>
        <input type='checkbox' value='Machine Learning'onChange={handleChange}/>
        <label htmlFor='ml'></label><br/>
        <label>Deep Learning</label>
        <input type='checkbox' value='Deep Learning'onChange={handleChange}/>
        <label htmlFor='ml'></label><br/>
        <label>Data Science</label>
        <input type='checkbox' value='Data Science'onChange={handleChange}/>
        <label htmlFor='ml'></label><br/>
        <label>Computer Networks</label>
        <input type='checkbox' value='Computer Networks'onChange={handleChange}/>
        <label htmlFor='ml'></label><br/>
        <label>Web Engineering</label>
        <input type='checkbox' value='Web Engineering'onChange={handleChange}/>
        <label htmlFor='ml'></label>
        <br/>
        <button className='ph3' type='submit'>Submit</button>
        </center>
        </form>
    </div>
  )
}
export default Phd