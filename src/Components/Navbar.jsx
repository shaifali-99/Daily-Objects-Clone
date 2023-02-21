import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    //gaurav create a navLink thing here
  return (
    <div style={{border:"2px solid red"}}>
        <Link to={"/cases"}>Cases and sleeves</Link>
    </div>
  )
}
