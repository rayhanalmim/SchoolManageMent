import PrincipleSidebar from "@/components/shared/Corner/PrincipleSidebar/PrincipleSidebar";
 
import Image from "next/image";
import email from "../../../../../../public/assests/teacher/email.png";
import contact from "../../../../../../public/assests/teacher/contact-book.png";
import worktime from "../../../../../../public/assests/teacher/working-time.png";

const principle = () => {

  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <PrincipleSidebar />
          </div>
          <div className="grid w-full px-2 md:px-0 lg:px-0 pb-2 md:pb-0 lg:pb-0">
            <div className="lg:w-auto lg:mt-2">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Contact with Principle 
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white">
                <section className="p-0 lg:p-2 text-gray-800">
                  <div className="container mx-auto lg:space-y-5">
                    <div>
                      <div className="lg:w-auto lg:mx-auto lg:my-5">
                        <div className="lg:flex lg:gap-5 justify-between lg:px-8 items-center content-center text-center mb-5 lg:mb-0 space-y-4 lg:space-y-0">
                          {/* first */}
                          <div className="lg:px-2 py-4 md:py-6 lg:pt-7 space-y-2 lg:space-y-2">
                            <div className="flex content-center items-center justify-center text-center">
                              <Image src={contact} className="h-10 w-10" alt="" />
                            </div>
                            <h1 className="w-full text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                              Phone Number
                            </h1>
                            <div className="space-y-4">
                              <p className="flex justify-center items-center text-gray-500">
                                <span>+88012345678910</span>
                              </p>
                            </div>
                          </div>
                          <div className="w-auto border-t md:border-l lg:border-l mx-2 lg:h-32 bg-gray-500"></div>

                          {/* second */}
                          <div className="lg:px-2 py-4 lg:pt-7 space-y-2 lg:space-y-2">
                            <div className="flex content-center items-center justify-center text-center">
                              <Image src={email} className="h-10 w-10" alt="" />
                            </div>
                            <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                              E-Mail
                            </h1>
                            <div className="space-y-4">
                              <p className="flex justify-center items-center text-gray-500">
                                <span>softedu@softedu.com</span>
                              </p>
                            </div>
                          </div>
                          <div className="w-auto border-t md:border-l lg:border-l mx-2 lg:h-32 bg-gray-500"></div>

                          {/* third */}
                          <div className="lg:px-2 py-4 lg:pt-7 space-y-2 lg:space-y-2">
                            <div className="flex content-center items-center justify-center text-center">
                              <Image src={worktime} className="h-10 w-10" alt="" />
                            </div>
                            <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                              Working Time
                            </h1>
                            <div className="space-y-4 ">
                              <p className="flex justify-center items-center text-gray-500">
                                <span>Satarday - Thursday: 10am - 6pm</span>
                              </p>
                            </div>
                          </div>
                        </div>
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

export default principle;