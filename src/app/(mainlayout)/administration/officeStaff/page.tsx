import AdministrationSidebar from "@/components/shared/Administration/AdministrationSidebar/AdministrationSidebar";
import teacher from "../../../../../public/assests/20112319132256.jpg"
 
import Image from "next/image";
import officeStaff1 from "../../../../../public/assests/administration/officeStaff/8.jpeg";
import officeStaff2 from "../../../../../public/assests/administration/officeStaff/9.jpeg";
import officeStaff3 from "../../../../../public/assests/administration/officeStaff/10.jpeg";
import officeStaff4 from "../../../../../public/assests/administration/officeStaff/11.jpeg";
import officeStaff5 from "../../../../../public/assests/administration/officeStaff/12.jpeg";
import officeStaff6 from "../../../../../public/assests/administration/officeStaff/23.png";
import officeStaff7 from "../../../../../public/assests/administration/officeStaff/24.jpeg";
import officeStaff8 from "../../../../../public/assests/administration/officeStaff/27.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const staffs = [
  {
    Name: "জনাব মাহমুদুর রহমান",
    Subject: "প্রধান হিসাবরক্ষক",
    img: officeStaff1,
  }, 
  {
    Name: "জনাব মোস্তফা কামাল",
    Subject: "অফিস সহকারী",
    img: officeStaff2,
  }, 
  {
    Name: "জনাব হুমায়ুন কবির",
    Subject: "অফিস সহকারী",
    img: officeStaff3,
  }, 
  {
    Name: "জনাব মোজাম্মেল হক",
    Subject: "অফিস সহকারী",
    img: officeStaff4,
  }, 
  {
    Name: "জনাব মুজিবুর রহমান",
    Subject: "অফিস সহকারী",
    img: officeStaff5,
  },
  {
    Name: "জনাব আবদুল মান্নান",
    Subject: "কম্পিউটার অপারেটর",
    img: officeStaff6,
  },
  {
    Name: "জনাব মশিউর রহমান",
    Subject: "কম্পিউটার অপারেটর",
    img: officeStaff7,
  },
  {
    Name: "জনাব কামরুল হাসান",
    Subject: "ম্যান্টাইনেন্স অফিসার",
    img: officeStaff8,
  },
]

const officeStaff = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AdministrationSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Office Staff
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">

                <div className="container  mx-auto lg:space-y-16 p-2 lg:p-4">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-none lg:text-5xl text-center py-4 md:my-2 lg:py-0">অফিস সহকারী</h3>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full  gap-x-3 gap-y-3 md:gap-y-5 lg:gap-y-10 px-4 md:px-1 lg:px-0 my-5 md:my-0 lg:my-0">
                    {staffs.map(items => (
                      <div key={items.Name} className="border rounded w-full py-5 shadow-md">
                        <Image src={items.img} className="object-cover h-[230px] w-[300px] mx-auto mb-4 bg-center rounded px-3" alt="img" />
                        <div className="flex flex-col items-center">
                          <h4 className="text-xl font-semibold">{items.Name}</h4>
                          <p className="text-sm text-gray-600">{items.Subject}</p>
                          <div className="flex gap-1 mt-1 ">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="text-gray-600">
                              <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600 ">
                              <FaXTwitter className="w-4 h-4" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 ">
                              <FaLinkedinIn className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
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

export default officeStaff;
