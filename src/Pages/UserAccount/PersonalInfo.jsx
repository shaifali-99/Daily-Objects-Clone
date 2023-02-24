import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button, useDisclosure, Heading, Text, Input, FormControl, FormLabel, FormHelperText
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AccountContextAuth/AuthContextAccount';
  
export const PersonalInfo = () =>{
    const [detailInfo,setDetailInfo]=useState({});
  const [change,setChange]=useState(false);
  let {personalId}=useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [pincode,setPincode]=useState("");
    const [state,setState]=useState("");
    const [area,setArea]=useState("");
    const [city,setCity]=useState("");
    const [houseNo,setHouseNo]=useState("");

    const fetchPersonalDetails =(personalId)=>{
        axios.get( `http://localhost:8080/users/${personalId}`)
        .then((res)=>{
            console.log("personalInfo",res)
            setEmail(res.data.email);
            setName(res.data.name);
            setDetailInfo(res.data);
            setArea(res.data.area);
            setCity(res.data.city);
            setPhone(res.data.phone);
            setHouseNo(res.data.houseNo);
            setPincode(res.data.pincode);
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{fetchPersonalDetails(personalId)},[personalId,change]);

    const handleSubmit=()=>{
        let obj={name,area,state,city,phone,houseNo,pincode};
        axios.patch(`http://localhost:8080/users/${personalId}`,obj)
        .then((res)=>{
            console.log("after submit",res);
            setChange((prev)=>!prev)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return <div>
        {detailInfo.area?(<div>
            <div style={{width:"50%",border:"1px solid",borderRadius:"5px",padding:"1rem",fontSize:"16px",margin:"auto"}}>
            <Heading as="h3" size={'lg'}>🙎‍♂️Personal Info</Heading>
            <p>Name :--{name}</p>
            <p>PhoneNo :-- +91 {detailInfo.phone}</p>
            <p>Address :-- {detailInfo.houseNo},{detailInfo.area}<p>,{detailInfo.state},{detailInfo.pincode}</p></p>
            <p>Email :-- {email}</p>
            </div>
            <Button onClick={onOpen} colorScheme="green" margin={'1rem'}>Update Details</Button>
        </div> 
        ):(
            <div>
                <Heading as="h3" size={'lg'}>No Personal Details Added</Heading>
                <Text>No personal Info yet,add details</Text>
                <Button onClick={onOpen} colorScheme="green" margin={'1rem'}>Add Details</Button>
            </div>)
    }

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add Your Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl display={'flex'}>
                <FormLabel>Name
                <Input type={'text'} placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </FormLabel>
                <FormLabel>Phone Number
                <Input type="number" placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </FormLabel>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Email
                <Input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FormLabel>
            </FormControl>
            <FormControl display={'flex'}>
                <FormLabel>Pincode
                    <Input type="number" placeholder='Pincode' value={pincode}  onChange={(e)=>setPincode(e.target.value)} />
                </FormLabel>
                <FormLabel>City
                    <Input type="text" placeholder="City" value={city}  onChange={(e)=>setCity(e.target.value)} />
                </FormLabel>
                <FormLabel>State
                    <Input type="text" placeholder="State" value={state}  onChange={(e)=>setState(e.target.value)} />
                </FormLabel>
            </FormControl>
            <FormControl display={'flex'}>
                <FormLabel>House No.
                    <Input type="text" placeholder='Flat no/Building/street' value={houseNo}  onChange={(e)=>setHouseNo(e.target.value)} />
                </FormLabel>
                <FormLabel>Area/Locality
                    <Input type="text" placeholder='Area/Locality' value={area}  onChange={(e)=>setArea(e.target.value)} />
                </FormLabel>
            </FormControl>
            <FormControl>
            <FormHelperText>We'll never share your details.</FormHelperText>
            </FormControl>
            </ModalBody>

            <ModalFooter gap={'1rem'}>
            <Button colorScheme={'green'} onClick={handleSubmit}>Submit</Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </div>
}
