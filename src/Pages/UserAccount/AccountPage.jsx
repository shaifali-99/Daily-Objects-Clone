import { Heading } from "@chakra-ui/react"
import Sidebar from "./Sidebar"

export const AccountPage = () =>{
    return <div>
        <div>
            <div style={{border:"1px solid lightgray",margin:"auto",alignItems:"center",padding:"2.5rem"}}>
                <Heading as={'h2'} size='xl'>MY ACCOUNT</Heading>
            </div>
            <Sidebar/>
        </div>
    </div>
}