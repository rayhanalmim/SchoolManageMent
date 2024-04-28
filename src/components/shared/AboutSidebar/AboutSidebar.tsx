"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle = "text-black bg-green-500 w-full lg:p-2 ";
const nonActiveStyle = "text-black";
const AboutSidebar = () => {
  const currentRoute = usePathname();
  return (
    <div className="">
      <div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
        <h3 className="text-lg font-semibold  lg:pl-3 lg:py-2">About Us</h3>
      </div>
      <div className="p-2 w-64 lg:flex justify-center lg:py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded items-center content-center">
        <Link
          href={"/about/history"}
          className={`${currentRoute === "/about/history" ? activeStyle : nonActiveStyle
            } px-2`}
        >
          History
        </Link>
        <div className="border  w-full"></div>
        <Link
          href={"/about/ataglance"}
          className={`${currentRoute === "/about/ataglance" ? activeStyle : nonActiveStyle
            } px-2`}
        >
          At a Glance
        </Link>
        <div className="border w-full"></div>
        <Link
          href={"/about/achievement"}
          className={`${currentRoute === "/about/achievement" ? activeStyle : nonActiveStyle
            } px-2`}
        >
          Achievement
        </Link>
        <div className="border  w-full"></div>
        <Link
          href={"/about/whystudyHere"}
          className={`${currentRoute === "/about/whystudyHere"
              ? activeStyle
              : nonActiveStyle
            } px-2`}
        >
          Why Study Here
        </Link>
        <div className="border  w-full"></div>

        <Link
          href={"/about/events"}
          className={`${currentRoute === "/about/events" ? activeStyle : nonActiveStyle
            } px-2`}
        >
          Events
        </Link>
      </div>
    </div>
  );
};

export default AboutSidebar;
