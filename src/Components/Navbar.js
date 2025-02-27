// import React from 'react'
// import {Link,NavLink} from 'react-router-dom'
// import {useAuth} from './Auth'
// function Navbar() {
//   const auth=useAuth()
//   return (
//     <nav class='primary-nav'>
//         <NavLink to='/' >Home</NavLink>
//         <NavLink to='/about' >About Us</NavLink>
//         <NavLink to='/order' >Order</NavLink>
//         <NavLink to='/services' >Services</NavLink>
//         <NavLink to='/profile' >Profile</NavLink>
//         <NavLink to='/users' >Users</NavLink>
//         <NavLink to='/products' >Products</NavLink>
//         <NavLink to='/signup' >Signup</NavLink>
//         <NavLink to='/mobiles'>Mobile</NavLink>
//         <NavLink to='/mobileusers'>MobileUsers</NavLink>
//     {!auth.user&& <NavLink to='/login'>Login</NavLink>}

//     </nav>
//   )
// }
// export default Navbar
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav class="nav">
      {/* <h2 className='nav1'> "To teach is to touch a life forever."</h2> */}
      <h2 className="nav1">
        "Teachers don’t just share knowledge; they ignite curiosity and passion.
        Their impact is felt long after the classroom ends. They shape the
        world, one mind at a time."
      </h2>
      <center>
        <NavLink to="/hom">Home</NavLink>

        {/* {!auth.user&& <NavLink to='/hom'>Home</NavLink>}  */}
        {/* <NavLink to='/aboutus' >AboutUs</NavLink>
     <NavLink to='/contactus' >ContactUs</NavLink> */}
      </center>
    </nav>
  );
}
export default Navbar;
// import React from 'react'
// import {Link,NavLink} from react-router-dom
// function Navbar() {
//   return (
//     <nav>
//       <NavLink to='/mobiles'>Mobile</NavLink>
//       <NavLink to='/mobiletable'>MobileTable</NavLink>
//       <NavLink to='/mobileupdateform'>MobileUpdateForm</NavLink>
//     </nav>
//   )
// }
// export default Navbar
