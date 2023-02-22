import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Link as cLink } from "@chakra-ui/react";
import ImageEveryPage from "./ImageEveryPage";
import Navbar from "../Navbar";

export default function FilterMobiles() {
  return (
    <div>
    <Navbar/>
      <div>
        <ImageEveryPage name={`Select Brand`} />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <img
            src="https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65707.jpg?2&w=1380&t=st=1677065140~exp=1677065740~hmac=61c1ad52242b609c7714de2a5c32b9e5a323882a08033b6abe7e6cae985548e5"
            alt=""
          />
        </div>

        <div style={{ textAlign: "start", width: "70%", margin: "auto" }}>
          <Heading size={"md"}>Choose Brand</Heading>
          <br />

          <u>
            <Link to={"/cases/phonecovers/apple"}>Apple</Link>
            <br />
            <br />
          </u>
          <u>
            <Link to={"/cases/phonecovers/oneplus"}>One Plus</Link>
            <br />
            <br />
          </u>
          <u>
            <Link to={"/cases/phonecovers/Samsung"}>Samsung</Link>
            <br />
            <br />
          </u>
          <u>
            <Link to={"/cases/phonecovers/xiaomi"}>Xiaomi</Link>
            <br />
            <br />
          </u>
          <u>
            <Link to={"/cases/phonecovers/oppo"}>Oppo</Link>
            <br />
            <br />
          </u>
          <u>
            <Link to={"/cases/phonecovers/vivo"}>Vivo</Link>
            <br />
            <br />
          </u>
          {/* <u>
            <Link to={"/cases/phonecovers/Samsung"}>we</Link>
            <br />
            <br />
          </u> */}
        </div>
      </div>
    </div>
  );
}
