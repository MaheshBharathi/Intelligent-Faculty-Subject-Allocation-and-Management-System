
//Projects
import React from 'react'
import {Route,Routes,Router} from 'react-router-dom'
import Hom from './Components/Hom'
import Navbar from './Components/Navbar'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import Signup from './Components/Signup'
import Login from './Components/Login'
import CourseDetails from './Components/CourseDetails'
import MTech from './Components/MTech'
import Phd from './Components/Phd'
import ME from './Components/ME'
// import Auth from './Components/Auth'
function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/hom' element={<Hom/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/coursedetails' element={<CourseDetails/>}/>
      <Route path='/me' element={<ME/>}/>
      <Route path='/mtech' element={<MTech/>}/>
      <Route path='/phd' element={<Phd/>}/>
      {/* <Route path='/auth' element={<Auth/>}/>  */}
      </Routes>
    </div>
  )
}
export default App




