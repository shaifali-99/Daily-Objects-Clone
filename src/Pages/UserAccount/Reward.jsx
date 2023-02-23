import React, { useContext } from 'react';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
  } from '@chakra-ui/react';
import signImg from './accImage/signup.jpg';
import redeem from './accImage/redeem.jpg';
import earn from './accImage/earnPoints.jpg'
import { FaFacebook, FaGift, FaInstagram } from 'react-icons/fa';
import Navbar from '../../Components/Navbar';
import { AuthContext } from './AccountContextAuth/AuthContextAccount';
export const Rewards=()=>{
    const rewardList = [
        {icon:<FaGift/>,title:"Follow on Facebook",points:"get 100 points"},
        {icon:<FaInstagram/>,title:"Follow on Instagram",points:"get 200 points"},
        {icon:<FaFacebook/>,title:"Signup Reward",points:"get 100 points"},
    ]
    const waysToRedeem=[
        {icon:<FaGift/>,title:"Flat 500 Off",points:"For 3000 Coins"},
        {icon:<FaGift/>,title:"Flat 500 Off on Orders",points:"For 1000 Coins"},
        {icon:<FaGift/>,title:"Extra 300 off on orders",points:"For 5000 Coins"},
    ]
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      );
      const {isAuth}=useContext(AuthContext);
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return <div>
        <Navbar/>
        <div className='reward_portal'>
        <Flex
            w={'full'}
            h={'50vh'}
            backgroundImage={
                'url(https://images.dailyobjects.com/marche/assets/images/other/loyalty-page-banner.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                alignItems={'left'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'xl'} align={'flex-start'} spacing={6}>
                <Text
                    color={'white'}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
                   Spend More, Earn More with the DailyObejcts Rewards Program.
                </Text>
                <Stack w={'full'}direction={'row'}justify={'center'}>
                    <Link href='/account/login'>
                        <Button
                        bg={'blue.400'}
                        rounded={'full'}
                        color={'white'}
                        _hover={{ bg: 'blue.500' }}>
                        Sign up and get 100 Free coins:
                        </Button>
                    </Link>
                    <Link href='/account/login'>
                    <Button
                    bg={'whiteAlpha.300'}
                    rounded={'full'}
                    color={'white'}
                    _hover={{ bg: 'whiteAlpha.500' }}>
                    Sign in
                    </Button>
                    </Link>
                </Stack>
                </Stack>
            </VStack>
            </Flex>
        </div>
        {
            isAuth?<div>
            <Heading as="h3" size="lg" color={'teal.500'}>Your Coins</Heading>
            <Heading as="h3" size="lg" color={'teal.500'}>400</Heading>
        </div>: <div className='beforeSignup_step'>
            <Heading as="h3" size="lg">How does it work ?</Heading>
            <p>Win DO Coins for each of the following activities to redeem exclusive rewards & discounts, just for you!</p>
            <div className='beforeSignup_step_img'>
                <img src={signImg} alt="signup" />
                <img src={earn} alt="earn" />
                <img src={redeem}alt="redeem" />
            </div>
        </div>
        }
       
        <div style={{backgroundColor:"rgb(239, 241, 239)"}}>
        <Heading as="h3" size="lg" margin={'1rem'} p={"1rem"}>Ways To Earn</Heading>
        <p>Win DO Coins for each of the following activities to redeem exclusive rewards & discounts, just for you!</p>
        <div className='rewardnGifts'>
            {
                rewardList.map((e)=>{
                    return <div key={e.title} style={{padding:"2rem"}}>
                        <Box onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                            }}
                            display={'flex'}
                            gap={"1rem"}
                            padding="1.5rem 2rem"
                            backgroundColor={'white'}
                            border={'1px solid grey'}
                            borderRadius='5px'
                            >
                        <p style={{color:"teal",fontSize:"30px"}}>{e.icon}</p>
                        <div style={{ textAlign:'left'}} >
                            <p style={{fontWeight:"600"}}>{e.title}</p>
                            <p style={{fontSize:"10px"}}>{e.points}</p>
                        </div>
                        </Box>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            {overlay}
                            <ModalContent>
                            <ModalHeader>Join And Earn Rewards</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text>Win Coins for every spend to redeem exclusive Rewards and Discounts</Text>
                            </ModalBody>
                            <ModalFooter gap={'1rem'}>
                                <Link href='/'>
                                <Button colorScheme={'green'}>
                                    Start Shopping
                                </Button>
                                </Link>
                                <Link href='/account/login'>
                                <Button colorScheme={'blue'}>
                                    Signup
                                </Button>
                                </Link>
                                <Button colorScheme={'red'} onClick={onClose}>Close</Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>
                })
            }
        </div>
        </div>
        <div>
        <Heading as="h3" size="lg" margin={'1rem'} p={"1rem"}>Ways To Redeem </Heading>
        <p>Spend your points on any of the amazing rewards below</p>
        <div className='rewardnGifts'>
            {
                waysToRedeem.map((e)=>{
                    return <div key={e.title} style={{padding:"2rem"}}>
                        <Box onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                            }}
                            display={'flex'}
                            gap={"1rem"}
                            padding="1.5rem 2rem"
                            backgroundColor={'white'}
                            border={'1px solid grey'}
                            borderRadius={'5px'}
                            >
                        <p style={{color:"teal",fontSize:"30px"}}>{e.icon}</p>
                        <div style={{ textAlign:'left'}} >
                            <p style={{fontWeight:"600"}}>{e.title}</p>
                            <p style={{fontSize:"10px"}}>{e.points}</p>
                        </div>
                        </Box>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            {overlay}
                            <ModalContent>
                            <ModalHeader>Redeem Earned Rewards</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text>Win Coins for every spend to redeem exclusive Rewards and Discounts</Text>
                            </ModalBody>
                            <ModalFooter gap={'1rem'}>
                                <Link href='/'>
                                <Button colorScheme={'green'}>
                                    Start Shopping
                                </Button>
                                </Link>
                                <Link href='/account/login'>
                                <Button colorScheme={'blue'}>
                                    Signup
                                </Button>
                                </Link>
                                <Button colorScheme={'red'} onClick={onClose}>Close</Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>
                })
            }
        </div>
        </div>
        <div style={{backgroundColor:"rgb(239, 241, 239)",padding:"1rem"}}>
        <Heading as="h3" size="lg" margin={'0.5rem'} p={"1rem"}>Referral Program </Heading>
        <p>Share our website with a friend for them to claim the reward 100 Coins</p>
        <div className='program'>
            <div>
                <p>THEY GET</p>
                <p style={{fontSize:"13px"}}>100 Coins</p>
            </div>
            <div>
                <p>YOU GET</p>
                <p style={{fontSize:"13px"}}>200 Coins</p>
            </div>
        </div>
        </div>
    </div>

}