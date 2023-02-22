import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cases from '../Pages/Cases and sleeves/Cases'
// import Cases from '../Pages/Cases and sleeves/Cases'
import Home from '../Pages/Home/Home'
import FilterMobiles from './Cases and covers/FilterMobiles'
import PhoneCovers from './Cases and covers/GroupSingle/Iphone.jsx/PhoneCovers'
import OppoCover from './Cases and covers/GroupSingle/Oppo/OppoCover'
import NothingCover from './Cases and covers/Nothing/NothingCover'
import OneplusCover from './Cases and covers/Onepus/OneplusCover'
import SamsumgCover from './Cases and covers/Samsung/SamsumgCover'
import VivoCover from './Cases and covers/Vivo/VivoCover'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/cases/phonecovers' element={<FilterMobiles/>}/>
            <Route path='/cases/phonecovers/apple' element={<PhoneCovers/>}/>
            <Route path='/cases/phonecovers/samsung' element={<SamsumgCover/>}/>
            <Route path='/cases/phonecovers/xiaomi' element={<NothingCover/>}/>
            <Route path='/cases/phonecovers/oneplus' element={<OneplusCover/>}/>
            <Route path='/cases/phonecovers/vivo' element={<VivoCover/>}/>
            <Route path='/cases/phonecovers/oppo' element={<OppoCover/>}/>
            {/* <Route path='/cases/phonecovers' element={<PhoneCovers/>}/> */}

        </Routes>
    </div>
  )
}
