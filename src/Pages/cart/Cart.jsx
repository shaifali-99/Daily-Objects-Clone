import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ImageEveryPage from "../../Components/Cases and covers/ImageEveryPage";
import Navbar from "../../Components/Navbar";
import { AuthContext } from "../UserAccount/AccountContextAuth/AuthContextAccount";


export default function Cart() {
  const navigate = useNavigate();
  let {email} = JSON.parse(localStorage.getItem("userName"));
  const [cartData, setCartData] = useState([]);
  const [change,setChange]=useState(false)
  const {isAuth}=useContext(AuthContext);
  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/cartItems`)
      .then((res) => {
        if(isAuth){
        setCartData(res.data);}
      })
      .catch(() => alert(`error`));
  }, [change]);
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
  return (
    <div>
    <Navbar/>
      <ImageEveryPage name={`Welcome to the cart page`} />
      {cartData.length === 0 ? (
        <Heading>OOps! It seems Like You have not added anything yet </Heading>
      ) : (
        <div style={{ display: `grid`, gridTemplateColumns: "repeat(3,1fr)" }}>
          {cartData?.map((el) => {
            
            return (el.email&&el.email===email?(<div style={{ textAlign: "start" }} key={el.id}>
              <div style={{ backgroundColor: "rgb(247,247,247)" }}>
                <img src={el.image} alt="" />
              </div>
              <br />
              <Heading as={"h4"} size={"xs"}>
                {el.title}
              </Heading>
              <h1>
                {el.price} <del>{el.strike}</del>{" "}
              </h1>
              <Heading size={"xs"} color="red">
                BUY 1 GET 1 FREE
              </Heading>
              <Button onClick={() => handleBuyNow(el.id)}>Buy Now</Button>
              {/* <p><BsFillTrashFill/></p> */}
              <Button colorScheme={"red"} onClick={()=>handleDelete(el.id)}><BsFillTrashFill/></Button>
            </div>):(""))
          })}
        </div>
      )}
      <div>

      </div>
    </div>
  );
}

// <div>
//                 <Button onClick={()=>{setQuantity((prev)=>prev-1);setChange((prev)=>!prev)}}>-</Button>
//                 {el.quantity}
//                 <Button onClick={()=>{setQuantity((prev)=>prev+1);setChange((prev)=>!prev)}}>+</Button>
//               </div>