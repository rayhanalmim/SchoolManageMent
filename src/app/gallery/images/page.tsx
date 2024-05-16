import GallerySidebar from "@/components/shared/GallerySidebar/GallerySidebar";
import Image from "next/image";
import common_room from "../../../../public/assests/facilities/common_room.jpg";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import historyImg from "../../../../public/assests/historyImg.jpg";
import student from "../../../../public/assests/student.jpg";
import annual from "../../../../public/assests/img/annual.jpg";
import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import { Divider } from "antd";
import Link from "next/link";

const img = [
  {
    id:1,
    Name: "বার্ষিক বনভোজন - ২০২৩",
    description: "Te nulla oportere reprimique his dolorum",
    img: annual,
  }, 
  {
    id:2,
    Name: "শিক্ষা সফর - ২০২৩",
    description: "Te nulla oportere reprimique his dolorum",
    img: scienceimg,
  }, 
  {
    id:3,
    Name: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান - ২০২২",
    description: "Te nulla oportere reprimique his dolorum",
    img: historyImg,
  }, 
  {
    id:4,
    Name: "জাতীয় বিজ্ঞান অলম্পিয়াড - ২০২২",
    description: "Te nulla oportere reprimique his dolorum",
    img: student,
  }, 
  {
    id:5,
    Name: "বার্ষিক পরিক্ষার ফলাফল - ২০২২",
    description: "Te nulla oportere reprimique his dolorum",
    img: scienceimg,
  }, 
  {
    id:6,
    Name: "শিক্ষা সফর - ২০২২",
    description: "Te nulla oportere reprimique his dolorum",
    img: historyImg,
  },

]

const images = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 lg:pr-5 px-5 md:px-0 lg:px-0">
            <GallerySidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Images
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">


              <div className="container p-3 mx-auto space-y-4 ">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                      {img.map(items=>(
                        <div key={items.id}>
                      <Link href={`/gallery/images/${items.id}`} className="flex flex-col  bg-gray-50 border rounded">
                        <div >
                          <Image src={items.img} className="object-cover w-full h-52 rounded" alt="" />
                        </div>
                        <div className="flex flex-col flex-1 p-4 gap-1"> 
                          <h3 className="text-xl font-semibold">{items.Name}</h3>
                          <h2 className="text-sm text-gray-400">{items.description}</h2>
                        </div>
                      </Link>
                      </div>
                      ))}
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default images;
