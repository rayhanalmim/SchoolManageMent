import Image from "next/image";
import atAGlance1 from "../../../../../public/assests/doctorsCare/ataglance/class.jpg";
import atAGlance2 from "../../../../../public/assests/doctorsCare/ataglance/2ndterm.jpg";
import atAGlance3 from "../../../../../public/assests/doctorsCare/ataglance/exam.jpg";
import atAGlance4 from "../../../../../public/assests/doctorsCare/ataglance/price.jpg";
import atAGlance5 from "../../../../../public/assests/doctorsCare/ataglance/price2.jpg";
import atAGlance6 from "../../../../../public/assests/doctorsCare/ataglance/result.jpg";
// import scienceimg from "../../../../../public/assests/scienceclub.jpg";
// import historyImg from "../../../../../public/assests/historyImg.jpg";
// import student from "../../../../../public/assests/student.jpg";
import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import Link from "next/link";
 

const events = [
  {
    Name: "Class",
    // description: "Te nulla oportere reprimique his dolorum",
    // img: student,
    img: atAGlance1,
  }, {
    Name: "2nd Terms Exam",
    // description: "Te nulla oportere reprimique his dolorum",
    img: atAGlance2,
  }, {
    Name: "Final Exam",
    // description: "Te nulla oportere reprimique his dolorum",
    img: atAGlance3,
  }, {
    Name: "Prize",
    // description: "Te nulla oportere reprimique his dolorum",
    img: atAGlance4,
  }, {
    Name: "Best Result",
    // description: "Te nulla oportere reprimique his dolorum",
    img: atAGlance5,
  }, {
    Name: "Annual Exam Result",
    // description: "Te nulla oportere reprimique his dolorum",
    img: atAGlance6,
  },

]
const ataglance = () => {



  return (
    <>
      <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
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
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white">
                <section className="text-gray-800 pt-2">
                  <div className="container p-3 mx-auto space-y-4 ">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                      {events.map(items=>(
                        <div key={items.Name}>
                      <article className="flex flex-col  bg-gray-100 rounded-lg">
                        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                          <Image src={items.img} className="object-cover w-full h-52 rounded-t" alt="" />
                        </Link>
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
