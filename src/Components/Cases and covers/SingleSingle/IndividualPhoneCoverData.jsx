import { background, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import ImageEveryPage from "../ImageEveryPage";

export default function IndividualPhoneCoverData() {
  const params = useParams();
const navigate = useNavigate()
  console.log(params);
  const [individualData, setIndividual] = useState([]);
  const handleClick = ()=>{
    const newObj = individualData
    axios.post(`http://localhost:8080/cartItems`,newObj)
    alert(`${individualData.title} has been added to the cart`)
  }
  const handleCart  = ()=>{
navigate(`/cart`)
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/iphonecovers/${params.id}`)
      .then((res) => setIndividual(res.data))
      .catch(() => alert("error"));
  }, []);
  console.log(`individualData`,individualData);
  const { image, href, id, price, title, strike } = individualData;
  const ss = `>>`
  return (
    <div>
      <Navbar />
      <ImageEveryPage />
      <div style={{textAlign:"end"}}>

     <Button marginTop={"-250px"} marginLeft="300px" onClick={handleCart} >Go To Cart {ss}</Button>
      </div>
      {
        <div style={{ display: "flex",marginTop:"-100px" }}>
          <div
            style={{
             
              width: "50%",
              backgroundColor: `rgb(247,247,247)`,
            }}
          >
            <img src={image} alt="" width="505" />
          </div>
          <div
            style={{
              marginTop: "50px",
              textAlign: "start",
              marginLeft: "40px",
            }}
          >
            <Heading size={"md"}>{title}</Heading>
            <br />
            <Heading size={"md"}>
              Price: {price} <del style={{ color: "red" }}>{strike}</del>
            </Heading>
            <br />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <h1 style={{ color: "red" }}>Exciting offers</h1>
            <br />
            <div style={{ display: "flex" }}>
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/offers-icon-324-280px.png?tr=cm-pad_resize,v-2,dpr-2,q-60"
                alt=""
                width="30px"
              />
              <h1 style={{ marginLeft: "20px" }}>BUY 1 GET 1 FREE</h1>
            </div>{" "}
            <br />
            <div style={{ display: "flex" }}>
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/offers-icon-324-280px.png?tr=cm-pad_resize,v-2,dpr-2,q-60"
                alt=""
                width="20px"
              />
              <h1 style={{ marginLeft: "20px" }}>
                FREE DUFFLE BAG ON ORDERS ABOVE Rs.2999 / FREE KEYCHAIN SET ON
                ORDERS ABOVE Rs.1999
              </h1>
            </div>
            <br />
            <div>
              <Heading>Select Color</Heading>
              <br />
              <div style={{ display: "flex", gap: "30px" }}>
              
              <Button borderRadius={"50%"} colorScheme={"red"} onClick={()=>alert(`sorry this color variant is no longer available`)}></Button>
              <Button borderRadius={"50%"} colorScheme={"green"} onClick={()=>alert(`sorry this color variant is no longer available`)}></Button>
              <Button borderRadius={"50%"} colorScheme={"teal"} onClick={()=>alert(`sorry this color variant is no longer available`)}></Button>
              </div>
            </div>
            <br />
            <br />
            <Button size={"lg"}>BUY NOW</Button> 
            <Button size={"lg"} marginLeft={"30px"} onClick={handleClick} > Add To Cart</Button>
          </div>
        </div>
      }
    </div>
  );
}
