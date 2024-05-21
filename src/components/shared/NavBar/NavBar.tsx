import Container from "@/components/ui/Container/Container";
import { Divider, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../../../src/assets/images/logo4.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <header className="h-28 py-2 overflow-hidden shadow-lg bg-[#1EAAF1] text-white ">
        <Container>
          <div className="flex items-center justify-between ">
            <div className="logo">
              <Image
                src={logo}
                alt="logo"
                className="w-24 h-24 rounded-full object-fit "
              />
            </div>
            <div className="text-center ">
              <h1 className="text-3xl font-semibold text-[#ff]">
              ডক্টরস কেয়ার মডেল স্কুল
              </h1>
              <Divider sx={{ margin: "5px 0" , color: '#fff', background: 'white' }} />
              <h1 className="text-xl font-semibold text-[#ff]">
              Doctors Care Model School
              </h1>
            </div>
            <div className="text-center ">
              <h2 className="text-xl">EIIN Number: 354566 </h2>
              <h2 className="text-xl">কারিগরি কোডঃ 6777</h2>
              {/* <p>School Code : 7654456</p> */}
              <p>Established : 1990</p>
            </div>
          </div>
        </Container>
      </header>
      <Container>
        <nav>
          <ul className="navList space-x-6  ">
            <li>Home</li>
            <li>Administration</li>
            <li>About</li>
            <li>Results</li>
            <li>Admission </li>
            <li>Facilities</li>
            <li>Club</li>
            <li>Gallery</li>
            <li>Notice</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default NavBar;
