import { ClockIcon } from "@heroicons/react/24/outline";
import { Divider } from "antd";
import Image from "next/image";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import logo1 from "../../../../public/assests/whychoose/icon5.png";
import logo2 from "../../../../public/assests/whychoose/icon6.png";
import logo3 from "../../../../public/assests/whychoose/icon7.png";
import logo4 from "../../../../public/assests/whychoose/icon8.png";
import ourMission from "../../../../public/assests/abt2.png";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
const whystudyHere = () => {
  return (
    <>
      <Header />
      <section className="py-20  bg-gray-100  text-gray-800 ">
        <div className="w-[1260px] container flex  mt-10 px-20 mx-auto">
          <div className="p-5">
            <AboutSidebar />
          </div>
          <div className=" grid w-full  ">
            <div className="lg:w-auto pb-5 mx-auto lg:px-4">
              <div className="w-64 pt-5">
                <h3 className="text-2xl font-semibold py-4">
                  Why Study Here
                </h3>
              </div>
              <div className="border rounded px-3 bg-white">
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
                      <div className="flex gap-2 font-light text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>
                        <h2>This is a benefit</h2>
                      </div>
                      <div className="flex gap-2 font-light text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>
                        <h2>This is a benefit</h2>
                      </div>
                      <div className="flex gap-2 font-light text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>


                        <h2>This is a benefit</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <section>
                  <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                      <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">Our Benefits</h2>
                        <p className=" text-gray-600">
                          Pri ex magna scaevola moderatius. Nullam accommodare no vix,
                          est ei diceret alienum, et sit cetero malorum. Et sea iudico
                          consequat, est sanctus adipisci ex.
                        </p>
                      </div>
                      <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="grid content-center gap-4">
                            <div className="p-8 rounded  shadow-md  bg-gray-50 border">
                              <div className="flex items-center mt-2 mb-2 space-x-4">
                                <Image src={logo1} className="h-auto w-auto" alt="" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold">
                                  Awesome Teachers
                                </p>
                              </div>
                              <p className="mt-2 text-sm font-light text-justify">
                                An audire commodo habemus cum. Ne sed corrumpit
                                repudiandae. Tota aliquip democritum pro in, nec
                                democritum intellegam ne.
                              </p>
                            </div>
                            <div className="p-8 rounded shadow-md  bg-gray-50 border">
                              <div className="flex items-center mt-4 space-x-4">
                                <Image src={logo4} className="h-auto w-auto" alt="" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold">Student Support Service</p>
                              </div>
                              <p className="mt-2 text-sm font-light text-justify">
                                Sit wisi sapientem ut, pri civibus temporibus
                                voluptatibus et, ius cu hinc fabulas. Nam meliore
                                minimum et, regione convenire cum id.
                              </p>
                            </div>
                          </div>
                          <div className="grid content-center gap-4">
                            <div className="p-6 rounded shadow-md  bg-gray-50 border">
                              <div className="flex items-center mt-4 space-x-4">
                                <Image src={logo2} className="h-auto w-auto" alt="" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold">Global Certificate</p>
                              </div>
                              <p className="mt-2 text-sm font-light text-justify">
                                Putant omnium elaboraret per ut. Id dicta tritani
                                nominavi quo, mea id justo errem elaboraret. Agam mollis
                                scripserit ea his, ut nec postea verear persecuti. Ea
                                noster senserit eam, ferri omittantur ei nec. Id mel
                                solet libris efficiantur, commune explicari et eos. Case
                                movet ad est, sed tota vocent appetere ea.
                              </p>
                            </div>
                            <div className="p-6 rounded shadow-md  bg-gray-50 border">
                              <div className="flex items-center mt-4 space-x-4">
                                <Image src={logo3} className="h-auto w-auto" alt="" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold">Best Program</p>
                              </div>
                              <p className="mt-2 text-sm font-light text-justify">
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
      <Footer />
    </>

  );
};

export default whystudyHere;
