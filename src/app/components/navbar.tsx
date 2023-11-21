"use client";

import Link from "next/link";
import React from "react";
import React_2 from "framer-motion/dist/framer-motion";
import useRef = React_2.useRef;

const navItems = {
  "#intro": {
    name: "intro",
  },
  "#aboutme": {
    name: "About Me",
  },
  "#skills": {
    name: "Skills",
  },
  "#projects": {
    name: "Projects",
  },
  "#storage": {
    name: "Storage",
  },
  "#career": {
    name: "Career",
  },
};

export default function Navbar() {

  const nav = $("nav");
  let navHeight = nav.outerHeight();

  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight,
  });

  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      document.querySelector(".navbar-expand-md").classList.add("navbar-reduce");
      document.querySelector(".navbar-expand-md").classList.remove("navbar-trans");
      this.setState({});
    } else {
      document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
      document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce");
      this.setState({});
    }
  });

  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (
      window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
      window.location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navHeight + 5,
          },
          1000,
          "easeInExpo"
        );
        return false;
      }
    }
  });

  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}

  return (
    <nav ref={useRef}>
      <div>
        <div>
          <ul>
            <li>
              <Link href="#projects" className="nav-link js-scroll">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#storage" className="nav-link js-scroll">
                Storage
              </Link>
            </li>
            <li>
              <Link href="#career" className="nav-link js-scroll">
                Career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
