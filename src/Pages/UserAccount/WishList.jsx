import { useEffect, useState } from "react"
import { Button, Heading ,Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import axios from "axios";

export const Wishlist =()=>{
    const [wishlistData,setWishlistData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/Wishlist')
        .then((res)=>{
            console.log(res)
            setWishlistData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return <div>
        {
            wishlistData.length>0?(
                wishlistData.map((e)=>{
                    return <div>{e.price}</div>
                })
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