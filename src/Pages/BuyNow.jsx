import axios from "axios";
import React, { useEffect, useState } from "react";
let sum = 0
export default function BuyNow() {
  const [buyNow, setBuyNow] = useState([]);
  const [summation,setSum] = useState(0)
  useEffect(() => {
    axios.get(`http://localhost:8080/buyNow`)
      .then((res) => setBuyNow(res.data))
    // const temp =    buyNow?.forEach((el)=>{
    //    sum = Number(el.price)
    //  return sum }
    //  )
    //   console.log(temp)
    //   setSum(prev=>prev+sum)
  }, []);
  console.log(buyNow[0].price)
  return <div>
  </div>;
}
