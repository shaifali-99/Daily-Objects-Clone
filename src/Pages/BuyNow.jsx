import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Stack, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"
import { AuthContext } from "./UserAccount/AccountContextAuth/AuthContextAccount";


export default function Buynow(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [detailInfo,setDetailInfo]=useState({});
    // const initialFocusRef = useRef();
  const [change,setChange]=useState(false);
  let {personalId,buyId}=useContext(AuthContext);
    let nav = useNavigate();
    const [price,setPrice]=useState(Number);
    const [qnt,setQuanity]=useState(Number);
    const [buyProduct,setBuyProduct]=useState([])
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [pincode,setPincode]=useState("");
    const [state,setState]=useState("");
    const [area,setArea]=useState("");
    const [city,setCity]=useState("");
    const [houseNo,setHouseNo]=useState("");
    const getBuyItem=()=>{
      axios.get(`http://localhost:8080/cartItem/${buyId}`)
      .then((res)=>{
        setBuyProduct(res.data);
        console.log(res.data)
        buyProduct.map((e)=>{
          setPrice((prev)=>prev+Number(e.price));
          setQuanity((prev)=>prev+Number(e.quantity))
        })
      })
      .catch((E)=>console.log(E))
    }
  useEffect(()=>{
    axios.get(`http://localhost:8080/users/${personalId}`)
    .then((res)=>{console.log(res);
      setEmail(res.data.email);
      setName(res.data.name);
      setDetailInfo(res.data);
      setArea(res.data.area);
      setCity(res.data.city);
      setPhone(res.data.phone);
      setHouseNo(res.data.houseNo);
      setState(res.data.state)
      setPincode(res.data.pincode);
    })
    .catch((e)=>console.log(e));
    getBuyItem();
  },[personalId,change]);


  const handleSubmit=()=>{
    let obj={name,area,state,city,phone,houseNo,pincode,email};
    axios.patch(`http://localhost:8080/users/${personalId}`,obj)
    .then((res)=>{
        console.log("after submit",res);
        let user={name,email}
        localStorage.setItem("userName",JSON.stringify(user))
        setChange((prev)=>!prev);
        onClose();
    })
    .catch((err)=>{
        console.log(err)
    })
}

const handleOrder=()=>{
  alert("Placed Order ! Succesfully");
  // axios.
}
  return <>
  <Navbar/>
  <div style={{border:"1px solid lightgray",margin:"auto",alignItems:"center",padding:"2.5rem"}}>
    <Heading as={'h2'} size='xl'>CHECKOUT</Heading>
  </div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',border:"1px solid lightgrey",padding:"1rem"}}>
    <div>
      {detailInfo.area?(
        <Box>
        <Heading m="1rem">Shipping Address 🚚📝</Heading>
       <Card border={"1px solid lightgrey"} w={'70%'} margin="auto" backgroundColor={'gray.50'} textAlign="left">
        <Stack>
        <CardBody>
        <Text>
          <b>{name}</b>
        </Text>
        <Text>
          <b>Address:</b> {houseNo},{area}
        </Text>
        <Text>{city},{state},{pincode}</Text>
        <Text><b>Contact:</b> {phone}</Text>
        <Text><b>Email:</b> {email}</Text>
        </CardBody>
        <Divider/>
        <CardFooter justifyContent={'space-around'}>
          <Button  onClick={onOpen} colorScheme={'messenger'} >Change</Button>
          <Button colorScheme={'pink'} onClick={()=>{nav("/cart")}}> <FaArrowLeft/>Go Back</Button>
        </CardFooter>
        </Stack>
       </Card>
        </Box>
      ):(
        <Button  onClick={onOpen} colorScheme={'messenger'} >Add Address</Button>
      )}
      
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
            <Button colorScheme='messenger' mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </div>

    <div style={{borderLeft:"1px solid lightgrey"}}>
      <Heading m="1rem">Order Summary</Heading>
      <Card  border={"1px solid lightgrey"} w={'70%'} margin="auto" backgroundColor={'gray.50'} textAlign="left">
        <CardBody >
      <HStack justifyContent={'space-between'} margin="0.5rem">
        <Text>Item Total({buyProduct.length} Items)</Text> 
        <Text>Rs.{price*qnt}</Text>
      </HStack>
      <HStack justifyContent={'space-between'} margin="0.5rem">
        <Text>Discount</Text>
        <Text>Rs {price*qnt*30/100}</Text>
      </HStack>
      <HStack justifyContent={'space-between'} margin="0.5rem">
        <Text>Shipping</Text>
        <Text>Free</Text>
      </HStack>
      <Divider/>
      <HStack justifyContent={'space-between'} margin="0.5rem">
      <Text>Grand Total</Text>
        <Text>Rs {Math.abs(price*qnt-price*qnt*30/100)}</Text>
      </HStack>
        </CardBody>
        <CardFooter justifyContent={'space-between'}>
        <Popover
      // initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button w='100%' colorScheme={'messenger'}>Place Order</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Manage Your Channels
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton/>
        <PopoverBody>
          <Input type="number" placeholder="Card Number"/>
          <br/>
          <Input type="number" placeholder="CVV"/>
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <ButtonGroup size='sm'>
            <Button colorScheme='green'onClick={handleOrder}>Done</Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
        </CardFooter>
      </Card>
    </div>
  </div>
  </>
}