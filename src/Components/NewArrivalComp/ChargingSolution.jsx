import axios from "axios";
import React, { useEffect, useState } from "react";

import SingleItem from "./SingleItem";
import NewArrivalNavbar from "./NewArrivalNavbar";
const getTheCharger = () => {
  return axios.get(`http://localhost:8080/chargingSolution`);
};

export default function ChargingSolution() {
  const [charging, setCharging] = useState([]);
  useEffect(() => {
    getTheCharger().then((res) => setCharging(res.data));
  }, []);
  console.log(charging);
  return (
    <div>
      <NewArrivalNavbar />
      <div
        class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 "
        style={{
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}
      >
        {charging?.map((el) => (
          <div class=" mx-auto w-6/8 ">
            <SingleItem key={el.id} {...el} brand={`Desks`} />
          </div>
        ))}
      </div>
    </div>
  );
}
