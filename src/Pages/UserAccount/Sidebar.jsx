import React, { useState } from 'react';
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   useDisclosure,
//   HStack,
//   Heading,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from 'react-icons/fi';
// import { Divider } from '@chakra-ui/react';
import { SlLogin ,SlArrowRight} from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { BsCartCheck, BsHeart, BsGift} from "react-icons/bs";
import Login from './Login';
import { FaBars,FaUserCircle} from "react-icons/fa";
import { NavLink, Route, Routes } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import { Wishlist } from './WishList';
import { PersonalInfo } from './PersonalInfo';
import { GrHelp } from "react-icons/gr";
import { Faq } from './Faq';
const LinkItems = [
  { name: 'Rewards', icon: <BsGift/> ,link:'/rewards'},
  { name: 'Wishlist', icon: <BsHeart/>,link:"/wishlist" },
  { name: 'My Orders', icon: <BsCartCheck/>,link:"/myOrder" },
  { name: 'Perosonal Info', icon: <BiUser/>,link:"/personalInfo" },
  { name: 'Help' ,icon:<GrHelp/>, link:"/help"},
  { name: 'Login', icon: <SlLogin/>,link:"/login" },
];
export default function Sidebar() {
  let userName = localStorage.getItem("userName");
  const [isOpen,setOpen]= useState(true);
  const toggle = () =>{
    setOpen((prev)=>!prev);
  }
  console.log(userName)
 return <div className="container ">
  <div style={{width:isOpen?"25%":"10%"}} className='sidebar'>
    <div className='top-section'>
      {/* <div style={{flexDirection:isOpen?"row":"column"}} className='bars'> */}
      <div style={{flexDirection:isOpen?"row":"column-reverse"}} className='bars'>
       <div style={{color:"#319795",display:"flex",alignItems:"center"}}>
        <FaUserCircle/> | 
        <div>
        {userName!==""? userName : "USER"}
        </div>
       </div> 
        <FaBars style={{marginLeft:isOpen?"40%":"12px"}} onClick={toggle}/>
      </div>
    </div>
    {LinkItems.map((link) => (
      <>
            <NavLink key={link.name}
                     to={link.link}
                     className="link"
                     activeclassName="active">
              <div style={{fontSize:isOpen?"17px":"21px"}} className='icon'>{link.icon}</div>
              <div style={{display:isOpen?"":"none",transition:"all 0.5s"}}className="link_text">{link.name}</div>
              <div className="arrow"><SlArrowRight/></div>
            </NavLink>
          <Divider/>
          </>
      ))}
  </div>
  <div style={{margin:"auto",width:"70%",height:"auto"}}>
    <Routes>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/personalInfo" element={<PersonalInfo/>}/>
      <Route path="/help" element={<Faq/>}/>
    </Routes>
  </div>
 </div>
}