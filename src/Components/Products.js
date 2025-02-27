import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Products() {
  return (
    <div>
        <input type='text' placeholder='search product here'/>
        <nav>
            <Link to='product'>New</Link>
            <Link to ='featprod'>Featured</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
export default Products