import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AccountContextAuth/AuthContextAccount';

export default function Login() {
  const toast = useToast();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let { setpersonalId } = useContext(AuthContext);
  let { login, isAuth, setAuth, token, setToken } = useContext(AuthContext);

  let userExist = 0;
  const handleLogin = async (e) => {
    e.preventDefault();
    let checkIsUser = await axios.get(`https://dailyobjects-f06p.onrender.com/users`);
    // console.log(checkIsUser.data);
    if(email===""||password===""){
      toast({ position: "top",
      title: "Login Failed",
      description: "Please fill all Details",
      status: "error",
      duration: 4000,
      isClosable: true,});
      return 
    }
    checkIsUser.data.map((el) => {

      if (el.email === email && el.password === password) {
        let id = el.id;
        userExist = 1;
        isAuth = true;
        token = id;
        setAuth(!isAuth);
        setToken(token);
        setName(el.name)
        login(token, isAuth);
        // console.log(isAuth)
        setpersonalId(el.id);
      }
       
    })
    if (userExist === 1) {
      // alert("🎉🎊Successfully Logged In 🤗🥳");
      console.log("loginSuccessfull", token, isAuth);

       toast({ position: "top",
        title: "Login Success",
        description: "You logged in successfully",
        status: "success",
        duration: 4000,
        isClosable: true});
      let obj = {name, email};
      localStorage.setItem("user", JSON.stringify(obj));
      console.log(localStorage.getItem("userName"));
       
    } 
    else {
      toast({ position: "top",
        title: "Login Failed",
        description: "Invalid Credentials",
        status: "error",
        duration: 4000,
        isClosable: true})   
    }
    if (isAuth) {nav('/account/personalInfo')}
  }

  return (
    <Flex
      // minH={'100vh'}
      align={'center'}
      backgroundImage={"url('https://thumbs.dreamstime.com/b/trendy-beautiful-young-asian-woman-carrying-colorful-bags-shopping-online-mobile-phone-isolated-purple-banner-background-184325828.jpg')"}
      bgSize={'100% 100%'}
      backgroundRepeat="no-repeat"
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={8}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>LOG IN</Heading>
        </Stack>
        <Box
          w={'25rem'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {/* <FormControl
              id="firstName"
              isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} required />
            </FormControl> */}
            <FormControl id="email" isRequired >
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}required/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
              >
                Log in
              </Button>
              <Text align={'center'}>
                Don't have an account ?
                <Link onClick={() => nav("/account/signup")} color={'blue.400'}>
                  Sign Up
                </Link>
              </Text>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}