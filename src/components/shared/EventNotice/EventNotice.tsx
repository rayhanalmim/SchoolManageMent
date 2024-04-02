import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const notices = [
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "05-04-2023",
  },
  
];

const EventNotice = () => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="flex flex-wrap justify-between ">
        {/* news and events */}
        <div className="w-full md:w-1/2 lg:w-[45%] bg-white rounded shadow-md p-4 border">
          <h2 className="text-xl font-semibold mb-2 text-center">News & Events</h2>
          <Divider />

          <div className=" bg-base-100">
            <figure>
              <Image src={scienceimg} className="h-44 w-96" alt="" />
            </figure>

            <div className="mt-3 space-y-1">
              <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500">
                <ClockIcon />
                <h1>June 14, 2024</h1>
              </div>
              <h2 className="font-bold text-2xl">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-gray-300 p-2 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <Divider />

          <div className=" bg-base-100">
            <figure>
              <Image src={scienceimg} className="h-44 w-96" alt="" />
            </figure>

            <div className="mt-3 space-y-1">
              <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500">
                <ClockIcon />
                <h1>June 14, 2024</h1>
              </div>
              <h2 className="font-bold text-2xl">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-gray-300 p-2 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <Divider>
            <button className="btn btn-primary border p-2 rounded">
              Load More
            </button>
          </Divider>
        </div>
        {/* notice board */}
        <div className="w-full md:w-1/2 lg:w-[45%] bg-white rounded shadow-md p-4 border">
        <h2 className="text-xl font-semibold mb-2 text-center">Notice Board</h2>
          <Divider />
          {notices.map((item, index) => (
            <div key={index} >
              <Link href="#">
                <p className="text-gray-700">{item.text}</p>
              </Link>
              <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500 mt-[2px]">
                <ClockIcon />
                <h1>June 14, 2024</h1>
              </div>
              <Divider />
            </div>
          ))}
         <button className="btn bg-gray-200 w-full rounded p-2">View All Notices</button>
        </div>
      </div>
      
    </div>
  );
};

export default EventNotice;
