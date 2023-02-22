import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cases from '../Pages/Cases and sleeves/cases'
import Home from '../Pages/Home/Home'
import { Faq } from '../Pages/UserAccount/Faq'
import Login from '../Pages/UserAccount/Login'
import { PersonalInfo } from '../Pages/UserAccount/PersonalInfo'
import { Rewards } from '../Pages/UserAccount/Reward'
import { Wishlist } from '../Pages/UserAccount/WishList'
import PhoneCovers from './Cases and covers/GroupSingle/PhoneCovers'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/cases/phonecovers' element={<PhoneCovers/>}/>
            {/* <Route path='/rewards' element={<Rewards/>}/> */}
        </Routes>
    </div>
  )
}
