import Image from "next/image";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import historyImg from "../../../../public/assests/historyImg.jpg";
import student from "../../../../public/assests/student.jpg";
import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import { Divider } from "antd";

const events = [
  {
    Name: "Science Contest",
    // description: "Te nulla oportere reprimique his dolorum",
    img: student,
  }, {
    Name: "Olompiad",
    // description: "Te nulla oportere reprimique his dolorum",
    img: scienceimg,
  }, {
    Name: "School Fest",
    // description: "Te nulla oportere reprimique his dolorum",
    img: historyImg,
  }, {
    Name: "Quiz Text",
    // description: "Te nulla oportere reprimique his dolorum",
    img: student,
  }, {
    Name: "Sports",
    // description: "Te nulla oportere reprimique his dolorum",
    img: scienceimg,
  }, {
    Name: "School Tour",
    // description: "Te nulla oportere reprimique his dolorum",
    img: historyImg,
  },

]
const ataglance = () => {



  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  At a Glance
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              <div className="lg:w-auto border rounded p-4 bg-white">
                <section className="text-gray-800 pt-2">
                  <div className="container p-3 mx-auto space-y-4 ">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                      {events.map(items=>(
                        <div key={items.Name}>
                      <article className="flex flex-col  bg-gray-100 rounded-lg">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                          <Image src={items.img} className="object-cover w-full h-52 rounded-t" alt="" />
                        </a>
                        <div className="flex flex-col flex-1 p-2 gap-1"> 
                          <h3 className="text-2xl font-base">{items.Name}</h3>
                          {/* <h2 className="text-sm text-gray-400">{items.description}</h2> */}
                        </div>
                      </article>
                      </div>
                      ))}
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

export default ataglance;
