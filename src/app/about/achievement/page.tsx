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
      <Header />
      <section className=" bg-gray-100  py-20 text-gray-800">
        <div className="w-[1260px] mx-auto flex gap-1   mt-9">
          <div className="py-5 pr-5 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto mt-2  ">
              <div className="w-64 pt-4">
                <h3 className="text-2xl font-semibold ">
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
      <Footer />
    </>

  );
};

export default achievement;
