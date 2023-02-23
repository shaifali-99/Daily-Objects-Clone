import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link,NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { extendTheme } from "@chakra-ui/react";
import ImageEveryPage from "../../Components/Cases and covers/ImageEveryPage";
import NewArrivalComp from "../../Components/NewArrivalComp/NewArrivalComp";




const navLinks = {
  borderRadius: "20%",
};


function NewArrivalsPage() {
    console.log("heelo")
  return (
    <div >
        
      <Navbar />
<ImageEveryPage name={`NEW ARRIVALS`}/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          // border: "2px solid red",
          width: "70%",
          margin: "auto",
          gap: "0px",
          marginTop: "50px",
        }}
      >
        <div className="navLinksToFurther">
         
        <Link to ={"/newarrivalcomp"}>
            <img
              src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              ALL
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              WATCHBANDS
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
            MESSENGER BAGS
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
             CHARGING SOLUTIONS
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1"
              alt=""
              style={{
                borderRadius: "60%",
                width: "200px",
                margin: "auto",
                marginTop: "30px",
              }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              MACKBOOK SLEEVES
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
              alt=""
              style={{
                borderRadius: "60%",
                width: "200px",
                margin: "auto",
                marginTop: "30px",
              }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              DESKS
            </Heading>
          </Link>
        </div>
    
      </div>
    </div>
  );
}

export default NewArrivalsPage;
