import PrincipleSidebar from "@/components/shared/Corner/PrincipleSidebar/PrincipleSidebar";
 
import Image from "next/image";
import award from "../../../../../../public/assests/teacher/achievement3.jpg";
import award1 from "../../../../../../public/assests/teacher/achievement1.jpeg";
import award2 from "../../../../../../public/assests/teacher/achievement2.jpg";

const principleAchievement = () => {

  return (
    <>
      <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <PrincipleSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Principle Achievement
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <section className="p-0 lg:p-2  text-gray-800 ">
                  <div className="container mx-auto space-y-8">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row gap-2">

                      <Image src={award} className="lg:w-[450px] lg:h-[300px] bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                      <span className="text-xs   text-gray-600">5 May 2023</span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">We&apos;not reinventing the wheel</h3>
                        <p className="my-6 text-sm md:text-base lg:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse gap-2">
                      <Image src={award1} className="lg:w-[450px] lg:h-[300px] bg-gray-500 aspect-video rounded-r" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                      <span className="text-xs   text-gray-600">5 May 2023</span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">We&apos;not reinventing the wheel</h3>
                        <p className="my-6 text-sm md:text-base lg:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row gap-2">
                      <Image src={award2} className="lg:w-[450px] lg:h-[300px] bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <span className="text-xs   text-gray-600">5 May 2023</span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">We&apos;not reinventing the wheel</h3>
                        <p className="my-6 text-sm md:text-base lg:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
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

export default principleAchievement;