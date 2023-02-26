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
  useColorModeValue,
} from '@chakra-ui/react';

import axios from 'axios';
import { useContext } from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AccountContextAuth/AuthContextAccount';

export default function Login() {
  const nav=useNavigate();
  const [email,setEmail]=useState("gaurav123@gmail.com");
      const [name, setName] = useState("Gaurav J");
      const [password,setPassword]=useState("gauru1234");
      let {setpersonalId}=useContext(AuthContext);
      let {login,isAuth,setAuth,token,setToken} = useContext(AuthContext);

  let userExist =0;
  const handleLogin = async(e) =>{
      e.preventDefault()
      let checkIsUser = await axios.get(`http://localhost:8080/users`);
      // console.log(checkIsUser.data);
      checkIsUser.data.map((el)=>{
          if(el.email===email&&el.password===password&&el.name===name){
              let id=el.id;
              userExist=1;
              isAuth=true;
              token=id;
              setAuth(!isAuth);
              setToken(token)
              login(token,isAuth);
              console.log(isAuth)
              setpersonalId(el.id);
          }
          return
      })
      if(userExist===1){
          alert("🎉🎊Successfully Logged In 🤗🥳");
          console.log("loginSuccessfull",token,isAuth);
          localStorage.setItem("userName",name);
          console.log(localStorage.getItem("userName"))
          // window.location.href("/account/personalInfo")  
        }else{
          alert("Invalid Credentials❌");
        }
        if(isAuth){
          nav('/account/personalInfo') 
        }
      }
      
  //     useEffect(()=>{
      
  // },[])

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={8}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log in</Heading>
        </Stack>
        <Box
          w={'25rem'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl 
                  id="firstName" 
                  isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text"  
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
            </FormControl>         
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
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
                  <Link onClick={()=>nav("/account/signup")} color={'blue.400'}>
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