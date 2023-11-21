import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import Typing from "./typing";

const Intro = () => {
  return (
    // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
    <div id="intro" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell" style={{ position: "relative" }}>
          <div className="container">
            <h2 className="intro-title mb-4"> 전성호 </h2>
            <h3 className="intro-title2 mb-4"> 웹 개발자 포트폴리오 </h3>
            <p className="intro-subtitle">
              <Typing />
            </p>
            <p className="pt-3">
              <a
                className="btn btn-primary btn js-scroll px-3"
                href="#aboutme"
                role="button"
                style={{ fontSize: "1.2rem", fontFamily: "Pretendard" }}
              >
                더 알아보기
              </a>
            </p>
          </div>
          <FaAngleDoubleDown
            class="ani"
            size="30"
            style={{ position: "absolute", bottom: 15 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
