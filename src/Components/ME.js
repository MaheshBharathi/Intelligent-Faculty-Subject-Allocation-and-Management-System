
import React,{useState}  from 'react'
import Person from './Person'
import axios from 'axios'
import './ME.css'
function ME() {
    const [course,setCourse]=useState('')
     const[formData,setFormData]=useState({
            courses:[]
       })
    // const[formData,setFormData]=useState('')
    // const[form,setForm]=useState('')
    // const[forms,setForms]=useState('')
    const handleChange=(event)=>{
        const {type,name,value,checked}=event.target
        if(type==='checkbox'){
            setFormData(prev=>({...prev,
                courses:checked?[...prev.courses,value]:prev.courses.filter(x=>x!=value)
      
            }))
        }
        else{
            setFormData(prev=>({...prev,[name]:value}))
        }
    }
    const list=[{
        SNo:1,
        Course_name:"Web Technology",
        Course_code:"191cs01"
    },{
        SNo:2,
        Course_name:"Python",
        Course_code:"191cs03"
    },
{
    SNo:3,
    Course_name:"DBMS",
    Course_code:"191cs04"
},{
    SNo:4,
    Course_name:"Java",
    Course_code:"191cs04"
},{
    SNo:5,
    Course_name:"COA",
    Course_code:"191cs05"
}
]
// const handleChange=(e)=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
// }
// const handleformChange=(es)=>{
//     setForm({...form,[es.target.name]:es.target.value})
// }
// const handlesChange=(ev)=>{
//     setForms({...forms,[ev.target.name]:ev.target.value})
// }
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(list)
    alert('submitted Successfully...')
    axios.post('http://localhost:3000/users',formData)
}
  return (
    <div>
               <form onSubmit={handleSubmit}className='mte3'>
            <center>
                <h1>ME Course Details</h1>
        <table className='mte1'>
            <thead>
                <tr>
                    <th><h2>S.No</h2></th>
                    <th><h2>Course name</h2></th>
                    <th><h2>Course code</h2></th>
                </tr>
            </thead>
            <tbody>
                {list.map((person,index)=><tr key={index}><Person person={person}/></tr>)}
            </tbody>
        </table>
        <b><h1 className='mte4'><label htmlFor='sel'>Choose Your Courses:</label></h1></b><br></br>
        <label htmlFor='wt'>Web Technology</label>
        <input type='checkbox' id='wt'value='web' name='courses'onChange={handleChange} checked={formData.courses.includes('web')}/><br></br>
        <label htmlFor='py'>Python</label>
        <input type='checkbox' id='py' value='python'name='courses'onChange={handleChange}checked={formData.courses.includes('python')}/><br></br>
        <label htmlFor='db'> DBMS</label>
        <input type='checkbox' id='db'value='dbms'name='courses'onChange={handleChange}checked={formData.courses.includes('dbms')}/><br></br>
        <label htmlFor='jv'>Java</label>
        <input type='checkbox'id='jv'  value='java'name='courses'onChange={handleChange}checked={formData.courses.includes('java')}/><br></br>
        <label htmlFor='ca'>COA</label>
        <input type='checkbox'id='ca'  value='coa'name='courses'onChange={handleChange}checked={formData.courses.includes('coa')}/><br></br>
        <button className='mte2'type='submit'>Submit</button>
        </center>
        </form>
    {JSON.stringify(formData)}
    </div>
  )
}
  export default ME
