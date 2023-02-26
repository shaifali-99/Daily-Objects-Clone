import { Heading } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import ImageEveryPage from "../Cases and covers/ImageEveryPage";
import Navbar from "../Navbar";
export default function NewArrivalNavbar() {
  return (
    <div >
      <Navbar />
      <div>
        <ImageEveryPage class="border border-gray-500" name={`NEW ARRIVALS`} />
      </div>
      <hr />
      <div class="md:flex md:item-center z-[-1] md:z-auto"
        style={{
          marginLeft:"200px",
          width: "40%",
          margin: "auto",
          marginTop: "60px",
          gap: "80px",
        }}
      >
        <Link to={"/newarrivalcomp/allarrivals"}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg/1200px-Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg.png"
            alt=""
            style={{ borderRadius: "50%", width: "100px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>All </h1>
        </Link>
        <Link to={"/newarrivalcomp/watchbands"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>
            WatchBands
          </h1>
        </Link>
        <Link to={"/newarrivalcomp/desks"}>
          <img
            src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>Desks</h1>
        </Link>
        <Link to={"/newarrivalcomp/chargingsolution"}>
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>Charging  <br /> Solution</h1>
        </Link>
        <Link to={"/newarrivalcomp/pedalbackpack"}>
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt=""
            style={{ borderRadius: "50%", width: "60px", margin: "auto" }}
          />
          <br />
          {/* <h1>SDDD</h1> */}
          <h1>Pedal BackPack</h1>
        </Link>
      </div>
      <hr />
      <hr />
      <br /><br />
    </div>
  );
}
