

import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageEveryPage from "../Cases and covers/ImageEveryPage";

// import ImageEveryPage from "../ImageEveryPage";
import Navbar from "../Navbar";
import Individual from "./Individual";
import IndividualForSaleI from "./IndividualForSale";

const getCovers = () => {
  return axios(`http://localhost:8080/sale`);
};
export default function Sale() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
    <Navbar/>
      <div>
        <IndividualForSaleI name={`SALE`} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}
      >
        {phoneCover?.map((el) => (
          <Individual key={el.id} brand={`sale`} {...el} />
        ))}
      </div>
    </div>
  );
}
