import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageEveryPage from "../ImageEveryPage";
const getCovers = () => {
  return axios(`http://localhost:8080/iphoneCovers`);
};
export default function PhoneCovers() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);
  const handleClick = (el)=>{
    console.log("sdsd",el)
  }
  return (
    <div>
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "100%",
          margin: "auto",
          gap: "20px",
        }}
      >
        {phoneCover?.map((el) => (
          <div style={{textAlign:"start"}} key={el.src}>
            <div style={{backgroundColor:"rgb(247,247,247)"}}>
              <img src={el.src} alt="" />
              <Button size={"lg"} onClick={(el)=>handleClick(el.text)}>❤️Add To Wishlist</Button>
              <i className="fa fa-heart" style={{fontSize:"48px",color:"red"}}></i>
            </div><br />
            <Heading as={"h4"} size={"xs"}>{el.text}</Heading>
            <h1>{el.price} <del>{el.strike}</del> </h1>
            <Heading size={"xs"} color="red">BUY 1 GET 1 FREE</Heading>
          </div>
        ))}
      </div>
    </div>
  );
}
