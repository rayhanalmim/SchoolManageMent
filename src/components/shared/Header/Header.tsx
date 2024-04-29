"use client";

import {ChevronDownIcon} from "@heroicons/react/20/solid";
import "./Header.css"
import { FaArrowRightLong } from "react-icons/fa6";

// const aboutUs = [
//   {
//     name: "History",
//     href: "/about/history",

//   },
//   {
//     name: "At a Galance",
//     href: "/about/ataglance",

//   },

//   {
//     name: "Achievement",
//     href: "/about/achievement",

//   },
//   {
//     name: "Why Study at DCMS",
//     href: "/about/whystudyHere",

//   },
//   {
//     name: "Events",
//     href: "/about/events",

//   },
// ];
// const administrations = [
//   {
//     name: "Governing Body",
//     href: "/administration/governingBody",
//   },
//   {
//     name: "Message",
//     href: "/administration/message",
//   },
//   {
//     name: "Administrative Body",
//     href: "/administration/administrativeBody",
//   },
//   {
//     name: "Teaching Staff",
//     href: "/administration/teachingStaff",
//   },
//   {
//     name: "Office Staff",
//     href: "/administration/officeStaff",
//   },
//   {
//     name: "Supporting Staff",
//     href: "/administration/supportingStaff",
//   },
// ];
// const results = [
//   {
//     name: "School Result",
//     href: "/result/schoolResult",
//   },
//   {
//     name: "College Result",
//     href: "/result/collegeResult",
//   },
//   {
//     name: "English Version",
//     href: "/result/englishVersionResult",

//   },
// ];

// const admissions = [
//   {
//     name: "School",
//     href: "/admission/schoolAdmission",
//   },
//   {
//     name: "College",
//     href: "/admission/collegeAdmission",
//   },
//   {
//     name: "English Version",
//     href: "/admission/englishAdmission",
//   },
// ];
// const facilities = [
//   {
//     name: "Science Lab",
//     href: "/facilities/scienceLab",
//   },
//   {
//     name: "ICT Lab",
//     href: "/facilities/ictLab",
//   },
//   {
//     name: "Library",
//     href: "/facilities/library",
//   },
//   {
//     name: "Multi-Media Class Room",
//     href: "/facilities/multiMediaClass",
//   },
//   {
//     name: "S-Net",
//     href: "/facilities/sNet",
//   },
//   {
//     name: "QIP SMS Sevice",
//     href: "/facilities/qipSMS",
//   },
//   {
//     name: "Sapcious Auditorium ",
//     href: "/facilities/sapciousAuditorium",
//   },
//   {
//     name: "Common Room",
//     href: "/facilities/commonRoom",
//   },
//   {
//     name: "Prayer Room",
//     href: "/facilities/prayerRoom",
//   },
//   {
//     name: "DHCS Ride Service",
//     href: "/facilities/rideService",
//   },
//   {
//     name: "Other Facilities",
//     href: "/facilities/otherFacilities",
//   },
// ];
// const clubs = [
//   {
//     name: "Scout Group",
//     href: "/club/scout",
//   },
//   {
//     name: "Art & Culture Club",
//     href: "/club/artNculture",
//   },
//   {
//     name: "Science Club",
//     href: "/club/science",
//   },
//   {
//     name: "Debate Club",
//     href: "/club/debate",
//   },
//   {
//     name: "Computer Club",
//     href: "/club/computer",
//   },
//   {
//     name: "English Language Club",
//     href: "/club/englishLanguage",
//   },
//   {
//     name: "Nutrition Club",
//     href: "/club/nutrition",
//   },
//   {
//     name: "Swadesh O Bissobabna Club",
//     href: "/club/swadeshObissobabna",
//   },
//   {
//     name: "Photography Club",
//     href: "/club/photography",
//   },
//   {
//     name: "Sports Club",
//     href: "/club/sports",
//   },
//   {
//     name: "Girl's Guid",
//     href: "/club/girlsGuid",
//   },
//   {
//     name: "Peach Growing Education (HWPL)",
//     href: "/club/peachGrowingE",
//   },
// ];
// const gallerys = [
//   {
//     name: "Gallary Images",
//     href: "/gallery/images",
//   },
//   {
//     name: "Videos",
//     href: "/gallery/videos",
//   },
// ];
// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

const Header = () => {


  return (
    <div className="bg-white h-20 lg:z-10  shadow-md pb-1  lg:w-full lg:fixed ">
      <div className="w-[1260px] h-20 mx-auto items-center justify-between lg:flex ">
        <h2 className="text-2xl font-bold">SoftyEdu</h2>
        <div className="">
          <ul className="justify-between">
            <li>
              <a href="/" className="mr-3">Home</a>
            </li>
            {/* About Us */}
            <li className="">
              <a href="#" className="flex gap-1 items-center mr-3" >About Us <ChevronDownIcon className="h-5 w-5"/></a>
              <ul className="submenu rounded ">
                <li><a href="/about/history">History</a></li>
                <li><a href="/about/ataglance">At a Glance</a></li>
                <li><a href="/about/achievement">Achievement</a></li>
                <li><a href="/about/whystudyHere">Why Study at DCMS</a></li>
                <li><a href="/about/events">Events</a></li>
              </ul>
            </li>
            {/* Administration */}
            <li>
            <a href="#" className="flex gap-1 items-center mr-3" >Administration<ChevronDownIcon className="h-5 w-5"/></a>              
              <ul className="submenu rounded w-full">
                <li><a href="/administration/governingBody">Governing Body</a></li>
                <li><a href="/administration/message">Message</a></li>
                <li><a href="/administration/administrativeBody">Administrative Body</a></li>
                <li><a href="/administration/teachingStaff">Teaching Staff</a></li>
                <li><a href="/administration/officeStaff">Office Staff</a></li>
                <li><a href="/administration/supportingStaff">Supporting Staff</a></li>
              </ul>
            </li>
            {/* Result */}
            <li>
              <a href="#" className="flex gap-1 items-center mr-3" >Results<ChevronDownIcon className="h-5 w-5"/></a>
              <ul className="submenu rounded w-full">
                <li><a href="/result/schoolResult">School Result</a></li>
                <li><a href="/result/collegeResult">College Result</a></li>
                <li><a href="/result/englishVersionResult">English Version</a></li>
              </ul>
            </li>
            {/* Admission */}
            <li>
              <a href="#" className="flex gap-1 items-center mr-3">Admissions<ChevronDownIcon className="h-5 w-5"/></a>
              <ul className="submenu rounded w-full">
                <li><a href="/admission/schoolAdmission">School</a></li>
                <li><a href="/admission/collegeAdmission">College</a></li>
                <li><a href="/admission/englishAdmission">English Version</a></li>
              </ul>
            </li>
            {/* Facilities */} 
            <li className="">
            <a href="#" className="flex gap-1 items-center mr-3">Facilities<ChevronDownIcon className="h-5 w-5"/></a>             
              <ul className="submenu rounded w-[150px]">
                <li><a href="/facilities/scienceLab">Science Lab</a></li>
                <li><a href="/facilities/ictLab">ICT Lab</a></li>
                <li><a href="/facilities/library">Library</a></li>
                <li><a href="/facilities/multiMediaClass">Multi-Media Class Room</a></li>
                <li><a href="/facilities/sNet">S-Net</a></li>
                <li><a href="/facilities/qipSMS">QIP SMS Sevice</a></li>
                <li><a href="/facilities/sapciousAuditorium">Sapcious Auditorium</a></li>
                <li><a href="/facilities/commonRoom">Common Room</a></li>
                <li><a href="/facilities/prayerRoom">Prayer Room</a></li>
                <li><a href="/facilities/rideService">DHCS Ride Service</a></li>
                <li><a href="/facilities/otherFacilities">Other Facilities</a></li>
              </ul>
            </li>
            {/* Club */}
            <li>
            <a href="#" className="flex gap-1 items-center mr-3">Clubs<ChevronDownIcon className="h-5 w-5"/></a> 
              <ul className="submenu rounded w-full">
                <li><a href="/club/scout">Scout Group</a></li>
                <li><a href="/club/artNculture">Art & Culture Club</a></li>
                <li><a href="/club/science">Science Club</a></li>
                <li><a href="/club/debate">Debate Club</a></li>
                <li><a href="/club/computer">Computer Club</a></li>
                <li><a href="/club/englishLanguage">English Language Club</a></li>
                <li><a href="/club/nutrition">Nutrition Club</a></li>
                <li><a href="/club/swadeshObissobabna">Swadesh O Bissobabna Club</a></li>
                <li><a href="/club/photography">Photography Club</a></li>
                <li><a href="/club/sports">Sports Club</a></li>
                <li><a href="/club/girlsGuid">Girl&apos;s Guid</a></li>
                <li><a href="/club/peachGrowingE">Peach Growing Education (HWPL)</a></li>
              </ul>
            </li>
            {/* Gallery */}
            <li>
            <a href="#" className="flex gap-1 items-center mr-3">Gallery<ChevronDownIcon className="h-5 w-5"/></a> 
              <ul className="submenu rounded w-full">
                <li><a href="/gallery/images">Images</a></li>
                <li><a href="/gallery/videos">Videos</a></li>
              </ul>
            </li>
            <li>
            <a href="/contact" className="flex gap-1 items-center mr-3">Contact</a>              
            </li>
            <li>
              <a href="/notice" className="flex gap-1 items-center mr-3">Notice</a>
            </li>
          </ul >
        </div>
        <h2 className="flex gap-2 items-center">Log In <FaArrowRightLong /></h2>
      </div >
    </div >   
  );
};

export default Header;
