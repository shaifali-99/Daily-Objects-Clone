import { useEffect, useState } from "react"
import { Button, ButtonGroup, Divider, Heading ,Image,Stack,Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
// import { RepeatClockIcon } from "@chakra-ui/icons";

export const Wishlist =()=>{
    const [wishlistData,setWishlistData] = useState([]);
    const [change,setChange]=useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8080/WishlistiphoneCovers')
        .then((res)=>{
            console.log(res)
            setWishlistData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[change])
   
    return <div>
        
        {
            wishlistData.length>0?(
                <div>
                  <Heading as="h2" size={"lg"} margin="1rem">Wishlist</Heading>
                  <div className="wishlistProduct">
                {wishlistData.map((e)=>{
                    // let id=e.id;
                    const handleDeleteFromWishList = () =>{
                        axios.delete(`http://localhost:8080/WishlistiphoneCovers/${e.id}`)
                        .then((res)=>{console.log(res)})
                        .catch((err)=>{console.log(err)});
                        setChange((prev)=>!prev)
                    }
                    return <Card key={e.id} maxW='sm' boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">    
                    <CardBody>
                      <Image
                        src={e.image}
                        alt={e.title}
                        borderRadius='lg'
                        width={"100px"}
                        margin='auto'
                      />
                      <Stack mt='6' spacing='3'>
                        <Heading size='md'>{e.title}</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                          Price : {e.price}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                          Add to cart
                        </Button>
                        <Button variant='solid' colorScheme='green'>
                          Buy now
                        </Button>
                        <Button colorScheme='red' onClick={handleDeleteFromWishList}>Remove</Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                })}
                  </div>
                </div>
            ):(
                <div>
                <Heading as='h3' size='lg'>YOUR WISHLIST IS EMPTY</Heading>
                <Text fontSize='md' p='0.5rem' color="grey">Do something about it</Text>
                <Link to="/">
                <Button colorScheme='green' 
                        fontSize={{ base: '13px', md: '15px', lg: '16px' }}
                        px={{ base: '20px', md: '25px', lg: '30px' }}
                        py={{base: '10px', md: '13px', lg: '15px'}}
                        >START SHOPPING</Button>
                </Link>
                </div>
            )
        }
    </div>
}