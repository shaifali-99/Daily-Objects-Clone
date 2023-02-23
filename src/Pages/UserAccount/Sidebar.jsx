import React, { useContext, useState } from 'react';
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
import { SlLogin ,SlArrowRight, SlLogout} from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { BsCartCheck, BsHeart, BsGift} from "react-icons/bs";
import Login from './Login';
import { FaBars,FaSign,FaUserCircle} from "react-icons/fa";
import { NavLink, Route, Routes } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import { Wishlist } from './WishList';
import { PersonalInfo } from './PersonalInfo';
import { GrHelp } from "react-icons/gr";
import { Faq } from './Faq';
import Signup from './SignUp';
import { AuthContext } from './AccountContextAuth/AuthContextAccount';
const LinkItems = [
  { name: 'Rewards', icon: <BsGift/> ,link:'/rewards'},
  { name: 'Wishlist', icon: <BsHeart/>,link:"/account/wishlist" },
  { name: 'My Orders', icon: <BsCartCheck/>,link:"/account/myOrder" },
  { name: 'Perosonal Info', icon: <BiUser/>,link:"/account/personalInfo" },
  { name: 'Help' ,icon:<GrHelp/>, link:"/account/help"},
  { name: 'SignIn', icon: <FaSign/>,link:"/account/signup" },
];
export default function Sidebar() {
  let {isAuth,setAuth}=useContext(AuthContext)
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
        {userName!==""&&isAuth? userName : "USER"}
        </div>
       </div> 
        <FaBars style={{marginLeft:isOpen?"40%":"12px"}} onClick={toggle}/>
      </div>
    </div>
    {LinkItems.map((link) => (
      <div key={link.name}>
            <NavLink to={link.link}
                     className="link"
                     activeclassname="active">
              <div style={{fontSize:isOpen?"17px":"21px"}} className='icon'>{link.icon}</div>
              <div style={{display:isOpen?"":"none",transition:"all 0.5s"}}className="link_text">{link.name}</div>
              <div className="arrow"><SlArrowRight/></div>
            </NavLink>
          <Divider/>
          </div>
      ))}
      {
        isAuth?<div>
          <NavLink   className="link"
                     activeclassname="active" 
                     style={{backgroundColor:"rgb(243, 200, 199)",color:"rgb(180, 51, 48)"}}
                     onClick={()=>{
                      setAuth((prev)=>!prev);
                      localStorage.setItem("userName","")
                     }}>
              <div style={{fontSize:isOpen?"17px":"21px"}} className='icon'><SlLogout/></div>
              <div style={{display:isOpen?"":"none",transition:"all 0.5s"}}className="link_text">LogOut</div>
              <div className="arrow"><SlArrowRight/></div>
            </NavLink>
          <Divider/>
        </div>:<div><NavLink to='/account/login'
                     style={{backgroundColor:"rgb(206, 243, 199)",color:"rgb(45, 136, 80)"}}
                     className="link"
                     activeclassname="active">
              <div style={{fontSize:isOpen?"17px":"21px"}} className='icon'><SlLogin/></div>
              <div style={{display:isOpen?"":"none",transition:"all 0.5s"}}className="link_text">Log in</div>
              <div className="arrow"><SlArrowRight/></div>
            </NavLink>
          <Divider/>
        </div>
      }
      
  </div>
  <div style={{margin:"auto",width:"70%",height:"auto"}}>
    <Routes>
      <Route path="/wishlist" element={!isAuth?(<Login/>):(<Wishlist/>)}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/personalInfo" element={!isAuth?(<Login/>):(<PersonalInfo/>)}/>
      <Route path="/help" element={<Faq/>}/>
    </Routes>
  </div>
 </div>
}