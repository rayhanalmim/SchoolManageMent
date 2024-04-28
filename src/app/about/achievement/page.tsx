import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
import Link from "next/link";
import { Divider } from "antd";
import Image from "next/image";
import award from "../../../../public/assests/191010-0697-web.jpg";



const achievement = () => {
  return (
    <>

      <section className=" bg-gray-100  lg:py-20 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Achievement
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <section className="p-0 lg:p-2  text-gray-800 ">
                  <div className="container mx-auto space-y-8">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row gap-2">

                      <Image src={award} className="w-[450px]  bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <span className="text-xs uppercase  text-gray-600">Join, it&apos;s free</span>
                        <h3 className="text-3xl font-bold">We&apos;not reinventing the wheel</h3>
                        <p className="my-6  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse gap-2">
                      <Image src={award} className="w-[450px]  bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <span className="text-xs uppercase  text-gray-600">Join, it&apos;s free</span>
                        <h3 className="text-3xl font-bold">We&apos;not reinventing the wheel</h3>
                        <p className="my-6  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row gap-2">
                      <Image src={award} className="w-[450px]  bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <span className="text-xs uppercase  text-gray-600">Join, it&apos;s free</span>
                        <h3 className="text-3xl font-bold">We&apos;not reinventing the wheel</h3>
                        <p className="my-6  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                      </div>
                    </div>
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

export default achievement;
