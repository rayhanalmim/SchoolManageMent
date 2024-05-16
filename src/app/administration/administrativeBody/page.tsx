import AdministrationSidebar from "@/components/shared/Administration/AdministrationSidebar/AdministrationSidebar";
import administrative1 from "../../../../public/assests/administration/administrative/14.jpg";
import administrative2 from "../../../../public/assests/administration/administrative/18.png";
import administrative3 from "../../../../public/assests/administration/administrative/19.png";
import administrative4 from "../../../../public/assests/administration/administrative/2.jpeg";
import administrative5 from "../../../../public/assests/administration/administrative/25.png";
import administrative6 from "../../../../public/assests/administration/administrative/26.jpeg";
import administrative7 from "../../../../public/assests/administration/administrative/13.jpeg";
import Image from "next/image";
import { Divider } from "antd";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const administrative = [
  {
    Name: "Leroy Jenkins",
    Subject: "Bangla",
    img: administrative1,
  },
  {
    Name: "Leroy Jenkins",
    Subject: "English",
    img: administrative2,
  },
  {
    Name: "Leroy Jenkins",
    Subject: "Math",
    img: administrative3,
  },
  {
    Name: "Leroy Jenkins",
    Subject: "Physics",
    img: administrative4,
  },
  {
    Name: "Leroy Jenkins",
    Subject: "Chemistry",
    img: administrative5,
  },
  {
    Name: "Leroy Jenkins",
    Subject: "Biology",
    img: administrative6,
  },
];
const administrativeBody = () => {
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
                  Administrative Body
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">
                <div className="container p-4 mx-auto space-y-16 sm:p-10 ">
                  <div className="justify-center items-center content-center mx-auto max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <Image
                      src={administrative7}
                      className="object-cover h-auto mx-auto mb-4 bg-center rounded p-3"
                      alt="img"
                    />
                    <div className="flex flex-col items-center pb-3">
                      <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                      <p className="text-sm text-gray-600">Chairmen</p>

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
                  <div className="grid w-full grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {administrative.map((items) => (
                      <div
                        key={items.Name}
                        className="border rounded w-full py-5"
                      >
                        <Image
                          src={items.img}
                          className="object-cover h-auto mx-auto mb-4 bg-center rounded px-3"
                          alt="img"
                        />
                        <div className="flex flex-col items-center">
                          <h4 className="text-xl font-semibold">
                            {items.Name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {items.Subject}
                          </p>
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

export default administrativeBody;

