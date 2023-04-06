import React, { useContext, useRef, useState } from 'react';
import Navbar from "../../Components/Navbar"
import Sidebar from "./Sidebar";
import Login from './Login';
import { Wishlist } from './WishList';
import { PersonalInfo } from './PersonalInfo';
import { Faq } from './Faq';
import Signup from './SignUp';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AuthContext } from './AccountContextAuth/AuthContextAccount';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';

export const AccountPage = () => {

    let { isAuth, setAuth } = useContext(AuthContext);

    return <div>
        <div>
            <Navbar />
            <div style={{ border: "1px solid lightgray", margin: "auto", alignItems: "center", padding: "2.5rem" }}>
                <Heading as={'h2'} size='xl'>MY ACCOUNT</Heading>
            </div>
            <div>
                <Tabs isFitted variant='enclosed' border={'1px solid lightgrey'} colorScheme="cyan">
                    <TabList mb='1em'>
                        <Tab _selected={{ color: 'white', bg: '#319795' }}>USER</Tab>
                        <Tab _selected={{ color: 'white', bg: '#319795' }}>ADMIN</Tab>
                    </TabList>
                    <TabPanels border={"0px solid"}>
                        <TabPanel padding={'0px'} border={"0px solid"}>
                            <Sidebar />
                        </TabPanel>
                        <TabPanel padding={'0px'} border={"0px solid"}>
                            <p>Admin Page</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>

    </div>
}