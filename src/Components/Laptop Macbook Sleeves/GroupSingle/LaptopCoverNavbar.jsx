import { Heading } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import ImageEveryPage from "../../Cases and covers/ImageEveryPage";
import Navbar from "../../Navbar";
export default function LaptopCoverNavbar() {
  return (
    <div>
      <Navbar />
      <div>
        <ImageEveryPage name={`LAPTOP COVERS & SLEEVES`} />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          width: "40%",
          margin: "auto",
          marginTop: "60px",
          gap: "80px",
        }}
      >
        <Link to={"/cases/laptopcovers/all"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-2,q-60"
            alt=""
            style={{ borderRadius: "50%", width: "100", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>All &emsp</h1>
        </Link>
        <Link to={"/cases/laptopcovers/zipped"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/category/skipper-sleeves.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-2,q-60"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>
            Zipped <br /> Sleeves
          </h1>
        </Link>
        <Link to={"/cases/laptopcovers/macbook"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/category/macbook-menu-icon-updated2.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-2,q-60"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>Macbook Sleeves</h1>
        </Link>
        <Link to={"/cases/laptopcovers/envelope"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/category/macbook-sleeves.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-2,q-60"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>Envelope <br /> Sleeves</h1>
        </Link>
        <Link to={"/cases/laptopcovers/messenger"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/category/messenger-bag-filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-2,q-60"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>Messenger bags</h1>
        </Link>
      </div>
      <hr />
      <hr />
      <br /><br />
    </div>
  );
}
