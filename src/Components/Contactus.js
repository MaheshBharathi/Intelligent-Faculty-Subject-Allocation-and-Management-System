import React from 'react'
import './Contactus.css'
function Contactus() {
  return (
    <div>
        <div className='con5'>
            <div className='con6'>
                <div className='co1'>
                    <h2 className='c3'>Address</h2>
                    <h3>PSR.Engineering college,Sevalpatti-616041</h3>
                </div>
                <div className='co2'>
                    <h2 className='c3'>Phone No</h2>
                    <h3>983726592</h3>
                </div>
                <div className='co3'>
                    <h2 className='c3'>Email</h2>
                    <h3>facultyallocation@gmail.com</h3>
                </div>
            </div>
            <form>
                <center>
            <div className='con7'>
                <h1>Contact Us</h1>
                <input className='c1'type='text' placeholder='Enter Your Name'></input>
                <input className='c2'type='text' placeholder='Enter a Valid Email Address'></input>
                <textarea></textarea>
                <button>SUBMIT</button>
            </div>
            </center>
            </form>
        </div>
    </div>
  )
}
export default Contactus