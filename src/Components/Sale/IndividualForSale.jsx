
import { Heading } from "@chakra-ui/react";
import React from "react";

export default function IndividualForSaleI({name}) {
  return (
    <div>
      <div className="imageTop">
        <img
          src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/bogo-sale-category-desktop-banner.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60"
          alt=""
        />
        <div className="imageDown">
          <br />
          <br />
          <Heading as="h6" size={"lg"}>
      {name}
          </Heading>
          <br />
          <br />
          <br />
        </div>
        <hr />
      </div>
    </div>
  );
}
