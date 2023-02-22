
import axios from "axios";
import React, { useEffect, useState } from "react";
// import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
// import ImageEveryPage from "../../ImageEveryPage";
import PhoneCoverItem from "../GroupSingle/CoverItem/PhoneCoverItem";
import ImageEveryPage from "../ImageEveryPage";

const getCovers = () => {
  return axios(`http://localhost:8080/xiaomiCovers`);
};
export default function NothingCover() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
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
          <PhoneCoverItem key={el.id} brand={`xiaomiCovers`} {...el} />
        ))}
      </div>
    </div>
  );
}
