"use client";

import Container from "@/components/ui/Container/Container";
import { Divider, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../../../src/assets/images/logo4.png";
import "./NavBar.css";
import Link from "next/link";
import { useGetHeaderDataQuery } from "@/redux/api/baseApi";
const NavBar = () => {
  const { data, error, isLoading } = useGetHeaderDataQuery("headerData");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <header className="h-auto lg:h-28 py-2 shadow-lg bg-[#1EAAF1] text-white">
        <Container>
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
            <Link href="/">
              <div className="logo">
                <Image
                  src={data?.data.logo_url}
                  alt="logo"
                  width={96} // Set width as needed
                  height={96} // Set height as needed
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-fit"
                />
              </div>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#ff]">
                {data?.data.school_name_in_bangla}
              </h1>
              <Divider
                sx={{ margin: "5px 0", color: "#fff", background: "white" }}
              />
              <h1 className="md:text-xl font-semibold text-[#ff]">
                {data?.data.school_name_in_english}
              </h1>
            </div>
            <div className="text-center">
              <h2 className="md:text-xl">
                EIIN Number: {data?.data.eiin_number}
              </h2>
              <h2 className="md:text-xl">
                কারিগরি কোডঃ {data?.data.technical_code}
              </h2>
              <p>Established: {data?.data.established}</p>
            </div>
          </div>
        </Container>
      </header>
      {/* <Container>
        <nav className="md:block hidden">
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
      </Container> */}
    </>
  );
};

export default NavBar;
