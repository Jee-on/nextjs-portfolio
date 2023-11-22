"use client";

import Link from "next/link";
import React from "react";
import { useRef, useEffect, useState} from "react";
import { SiNextdotjs } from "react-icons/si";
import { Typography } from "@mui/material";

const navItems = {
  "#intro": {
    name: "INTRO",
  },
  "#aboutme": {
    name: "ABOUTME",
  },
  "#skills": {
    name: "SKILLS",
  },
  "#projects": {
    name: "PROJECTS",
  },
  "#storage": {
    name: "STORAGE",
  },
  "#career": {
    name: "CAREER",
  },
};

export default function Navbar() {

  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [isReduced, setIsReduced] = useState(false)

  useEffect(()=> {
    if(navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsReduced(true);
      } else {
        setIsReduced(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const handleClick = (href: string) => {
    const target = document.querySelector(href);
    if(target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top - navHeight + 5,
        behavior: "smooth",
      })
    }
  }

  const handleNavTglrClick = () => {
    if (("#mainNav").hasClass("navbar-reduce")) {

    }
  }


  return (
    <nav ref={navRef} className={`navbar navbar-b navbar-expand-md fixed-top ${isReduced ? 'navbar-reduce' : 'navbar-trans'}`} id={"mainNav"}>

      <div className={"container"}>
        <a className={"navbar-brand js-scroll"} href='#page-top'>
          <SiNextdotjs size={35} style={{ marginRight: 7 }}  />
          JSH's Portfolio
        </a>
        <button
          className='navbar-toggler collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#navbarDefault'
          aria-controls='navbarDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={"navbar-collapse collapse justify-content-end"} id={"navbarDefault"}>
          <ul className={"navbar-nav"}>

            {Object.entries(navItems).map(([href, { name }]) => (
        <li key={href} className={"nav-item"}>
          <a href={href} className='nav-link js-scroll' onClick={() => handleClick(href)}>
            {name}
          </a>
        </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
