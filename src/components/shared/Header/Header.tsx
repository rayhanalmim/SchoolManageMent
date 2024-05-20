"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import "./Header.css";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";



const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  const navMenu = (

      <ul className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-0 lg:gap-0 items-center content-center">
        <li>
          <Link href={"/"} className="mr-3">Home</Link>
        </li>
        {/* About Us */}
        <li className="">
          <Link href="#" className="flex gap-1 items-center mr-3" >About Us <ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded ">
            <li> <Link href="/about/history">History </Link></li>
            <li> <Link href="/about/ataglance">At a Glance </Link></li>
            <li> <Link href="/about/achievement">Achievement </Link></li>
            <li> <Link href="/about/whystudyHere">Why Study at DCMS </Link></li>
            <li> <Link href="/about/events">Events </Link></li>
          </ul>
        </li>
        {/* Administration */}
        <li>
          <Link href="#" className="flex gap-1 items-center mr-3" >Administration<ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded w-full">
            <li> <Link href="/administration/governingBody">Governing Body </Link></li>
            <li> <Link href="/administration/message">Message </Link></li>
            <li> <Link href="/administration/administrativeBody">Administrative Body </Link></li>
            <li> <Link href="/administration/teachingStaff">Teaching Staff </Link></li>
            <li> <Link href="/administration/officeStaff">Office Staff </Link></li>
            <li> <Link href="/administration/supportingStaff">Supporting Staff </Link></li>
          </ul>
        </li>
        {/* Result */}
        <li>
          <Link href="#" className="flex gap-1 items-center mr-3" >Results<ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded w-full">
            <li> <Link href="/result/schoolResult">School Result </Link></li>
            <li> <Link href="/result/collegeResult">College Result </Link></li>
            <li> <Link href="/result/englishVersionResult">English Version </Link></li>
          </ul>
        </li>
        {/* Admission */}
        <li>
          <Link href="#" className="flex gap-1 items-center mr-3">Admissions<ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded w-full">
            <li> <Link href="/admission/admissionInfo">Admission Info</Link></li>
            <li> <Link href="/admission/schoolAdmission">School Admission Form</Link></li>
            <li> <Link href="/admission/collegeAdmission">College Admission Form</Link></li>
            <li> <Link href="/admission/englishAdmission">English Version Admissions Form</Link></li>
          </ul>
        </li>
        {/* Facilities */}
        <li className="">
          <Link href="#" className="flex gap-1 items-center mr-3">Facilities<ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded w-[150px]">
            <li> <Link href="/facilities/scienceLab">Science Lab </Link></li>
            <li> <Link href="/facilities/ictLab">ICT Lab </Link></li>
            <li> <Link href="/facilities/library">Library </Link></li>
            <li> <Link href="/facilities/multiMediaClass">Multi-Media Class Room </Link></li>
            <li> <Link href="/facilities/sNet">S-Net </Link></li>
            <li> <Link href="/facilities/qipSMS">QIP SMS Sevice </Link></li>
            <li> <Link href="/facilities/sapciousAuditorium">Sapcious Auditorium </Link></li>
            <li> <Link href="/facilities/commonRoom">Common Room </Link></li>
            <li> <Link href="/facilities/prayerRoom">Prayer Room </Link></li>
            <li> <Link href="/facilities/rideService">DHCS Ride Service </Link></li>
            <li> <Link href="/facilities/otherFacilities">Other Facilities </Link></li>
          </ul>
        </li>
        {/* Club */}
        <li>
          <Link href="#" className="flex gap-1 items-center mr-3">Clubs<ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded w-full">
            <li> <Link href="/club/scout">Scout Group </Link></li>
            <li> <Link href="/club/artNculture">Art & Culture Club </Link></li>
            <li> <Link href="/club/science">Science Club </Link></li>
            <li> <Link href="/club/debate">Debate Club </Link></li>
            <li> <Link href="/club/computer">Computer Club </Link></li>
            <li> <Link href="/club/englishLanguage">English Language Club </Link></li>
            <li> <Link href="/club/nutrition">Nutrition Club </Link></li>
            <li> <Link href="/club/swadeshObissobabna">Swadesh O Bissobabna Club </Link></li>
            <li> <Link href="/club/photography">Photography Club </Link></li>
            <li> <Link href="/club/sports">Sports Club </Link></li>
            <li> <Link href="/club/girlsGuid">Girl&apos;s Guid </Link></li>
            <li> <Link href="/club/peachGrowingE">Peach Growing Education (HWPL) </Link></li>
          </ul>
        </li>
        {/* Gallery */}
        <li>
          <Link href="#" className="flex gap-1 items-center mr-3">Gallery<ChevronDownIcon className="h-5 w-5" /> </Link>
          <ul className="submenu rounded w-full">
            <li> <Link href="/gallery/images">Images </Link></li>
            <li> <Link href="/gallery/videos">Videos </Link></li>
          </ul>
        </li>
        <li>
          <Link href="/contact" className="flex gap-1 items-center mr-3">Contact </Link>
        </li>
        <li>
          <Link href="/notice" className="flex gap-1 items-center mr-3">Notice </Link>
        </li>
      </ul>
 
  )


  return (
    <nav className="bg-white h-16 md:h-20 z-10 shadow-md pb-1 w-full fixed">
      <div className="lg:w-[1260px] lg:h-20 mx-auto items-center justify-between lg:flex ">
        <Link href="/">
          <h2 className="text-2xl font-bold -mt-14 lg:-mt-0">SoftyEdu</h2>
        </Link>
        <div className="lg:flex hidden" >
        
          {navMenu}

      
        </div>
        <Link href="/login">
          <h2 className="hidden lg:flex gap-2 items-center">Log In <FaArrowRightLong /></h2>
        </Link>

        <div className="lg:hidden flex justify-between px-2">
          <Link href="/">
            <h2 className="text-2xl font-bold">SoftyEdu</h2>
          </Link>
          <button className="p-2" onClick={toggleNavbar}>
            {isClick ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div >
      {isClick && (

        <nav className=" h-20 z-10 shadow-md pb-1 w-full fixed lg:hidden ">
          <div className="bg-white" >

         
            {navMenu}
            <div className="lg:hidden flex justify-center">
            <Link href="/login">
              <h2 className="flex gap-2 items-center">Log In <FaArrowRightLong /></h2>
            </Link>
            </div>
          </div>
        </nav>
      )
      }
    </nav>
  );
};

export default Header;
