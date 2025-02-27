import React from 'react'
import './CourseDetails.css'
import {useNavigate} from 'react-router-dom'
function CourseDetails() {
    const navigate=useNavigate()
  return (
    <div>
<div className='cd1'>
    <div className='cd2'>
        <h1 className='cdd1'>M.E</h1>
        <button className='n1'onClick={()=>navigate('/me')}>See Details</button>
    </div>
    <div className='cd4'>
        <h1 className='cdd1'>MTech</h1>
        <button className='n1'onClick={()=>navigate('/mtech')}>See Details</button>
    </div>
    
    <div className='cd3'>
        <h1 className='cdd1'>Phd</h1>
        <button className='n1'onClick={()=>navigate('/phd')}>See Details</button>
    </div>
</div>
    </div>
  )
}
export default CourseDetails