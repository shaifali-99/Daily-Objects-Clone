<<<<<<< HEAD
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cases from '../Pages/Cases and sleeves/cases'
// import Home from '../Pages/Home/Home'
// import PhoneCovers from './Cases and covers/GroupSingle/PhoneCovers'
// import Cases from '../Pages/Cases and sleeves/cases'
// import Cases from '../Pages/Cases and sleeves/Cases'
import Home from '../Pages/Home/Home'
import { AccountPage } from '../Pages/UserAccount/AccountPage'
import { Rewards } from '../Pages/UserAccount/Reward'
import FilterMobiles from './Cases and covers/FilterMobiles'
import PhoneCovers from './Cases and covers/GroupSingle/Iphone.jsx/PhoneCovers'
import OppoCover from './Cases and covers/GroupSingle/Oppo/OppoCover'
import NothingCover from './Cases and covers/Nothing/NothingCover'
import OneplusCover from './Cases and covers/Onepus/OneplusCover'
import SamsumgCover from './Cases and covers/Samsung/SamsumgCover'
import VivoCover from './Cases and covers/Vivo/VivoCover'
import All from './Laptop Macbook Sleeves/GroupSingle/All'
import Envelop from './Laptop Macbook Sleeves/GroupSingle/Envelop'
import LaptopCoverNavbar from './Laptop Macbook Sleeves/GroupSingle/LaptopCoverNavbar'
import MacbookSleeves from './Laptop Macbook Sleeves/GroupSingle/MacbookSleeves'
import Messenger from './Laptop Macbook Sleeves/GroupSingle/Messenger'
import ZippedSleeves from './Laptop Macbook Sleeves/GroupSingle/ZippedSleeves'
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Cases from "../Pages/Cases and sleeves/Cases";

// import Cases from '../Pages/Cases and sleeves/Cases'
import Home from "../Pages/Home/Home";
import FilterMobiles from "./Cases and covers/FilterMobiles";
import PhoneCovers from "./Cases and covers/GroupSingle/Iphone.jsx/PhoneCovers";
import OppoCover from "./Cases and covers/GroupSingle/Oppo/OppoCover";
import NothingCover from "./Cases and covers/Nothing/NothingCover";
import OneplusCover from "./Cases and covers/Onepus/OneplusCover";
import SamsumgCover from "./Cases and covers/Samsung/SamsumgCover";
import VivoCover from "./Cases and covers/Vivo/VivoCover";
import All from "./Laptop Macbook Sleeves/GroupSingle/All";
import Envelop from "./Laptop Macbook Sleeves/GroupSingle/Envelop";
import LaptopCoverNavbar from "./Laptop Macbook Sleeves/GroupSingle/LaptopCoverNavbar";
import MacbookSleeves from "./Laptop Macbook Sleeves/GroupSingle/MacbookSleeves";
import Messenger from "./Laptop Macbook Sleeves/GroupSingle/Messenger";
import ZippedSleeves from "./Laptop Macbook Sleeves/GroupSingle/ZippedSleeves";
import NewArrivalComp from "./NewArrivalComp/NewArrivalComp";
import NewArrivalsPage from "../Pages/NewArrivalsPage.jsx/NewArrivalsPage";
import AllAccessories from "./Accessories/AllAccessories";
import Sale from "./Sale/Sale";
import IndividualPhoneCoverData from "./Cases and covers/SingleSingle/IndividualPhoneCoverData";
>>>>>>> 10752214d763e000310121c5aeedd6288f4f159d

export default function AllRoutes() {
  console.log("dbdf");
  return (
    <div>
<<<<<<< HEAD
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/cases/phonecovers' element={<PhoneCovers/>}/>
            {/* <Route path='/rewards' element={<Rewards/>}/> */}
            <Route path='/cases/phonecovers' element={<FilterMobiles/>}/>
            <Route path='/cases/phonecovers/apple' element={<PhoneCovers/>}/>
            <Route path='/cases/phonecovers/samsung' element={<SamsumgCover/>}/>
            <Route path='/cases/phonecovers/xiaomi' element={<NothingCover/>}/>
            <Route path='/cases/phonecovers/oneplus' element={<OneplusCover/>}/>
            <Route path='/cases/phonecovers/vivo' element={<VivoCover/>}/>
            <Route path='/cases/phonecovers/oppo' element={<OppoCover/>}/>
            <Route path='/cases/laptopcovers'  element={<LaptopCoverNavbar/>}/>
            <Route path='/cases/laptopcovers/all'  element={<All/>}/>
            <Route path='/cases/laptopcovers/zipped'  element={<ZippedSleeves/>}/>
            <Route path='/cases/laptopcovers/macbook'  element={<MacbookSleeves/>}/>
            <Route path='/cases/laptopcovers/envelope'  element={<Envelop/>}/>
            <Route path='/cases/laptopcovers/messenger'  element={<Messenger/>}/>
            <Route path='/account/*' element={<AccountPage/>}/>
            <Route path='/rewards' element={<Rewards/>}/>

            {/* <Route path='/cases/phonecovers' element={<PhoneCovers/>}/> */}

        </Routes>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/phonecovers" element={<FilterMobiles />} />
        {/* <Route path='/rewards' element={<Rewards/>}/> */}
        {/* <Route path='/cases/phonecovers/mobiles' element={<FilterMobiles/>}/> */}
        <Route path="/cases/phonecovers/apple" element={<PhoneCovers />} />
        <Route path="/cases/phonecovers/samsung" element={<SamsumgCover />} />
        <Route path="/cases/phonecovers/xiaomi" element={<NothingCover />} />
        <Route path="/cases/phonecovers/oneplus" element={<OneplusCover />} />
        <Route path="/cases/phonecovers/vivo" element={<VivoCover />} />
        <Route path="/cases/phonecovers/oppo" element={<OppoCover />} />
        <Route path="/iphoneCovers/:id" element={<IndividualPhoneCoverData/>} />
        <Route path="/cases/laptopcovers" element={<LaptopCoverNavbar />} />
        <Route path="/cases/laptopcovers/all" element={<All />} />
        <Route path="/cases/laptopcovers/zipped" element={<ZippedSleeves />} />
        <Route
          path="/cases/laptopcovers/macbook"
          element={<MacbookSleeves />}
        />
        <Route path="/cases/laptopcovers/envelope" element={<Envelop />} />
        <Route path="/cases/laptopcovers/messenger" element={<Messenger />} />
        <Route path="/newarrivalspage" element={<NewArrivalsPage />}></Route>
        <Route path="/newarrivalcomp" element={<NewArrivalComp />}></Route>
        {/* <Route path='/cases/phonecovers' element={<PhoneCovers/>}/> */}
        <Route path="/accesories" element={<AllAccessories />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wallets" element={<AllAccessories />} />
      </Routes>
>>>>>>> 10752214d763e000310121c5aeedd6288f4f159d
    </div>
  );
}
