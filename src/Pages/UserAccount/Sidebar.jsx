import React, { useContext, useRef, useState } from 'react';
import { SlLogin, SlArrowRight, SlLogout } from "react-icons/sl";
// import  { useState } from 'react';
// import { SlLogin ,SlArrowRight} from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { BsCartCheck, BsHeart, BsGift } from "react-icons/bs";
import Login from './Login';
import { FaBars, FaSign, FaUserCircle } from "react-icons/fa";
import { AuthContext } from './AccountContextAuth/AuthContextAccount';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  Divider, Box, Stack, useDisclosure, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex, HStack,
  DrawerCloseButton, Button, Container, Text
} from '@chakra-ui/react';
import Navbar from "../../Components/Navbar"
import { Wishlist } from './WishList';
import { PersonalInfo } from './PersonalInfo';
import { Faq } from './Faq';
import Signup from './SignUp';
import { GrHelp } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
const LinkItems = [
  { name: 'Rewards', icon: <BsGift />, link: '/rewards' },
  { name: 'Wishlist', icon: <BsHeart />, link: "/account/wishlist" },
  { name: 'My Orders', icon: <BsCartCheck />, link: "/account/myOrder" },
  { name: 'Perosonal Info', icon: <BiUser />, link: "/account/personalInfo" },
  { name: 'Help', icon: <GrHelp />, link: "/account/help" },
  { name: 'SignIn', icon: <FaSign />, link: "/account/" },
];
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();
  let { isAuth, setAuth } = useContext(AuthContext);
  let name = JSON.parse(localStorage.getItem("user")) || {};


  return <div className="container" >
    <Container maxW={"full"} align={'center'} m={'5px'} as={Flex} justifyContent={'space-between'} box-shadow= {'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}>
      <Stack align={'flex-start'}>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <RxHamburgerMenu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Account Menu</DrawerHeader>

            <DrawerBody>
              {LinkItems.map((link) => (
                <div key={link.name}>
                  <NavLink to={link.link}
                    className="link"
                    activeclassname="active">
                    <div style={{ fontSize: isOpen ? "17px" : "21px" }} className='icon'>{link.icon}</div>
                    <div style={{ display: isOpen ? "" : "none", transition: "all 0.5s" }} className="link_text">{link.name}</div>
                    <div className="arrow"><SlArrowRight /></div>
                  </NavLink>
                  <Divider />
                </div>
              ))}
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Stack>
      <HStack align={'center'}>
        <FaUserCircle size={'17px'} />
        <Text fontSize={'17px'} colorScheme='teal' fontWeight={600}>{name.name !== "" && isAuth ? name.name : "USER"}</Text>
      </HStack>
    </Container>
    <Container maxW={"full"} p={'0%'}>
      <Routes>
        <Route path="/wishlist" element={!isAuth ? (<Login />) : (<Wishlist />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/personalInfo" element={!isAuth ? (<Login />) : (<PersonalInfo />)} />
        <Route path="/help" element={<Faq />} />
      </Routes>
    </Container>
  </div>
}

/*
<div style={{width:isOpen?"25%":"10%"}} className='sidebar'>
    <div className='top-section'>
      //<div style={{flexDirection:isOpen?"row":"column"}} className='bars'> 
      <div style={{flexDirection:isOpen?"row":"column-reverse"}} className='bars'>
       <div style={{color:"#319795",display:"flex",alignItems:"center"}}>
        <FaUserCircle/> | 
        <div>
        {name.name!==""&&isAuth?name.name: "USER"}
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
*/