
import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
import ImageEveryPage from "../../ImageEveryPage";
import Navbar from "../../../Navbar";
// import PhoneCoverItem from "./CoverItem/PhoneCoverItem";
const getCovers = () => {
  return axios(`http://localhost:8080/iphoneCovers`);
};
export default function PhoneCovers() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div >
    <Navbar/>
      <div >
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      <div
     class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 "
        style={{
          // display: "grid",
          // gridTemplateColumns: "repeat(4,1fr)",
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}
      >
        {phoneCover?.map((el) => (
           <PhoneCoverItem key={el.id} brand={`iphoneCovers`} {...el}/>
        ))}
      </div>
    </div>
  );
}
