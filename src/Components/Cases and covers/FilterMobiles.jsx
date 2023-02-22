import React from 'react'
import { Link } from 'react-router-dom'
import ImageEveryPage from './ImageEveryPage'

export default function FilterMobiles() {
  return (
    <div>
        <div>
            <ImageEveryPage name={`Select Brand`}/>
        </div>
        <Link to={'/cases/phonecovers'} >Apple</Link>
    </div>
  )
}
