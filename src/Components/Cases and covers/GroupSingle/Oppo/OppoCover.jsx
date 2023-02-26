import axios from "axios";
import React, { useEffect, useState } from "react";
// import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
// import ImageEveryPage from "../../ImageEveryPage";
import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
import ImageEveryPage from "../../ImageEveryPage";
import Navbar from "../../../Navbar";

const getCovers = () => {
  return axios(`http://localhost:8080/oppoCovers`);
};
export default function OppoCover() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      <div
        class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 "
        style={{
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}
      >
        {phoneCover?.map((el) => (
          <PhoneCoverItem key={el.id} brand={`oppoCovers`} {...el} />
        ))}
      </div>
    </div>
  );
}
