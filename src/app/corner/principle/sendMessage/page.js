import PrincipleSidebar from "@/components/shared/Corner/PrincipleSidebar/PrincipleSidebar";
import { Divider } from "antd";
import Image from "next/image";
import award from "../../../../../public/assests/191010-0697-web.jpg";

const principle = () => {

  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <PrincipleSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-full md:pt-4 lg:pt-4">
                <h3 className="w-full text-2xl font-semibold text-center md:text-left lg:text-left">
                  Send Feedback and Message to Principle
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <section className="p-0 lg:p-2  text-gray-800 ">
                  <div className="container mx-auto space-y-8">

                    <section className="text-gray-900">
                      <div className="border">
                        <div className="p-3 border-b-[1px] pl-6">
                          <h1 className=" text-xl">Feel Free to Send Any Feedback</h1>
                        </div>

                        <form noValidate="" className="p-6">
                          <div className="flex gap-2 w-full ">
                            <label className=" w-full">
                              <span className="mb-1 font-light text-gray-500">First Name*</span>
                              <input type="text" className="border w-full p-2" />
                            </label>
                            <label className="w-full ">
                              <span className="mb-1 font-light text-gray-500">Last Name*</span>
                              <input type="text" className="border p-2 w-full" />
                            </label>
                          </div>
                          <div className="my-5">
                          <label className="">
                            <span className="mb-1 font-light text-gray-500">Email*</span>
                            <input type="email" className="border p-2 w-full" />
                          </label>
                          </div>
                          <div className="my-5">
                          <label className="">
                            <span className="mb-1 font-light text-gray-500">Message*</span>
                            <textarea rows="3" className="border w-full p-2" />
                          </label>
                          </div>
                          <button type="button" className="self-center px-8 py-3 text-lg   hover:ring focus:ring-opacity-75  bg-[#2d76b2]  text-gray-50 ">Submit</button>
                        </form>
                      </div>
                    </section>

                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default principle;