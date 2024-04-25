import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Image from "next/image";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import historyImg from "../../../../public/assests/historyImg.jpg";
import student from "../../../../public/assests/student.jpg";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
import { Divider } from "antd";

const events = [
  {
    Name: "Science Contest",
    description: "Te nulla oportere reprimique his dolorum",
    img: student,
  }, {
    Name: "Leroy Jenkins",
    description: "Te nulla oportere reprimique his dolorum",
    img: scienceimg,
  }, {
    Name: "Leroy Jenkins",
    description: "Te nulla oportere reprimique his dolorum",
    img: historyImg,
  }, {
    Name: "Leroy Jenkins",
    description: "Te nulla oportere reprimique his dolorum",
    img: student,
  }, {
    Name: "Leroy Jenkins",
    description: "Te nulla oportere reprimique his dolorum",
    img: scienceimg,
  }, {
    Name: "Leroy Jenkins",
    description: "Te nulla oportere reprimique his dolorum",
    img: historyImg,
  },

]
const ataglance = () => {
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
                  At a Glance
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              <div className="lg:w-auto border rounded p-4 bg-white ">

                <section className="text-gray-800   pt-2">
                  <div className="container p-3 mx-auto space-y-4 ">
                    
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                      {events.map(items=>(
                        <div key={items.Name}>
                      <article className="flex flex-col  bg-gray-50 border rounded">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                          {/* <img alt="" className="object-cover w-full h-52  bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" /> */}

                          <Image src={items.img} className="object-cover w-full h-52 rounded" alt="" />
                        </a>
                        <div className="flex flex-col flex-1 p-4 gap-1">
                          
                          
                          <h3 className="text-2xl font-semibold">{items.Name}</h3>
                          <h2 className="text-sm text-gray-400">{items.description}</h2>
                          
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
      <Footer />
    </>

  );
};

export default ataglance;
