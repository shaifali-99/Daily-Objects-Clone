import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../Components/Navbar";
import { extendTheme } from "@chakra-ui/react";
import ImageEveryPage from "../../Components/Cases and covers/ImageEveryPage";


// import Navbar from "../../components/Navbar";
// import ImageEveryPage from "../../Components/Cases and covers/ImageEveryPage";
// import Navbar from "../../Components/Navbar";
console.log("dgdf")
const navLinks = {
  borderRadius: "20%",
};
function Cases() {
  // console.log("dbdf")
  return (
    <div >
      <Navbar/>
<ImageEveryPage name={`CASES & SLEEVES`}/>
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
          <Link to={'/cases/phonecovers'}>
            <img
              src="https://images.dailyobjects.com/marche/tmp/phone-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              PHONE CASES
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link to={"/cases/laptopcovers"}>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/cases-sleeves-intermediate-image.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              LAPTOP/MACBOOK SLEEVES
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/airpod-case-cover-updated.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              AIRPODS CASE COVER
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/ipad-new.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60"
              alt=""
              style={{ borderRadius: "60%", width: "200px", margin: "auto" }}
            />
            <br />
            {/* <h1>SDDD</h1> */}
            <Heading as="h6" size={"md"}>
              IPADS COVERS & SLEEVES
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/passport.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60"
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
              PASSPORT WALLETS
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/eyewear-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60"
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
              EYEWEAR CASES
            </Heading>
          </Link>
        </div>
        <div className="navLinksToFurther">
          <Link>
            <img
              src="https://images.dailyobjects.com/marche/icons/category/airtag-category-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60"
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
              AIRTAG CASES
            </Heading>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cases;
