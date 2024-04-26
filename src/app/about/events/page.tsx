import { ClockIcon } from "@heroicons/react/24/outline";
import { Divider } from "antd";
import Image from "next/image";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import student from "../../../../public/assests/student.jpg";
import s3 from "../../../../public/assests/s3.jpg";
import result from "../../../../public/assests/result.jpg";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";

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
      <Header />
      <section className=" bg-gray-100  lg:py-20 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-5 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto mt-2  ">
              <div className="w-64 pt-4">
                <h3 className="text-2xl font-semibold ">
                  Events
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              
              <section className=" border  rounded text-gray-800 lg:w-auto p-4 bg-white">
                <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12">
                  <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-gray-50">

                    <Image src={scienceimg} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  bg-gray-500" alt="" />
                    <div className=" space-y-2 lg:col-span-5">
                      <h3 className="font-bold text-md md:text-xl lg:text-2xl group-hover:underline group-focus:underline lg:pt-5">Noster tincidunt reprimique ad pro</h3>
                      <span className="text-xs  text-gray-600">February 19, 2021</span>
                      <p className="text-sm text-gray-400 lg:pr-2 text-justify">Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                      <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                        Read More
                      </button>
                    </div>
                    <div className="">

                    </div>
                  </a>

                  <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50">

                      <Image src={student} className="object-cover w-full rounded h-44  bg-gray-500" alt="" />
                      <div className=" p-3 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <span className="text-xs  text-gray-600">January 26, 2021</span>
                        <p className="text-sm text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                          Read More
                        </button>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50">
                      <Image src={result} className="object-cover w-full rounded h-44  bg-gray-500" alt="" />
                      <div className=" p-3 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <span className="text-xs  text-gray-600">January 26, 2021</span>
                        <p className="text-sm text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                          Read More
                        </button>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50">
                      <Image src={student} className="object-cover w-full rounded h-44  bg-gray-500" alt="" />
                      <div className=" p-3 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <span className="text-xs  text-gray-600">January 26, 2021</span>
                        <p className="text-sm text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                          Read More
                        </button>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50 hidden sm:block">
                      <Image src={result} className="object-cover w-full rounded h-44  bg-gray-500" alt="" />
                      <div className=" p-3 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <span className="text-xs  text-gray-600">January 26, 2021</span>
                        <p className="text-sm text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                          Read More
                        </button>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50 hidden sm:block">
                      <Image src={student} className="object-cover w-full rounded h-44  bg-gray-500" alt="" />
                      <div className=" p-3 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <span className="text-xs  text-gray-600">January 26, 2021</span>
                        <p className="text-sm text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                          Read More
                        </button>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50 hidden sm:block">
                      <Image src={s3} className="object-cover w-full rounded h-44  bg-gray-500" alt="" />
                      <div className=" p-3 space-y-2">
                        <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <span className="text-xs  text-gray-600">January 26, 2021</span>
                        <p className="text-sm text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 p-2 rounded text-black">
                          Read More
                        </button>
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline  bg-gray-50  text-gray-600">Load more...</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default events;
