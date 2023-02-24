import { Heading } from "@chakra-ui/react"
import Navbar from "../../Components/Navbar"
import Sidebar from "./Sidebar"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export const AccountPage = () =>{
    return <div>
        <div>
            <Navbar/>
            <div style={{border:"1px solid lightgray",margin:"auto",alignItems:"center",padding:"2.5rem"}}>
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
                        {/* <p>one!</p> */}
                        <Sidebar/>
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