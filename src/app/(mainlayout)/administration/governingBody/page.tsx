import AdministrationSidebar from "@/components/shared/Administration/AdministrationSidebar/AdministrationSidebar";
import governing from "../../../../../public/assests/administration/governingBody/4.jpeg";
import governing1 from "../../../../../public/assests/administration/governingBody/3.jpeg";
import governing2 from "../../../../../public/assests/administration/governingBody/1.jpeg";
import governing3 from "../../../../../public/assests/administration/governingBody/5.jpeg";
import governing4 from "../../../../../public/assests/administration/governingBody/6.jpeg";
import governing5 from "../../../../../public/assests/administration/governingBody/7.png";
import governing6 from "../../../../../public/assests/administration/governingBody/20.png";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const govorningBody = [
  {
    id: 1,
    Name: "Leroy Jenkins",
    Subject: "Governing Body",
    img: governing1,
  },
  {
    id: 2,
    Name: "Leroy Jenkins",
    Subject: "Governing Body",
    img: governing2,
  },
  {
    id: 3,
    Name: "Leroy Jenkins",
    Subject: "Governing Body",
    img: governing3,
  },
  {
    id: 4,
    Name: "Leroy Jenkins",
    Subject: "Governing Body",
    img: governing4,
  },
  {
    id: 5,
    Name: "Leroy Jenkins",
    Subject: "Governing Body",
    img: governing5,
  },
  {
    id: 6,
    Name: "Leroy Jenkins",
    Subject: "Governing Body",
    img: governing6,
  }
];

const socialIcon = (
            <div className="flex gap-1 mt-2 ">
              <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 ">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600 ">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
)

const governingBody = () => {
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
                  Governing Body
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">
                <div className="container p-4 mx-auto space-y-16 sm:p-10 ">
                  <div className="justify-center items-center content-center mx-auto max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <Image
                      src={governing}
                      className="object-cover lg:h-[470px] lg:w-[450px] mx-auto mb-4 bg-center rounded p-3"
                      alt="img"
                    />
                    <div className="flex flex-col items-center pb-3">
                      <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                      <p className="text-sm text-gray-600">Chairmen</p>
                      
                      {socialIcon}
                      
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {govorningBody.map((items) => (
                      <div
                        key={items.Name}
                        className="border rounded w-full py-5 shadow-md"
                      >
                        <Image
                          src={items.img}
                          className="object-cover h-[300px] w-[300px] mx-auto mb-4 bg-center rounded px-3"
                          alt="img"
                        />
                        <div className="flex flex-col items-center">
                          <h4 className="text-xl font-semibold">
                            {items.Name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {items.Subject}
                          </p>
                          {socialIcon}
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

export default governingBody;
