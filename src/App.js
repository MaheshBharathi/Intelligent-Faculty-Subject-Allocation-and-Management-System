/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/
// import React from 'react'
// import Home from './Components/Home'
// import {Route,Routes,Router} from 'react-router-dom'
// import Order from './Components/Order'
// import NoMatch from './Components/NoMatch'
// import Services from './Components/Services'
// import NewProd from './Components/NewProd'
// import Navbar from './Components/Navbar'
// import FeatProd from './Components/FeatProd'
// import Products from './Components/Products'
// import Users from './Components/Users'
// import UserDet from './Components/UserDet'
// import About from './Components/About'
// // import {AuthProvider} from './Components/Auth'
//  import Auth from './Components/Auth'
// import Profile from './Components/Profile'
// import Login from './Components/Login'
// import ReqAuth from './Components/ReqAuth'
// import Signup from './Components/Signup'
// import Mobiles from './Components/Mobiles'
// import MobileTable from './Components/MobileTable'
// import MobileUpdateform from './Components/MobileUpdateform'
// import MobilePage from './Components/MobilePage'
// import MobileUsers from './Components/MobileUsers'
//  const LazyAbout=React.lazy(()=>import('./Components/About'))
// function App() {
//   return (
//     // <AuthProvider>
//     <Auth>
//     <div className='App'>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/order' element={<Order/>}/>
//         <Route path='*' element={<NoMatch/>}/>
//         <Route path='/about'element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>}/>
//          <Route path='products' element={<ReqAuth><Products/></ReqAuth>}/> 
//         <Route path='/services' element={<Services/>}/>
//          {/* <Route index element={<FeatProd/>}/>  */}
//          <Route path='/product' element={<NewProd/>}/>
//         <Route path='/featprod' element={<FeatProd/>}/>
//         <Route path='/products' element={<Products/>}/>
//         <Route>
//         <Route path='/users' element={<Users/>}>
//         <Route path=':userId' element={<UserDet/>}/>
//         </Route>
//         </Route>
//         <Route path='/auth' element={<Auth/>}/> 
//          <Route path='/profile' element={ <Profile/> }/>
//          <Route path='/signup' element={ <Signup/> }/>
//          <Route path='/login' element={<Login/>}/> 
//          <Route>
//          <Route path='/mobiles' element={<Mobiles/>}/>
//          <Route path='/mobiletable' element={<MobileTable/>}/>
//          <Route path='/mobileupdateform' element={<MobileUpdateform/>}/>
//          </Route>
//          <Route>
//          <Route path='/mobileusers' element={<MobileUsers/>}/>
//          <Route path='/mobiles/:pid' element={<MobilePage/>}/>
//          </Route>
//       </Routes>
//     </div>
//     </Auth>
//      //</AuthProvider> 
//   )
// }
// export default App
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
// import React from 'react'
// import Mobiles from './Components/Mobiles'
// import MobileTable from './Components/MobileTable'
// import MobileUpdateForm from './Components/MobileUpdateform'
// import {Route,Routes,Router} from react-router-dom
// function App() {
//   return (
//     <div className='App'>
//       <Routes>
//         <Route path='/mobiles' element={<Mobiles/>}/>
//         <Route path='/mobiletable' element={<MobileTable/>}/>
//         <Route path='/mobileupdateform' element={<MobileUpdateForm/>}/>
//       </Routes>
//     </div>
//   )
// }
// export default App
// import React from 'react'
// import CourseDetails from './Components/CourseDetails'
// export default function App() {
//   return (
//     <div className='App'>
//       <CourseDetails/>
//     </div>
//   )
// }




