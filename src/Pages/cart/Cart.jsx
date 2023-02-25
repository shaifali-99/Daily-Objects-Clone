import { Box, Button, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ImageEveryPage from "../../Components/Cases and covers/ImageEveryPage";
import Navbar from "../../Components/Navbar";
import { AuthContext } from "../UserAccount/AccountContextAuth/AuthContextAccount";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

export default function Cart() {
  const navigate = useNavigate();
  let {name,email} = JSON.parse(localStorage.getItem("userName"));
  const [cartData, setCartData] = useState([]);
  const [change,setChange]=useState(false);
  const [q,setQ]=useState(Number)
  const {isAuth}=useContext(AuthContext);
  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/cartItems`)
      .then((res) => {
        if(isAuth){
        setCartData(res.data);}
      })
      .catch(() => alert(`error`));
  }, [change,isAuth]);
  const handleBuyNow = async (id) => {
    let result1 = await axios.get(`http://localhost:8080/cartItems/${id}`);
    console.log(result1.data);
    const newObj = result1.data;
    await axios.post(` http://localhost:8080/buyNow`, newObj);
    navigate(`/buynow`);
  };
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/cartItems/${id}`)
    .then((r)=>setChange((p)=>!p))
    .catch((e)=>console.log(e))
  }
  const handleQuantity=(num)=>{
    setQ((p)=>p+num)
  }
  return (
    <div>
    <Navbar/>
      <ImageEveryPage name={`Welcome to the cart page`} />
      <div>
      {cartData.length === 0 ? (
        <Heading>OOps! It seems Like You have not added anything yet </Heading>
      ) : (
        <div  style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
          {cartData?.map((el) => {
            setQ(el.quantity)
            return <Card direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      margin={'1rem'}
                      justifyContent={'space-around'}
                      variant='outline'
                    >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '70%', sm: '200px' }}
                      src={el.image}
                      alt='Caffe Latte'
                    />

                    <Stack gap={'0'}>
                      <CardBody>
                        <Heading size='md'>{el.title}</Heading>
                        <Heading size='md'>Price:{el.price}</Heading>
                      </CardBody>
                      <CardBody>
                      <Button margin={'0.5rem'} onClick={()=>handleQuantity(-1)}>-</Button>
                        {el.quantity}
                        <Button margin={'0.5rem'}>+</Button>
                      </CardBody>
                      <CardFooter gap={'1rem'} justifyContent={'space-around'}>
                        <Button variant='solid' colorScheme='blue' onClick={() => handleBuyNow(el.id)}>
                          Buy Now
                        </Button>
                        <Button onClick={()=>navigate("/")}>Go To Home</Button>
                        <Button colorScheme={'red'} onClick={()=>handleDelete(el.id)}><BsFillTrashFill/></Button>
                      </CardFooter>
                    </Stack>
                  </Card>
          })}
        </div>
      )}
       
      </div>
    </div>
  );
}

{/* <div style={{border:"1px solid"}}>
<Card margin={'auto'}>
  <CardHeader>
    <Heading size='md'>Checkout Summary</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider/>} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Total Cart Item Price
        </Heading>
        <Text pt='2' fontSize='sm'>
          Total Product :{}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
</div> */}