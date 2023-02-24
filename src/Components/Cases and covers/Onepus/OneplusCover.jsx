import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import PhoneCoverItem from "../GroupSingle/CoverItem/PhoneCoverItem";
import ImageEveryPage from "../ImageEveryPage";

const getCovers = () => {
  return axios(`  http://localhost:8080/oneplusCovers`);
};
export default function OneplusCover() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
    <Navbar/>
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
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
          <PhoneCoverItem key={el.id} brand={`oneplusCovers`} {...el} />
        ))}
      </div>
    </div>
  );
}
