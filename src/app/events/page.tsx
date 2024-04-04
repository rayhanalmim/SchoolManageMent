import { ClockIcon } from "@heroicons/react/24/outline";
import { Divider } from "antd";
import Image from "next/image";
import scienceimg from "../../../public/assests/scienceclub.jpg";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

const eventsInfo = [
  {
    id: 1,
    date: "12-12-2024",
    title: "New movie is released!",
    description: "Click the button to watch on Jetflix app.",
  },
  {
    id: 2,
    date: "12-12-2024",
    title: "New movie is released!",
    description: "Click the button to watch on Jetflix app.",
  },
  {
    id: 3,
    date: "12-12-2024",
    title: "New movie is released!",
    description: "Click the button to watch on Jetflix app.",
  },
  {
    id: 4,
    date: "12-12-2024",
    title: "New movie is released!",
    description: "Click the button to watch on Jetflix app.",
  },
];
const events = () => {
  return (
    <div>
        <Header/>
      <div className="lg:px-10 lg:py-4 lg:mb-10">
      <div className="w-64 mx-auto py-10">
          <h3 className="text-xl font-semibold border-y-4 text-center py-3">
            Events
          </h3>
        </div>
        {/* <h2 className="text-xl font-semibold mb-2 text-center">Events</h2> */}
        <Divider />
        <div className=" bg-base-100 grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
          {eventsInfo.map((item) => (
            <div key={item.id} className="">
              <figure>
                <Image src={scienceimg} className="h-44 w-80" alt="" />
              </figure>
              <div className="mt-3 space-y-1">
                <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500">
                  <ClockIcon />
                  <h1>{item.date}</h1>
                </div>
                <h2 className="font-bold lg:text-2xl">
                  {item.title}
                </h2>
                <p className="text-sm lg:text-base">
                  {item.description}
                </p>
                <div className="">
                  <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default events;
