import React from 'react'

function Person({person}) {
    return(
    <>
    <td>{person.SNo}</td>
    <td>{person.Course_name}</td>
    <td>{person.Course_code}</td>
    

    </>
    )
}
export default Person