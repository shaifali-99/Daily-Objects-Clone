import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageEveryPage from "../../Components/Cases and covers/ImageEveryPage";
import Navbar from "../../Components/Navbar";

export default function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/cartItems`)
      .then((res) => setCartData(res.data))
      .catch(() => alert(`error`));
  }, []);
  const handleBuyNow = async (id) => {
    let result1 = await axios.get(`http://localhost:8080/cartItems/${id}`);
    console.log(result1.data);
    const newObj = result1.data;
    await axios.post(` http://localhost:8080/buyNow`, newObj);
    navigate(`/buynow`);
  };
  return (
    <div>
    <Navbar/>
      <ImageEveryPage name={`Welcome to the cart page`} />
      {cartData.length === 0 ? (
        <Heading>OOps! It seems Like You have not added anything yet </Heading>
      ) : (
        <div style={{ display: `grid`, gridTemplateColumns: "repeat(3,1fr)" }}>
          {cartData?.map((el) => (
            <div style={{ textAlign: "start" }}>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
