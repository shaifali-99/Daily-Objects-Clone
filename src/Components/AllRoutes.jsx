import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cases from '../Pages/Cases and sleeves/Cases'
import Home from '../Pages/Home/Home'
import PhoneCovers from './Cases and covers/GroupSingle/PhoneCovers'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/cases/phonecovers' element={<PhoneCovers/>}/>
        </Routes>
    </div>
  )
}
