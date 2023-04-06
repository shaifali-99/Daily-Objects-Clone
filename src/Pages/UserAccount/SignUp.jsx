import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const toast = useToast();
  const nav = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkUserData = await axios.get(`https://dailyobjects-f06p.onrender.com/users`);
    console.log("checkUserData", checkUserData)

    let userIsHere = 0;
    const userData = { "name": name, "email": email, "password": password };

    console.log(userData);

    if (name === "" || email === "" || password === "") {
      toast({
        position: "top",
        title: "Signup Failed",
        description: "Please fill all Details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return
    } else {
      checkUserData.data.forEach((el) => {
        console.log(el.email)
        if (el.email === email || el.name === name) {
          userIsHere = 1;
        }
      })
    }
    if (userIsHere === 0) {
      let resPost = await axios.post(`https://dailyobjects-f06p.onrender.com/users`, userData);
      nav("/account/login")
      toast({
        position: "top",
        title: "Signup Success",
        description: "you are signup in successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      // alert("🎉 Hurray!⚛Sign Up Successfully 😃✔")
      console.log(resPost);
      return;
    }
    if (userIsHere === 1 || userIsHere > 0) {
      toast({
        position: "top",
        title: "Signup Failed",
        description: "User Already exist",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return
    }
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundImage="url('https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg')"
      bgSize={'100%'}
      // border={'1px solid'}
      backgroundRepeat="no-repeat"
    >
      <Stack spacing={8} mx={'auto'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>SIGN IN</Heading>
        </Stack>
        <Box
          w={'27rem'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
          p={8}>
          <Stack spacing={4} >
            {/* <HStack> */}
            <Box>
              <FormControl
                id="firstName"
                isRequired >
                <FormLabel>Name</FormLabel>
                <Input type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </FormControl>
            </Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href='/account/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}