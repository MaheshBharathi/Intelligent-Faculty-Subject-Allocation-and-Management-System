import React,{useState}  from 'react'
import Person from './Person'
import axios from 'axios'
import './MTech.css'
function MTech() {
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
        Course_name:"Cryptography and Network Security",
        Course_code:191141
    },{
        SNo:2,
        Course_name:"Quantum Computing",
        Course_code:191142
    },
{
    SNo:3,
    Course_name:"Computational Theory",
    Course_code:191143
},{
    SNo:4,
    Course_name:"Computer Vision",
    Course_code:192344
},{
    SNo:5,
    Course_name:"Augmented Reality (AR)",
    Course_code:192245
},
{
    SNo:6,
    Course_name:"Advanced Database Systems",
    Course_code:192346
},
{
    SNo:7,
    Course_name:"Blockchain Technology",
    Course_code:192347
}]
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
               <form onSubmit={handleSubmit}className='mt3'>
            <center>
                <h1>MTech Course Details</h1>
        <table className='mt1'>
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
        <b><h1 className='mt4'><label htmlFor='sel'>Choose Your Courses:</label></h1></b><br></br>
        <label htmlFor='cn'>Cryptography and Network Security</label>
        <input type='checkbox' id='cn'value='Cryptography' name='courses'onChange={handleChange} checked={formData.courses.includes('Cryptography')}/><br></br>
        <label htmlFor='qc'>Quantum Computing</label>
        <input type='checkbox' id='qc' value='Quantum'name='courses'onChange={handleChange}checked={formData.courses.includes('Quantum')}/><br></br>
        <label htmlFor='ct'> Computational Theory</label>
        <input type='checkbox' id='ct'value='Computational'name='courses'onChange={handleChange}checked={formData.courses.includes('Computational')}/><br></br>
        <label htmlFor='cv'>Computer Vision</label>
        <input type='checkbox'id='cv'  value='Computer'name='courses'onChange={handleChange}checked={formData.courses.includes('Computer')}/><br></br>
        <label htmlFor='ar'>Augmented Reality (AR)</label>
        <input type='checkbox'id='ar'  value='Augmented'name='courses'onChange={handleChange}checked={formData.courses.includes('Augmented')}/><br></br>
        <label htmlFor='ads'> Advanced Database Systems</label>
        <input type='checkbox'id='ads'  value='Database'name='courses'onChange={handleChange}checked={formData.courses.includes('Database')}/><br></br>
        <label htmlFor='bt'>Blockchain Technology</label>
        <input type='checkbox'id='bt'  value='Blockchain'name='courses'onChange={handleChange}checked={formData.courses.includes('Blockchain')}/><br></br>
        <br></br>
        <button className='mt2'type='submit'>Submit</button>
        </center>
        </form>
    {JSON.stringify(formData)}
    </div>
  )

export default MTech
