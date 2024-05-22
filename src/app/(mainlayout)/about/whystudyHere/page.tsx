import { ClockIcon } from "@heroicons/react/24/outline";
 
import Image from "next/image";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import logo1 from "../../../../../public/assests/whychoose/icon5.png";
import logo2 from "../../../../../public/assests/whychoose/icon6.png";
import logo3 from "../../../../../public/assests/whychoose/icon7.png";
import logo4 from "../../../../../public/assests/whychoose/icon8.png";
import ourMission from "../../../../../public/assests/abt2.png";
import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";

const benefits =[
  {
    id:1, 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
  </svg>,
  text: "This is Benefit"
  },
  {
    id:2, 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
  </svg>,
  text: "This is Benefit"
  },
  {
    id:3, 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
  </svg>,
  text: "This is Benefit"
  },
]


const whystudyHere = () => {
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
                  Why Study Here
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 pt-5 pl-5">
                  <div>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image src={ourMission} className="h-full w-auto" alt="" />
                    </div>
                  </div>
                  <div className="items-center justify-center content-center lg:space-y-6 ">
                    <h2 className="font-bold lg:text-4xl">Our Mission</h2>
                    <p className="font-light text-sm">Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum nisl.</p>
                    <div>
                      {benefits.map(items=>(
                      <div className="flex gap-2 font-light text-sm items-center" key={items.id}>
                        {items.icon}
                        <h2>{items.text}</h2>
                      </div>
                      ))}
                      
                    </div>
                  </div>
                </div>

                <section>
                  <div className="container px-3 py-8 mx-auto">
                    <div className="lg:grid items-center gap-2 xl:grid-cols-5">
                      <div className="lg:max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-3xl font-bold">Our Benefits</h2>
                        <p className="text-base text-gray-500 text-justify">
                          Pri ex magna scaevola moderatius. Nullam accommodare no vix,
                          est ei diceret alienum, et sit cetero malorum. Et sea iudico
                          consequat, est sanctus adipisci ex.
                        </p>
                      </div>
                      <div className="p-2 col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="grid content-center gap-4">
                            <div className="p-6 rounded  shadow-md  bg-gray-50 border space-y-3">
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <Image src={logo1} className="h-auto w-auto" alt="" />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">
                                  Awesome Teachers
                                </p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                An audire commodo habemus cum. Ne sed corrumpit
                                repudiandae. Tota aliquip democritum pro in, nec
                                democritum intellegam ne.
                              </p>
                            </div>
                            <div className="p-6 rounded shadow-md  bg-gray-50 border space-y-3">
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <Image src={logo4} className="h-auto w-auto" alt="" />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">Student Support Service</p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                Sit wisi sapientem ut, pri civibus temporibus
                                voluptatibus et, ius cu hinc fabulas. Nam meliore
                                minimum et, regione convenire cum id.
                              </p>
                            </div>
                          </div>
                          <div className="grid content-center gap-4">
                            <div className="p-6 rounded shadow-md  bg-gray-50 border space-y-3">
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <Image src={logo2} className="h-auto w-auto" alt="" />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">Global Certificate</p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                Putant omnium elaboraret per ut. Id dicta tritani
                                nominavi quo, mea id justo errem elaboraret. Agam mollis
                                scripserit ea his, ut nec postea verear persecuti. Ea
                                noster senserit eam, ferri omittantur ei nec. Id mel
                                solet libris efficiantur, commune explicari et eos. Case
                                movet ad est, sed tota vocent appetere ea.
                              </p>
                            </div>
                            <div className="p-6 rounded shadow-md  bg-gray-50 border space-y-3">
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <Image src={logo3} className="h-auto w-auto" alt="" />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">Best Program</p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                Te omnes virtute volutpat sed. Ei esse eros interesset
                                vel, ei populo denique ocurreret vix, eu cum pertinax
                                mandamus vituperatoribus. Solum nihil luptatum per ex,
                                ei amet viderer eos. Ea illum labitur mnesarchum pro.
                                Eius meis salutandi ei nam, alterum expetenda et nec.
                                Expetenda intellegat at eum, per mazim sanctus
                                honestatis ad. Ei noluisse invenire vix. Te ancillae
                                patrioque qui, probo bonorum vivendum ex vim.
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

export default whystudyHere;
