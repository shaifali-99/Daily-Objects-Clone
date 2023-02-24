import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.css"
const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="all">
        <div className="topButton" onClick={goToBtn}>
      <div>
        <h1>
          <FaArrowUp className="topBtn-icon" />
        </h1>
      </div>
    </div>
    </div>
    
  );
};

export default GoToTop;
