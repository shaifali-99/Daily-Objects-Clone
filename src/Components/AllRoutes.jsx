import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home/Home";
import { AccountPage } from "../Pages/UserAccount/AccountPage";
import { Rewards } from "../Pages/UserAccount/Reward";
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

import Cases from "../Pages/Cases and sleeves/Cases";

import React from "react";

import NewArrivalComp from "./NewArrivalComp/NewArrivalComp";
import NewArrivalsPage from "../Pages/NewArrivalsPage.jsx/NewArrivalsPage";
import AllAccessories from "./Accessories/AllAccessories";
import Sale from "./Sale/Sale";
import IndividualPhoneCoverData from "./Cases and covers/SingleSingle/IndividualPhoneCoverData";

import Cart from "../Pages/cart/Cart";
import BuyNow from "../Pages/BuyNow";

export default function AllRoutes() {
  console.log("dbdf");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases/phonecovers" element={<FilterMobiles />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/account/*" element={<AccountPage />} />

        <Route path="/cases" element={<Cases />} />

        <Route path="/cases/phonecovers/apple" element={<PhoneCovers />} />
        <Route path="/cases/phonecovers/samsung" element={<SamsumgCover />} />
        <Route path="/cases/phonecovers/xiaomi" element={<NothingCover />} />
        <Route path="/cases/phonecovers/oneplus" element={<OneplusCover />} />
        <Route path="/cases/phonecovers/vivo" element={<VivoCover />} />
        <Route path="/cases/phonecovers/oppo" element={<OppoCover />} />
        <Route path="/cases/laptopcovers" element={<LaptopCoverNavbar />} />
        <Route path="/cases/laptopcovers/all" element={<All />} />
        <Route path="/cases/laptopcovers/zipped" element={<ZippedSleeves />} />
        <Route
          path="/cases/laptopcovers/macbook"
          element={<MacbookSleeves />}
        />
        <Route path="/cases/laptopcovers/envelope" element={<Envelop />} />
        <Route path="/cases/laptopcovers/messenger" element={<Messenger />} />

        <Route
          path="/iphoneCovers/:id"
          element={<IndividualPhoneCoverData />}
        />
        <Route path="/newarrivalspage" element={<NewArrivalsPage />} />
        <Route path="/newarrivalcomp" element={<NewArrivalComp />} />
        <Route path="/accesories" element={<AllAccessories />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wallets" element={<AllAccessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>
    </div>
  );
}
