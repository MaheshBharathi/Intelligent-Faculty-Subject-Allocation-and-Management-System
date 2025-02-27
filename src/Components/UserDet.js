import React from 'react'
import {useParams,useSearchParams} from 'react-router-dom'
function UserDet() {
    const {userId}=useParams()
    const[searchParams,setSearchParams]=useSearchParams()
    const isActive=searchParams.get('filter')==='active'
  return (
    <div>
        Details of the user{userId}<br></br>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>All Users</button>
        {isActive?"Showing Active Users":"Showing All Users"}

    </div>
  )
}
export default UserDet