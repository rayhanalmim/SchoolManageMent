import React from "react";
import { Background, Parallax } from "react-parallax";
import CountUp from "react-countup";

import bgImage from "../../../../public/assests/s5.jpg"; 
import studentImage from "../../../../public/assests/student.jpg"; 
import Image from "next/image";

const ParallaxSec = () => {
  return (
    <div className="relative ">
      <Parallax strength={450}>
        <Background className="w-[1200px] md:w-[1400px] lg:w-[2000px]">
          <Image src={studentImage} className="w-[2000px]" alt="image" />
        </Background>

        <div className="h-[700px] md:h-[400px] lg:h-[500px] lg:w-[1260px] ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
          <div className="w-full lg:w-auto p-10 lg:p-0 absolute top-1/2 left-1/2 lg:transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <div className="lg:mx-full space-y-3 mb-3">
              <h2 className="text-[23px] lg:text-4xl font-bold ">
                Doctors Care School
              </h2>
              <h2 className="text-sm lg:font-bold ">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart like mine.
              </h2>
            </div>
            <div className=" md:w-full lg:w-[1000px] lg:pt-5">
              
              {/* count */}
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:gap-5 lg:gap-14 space-y-5 md:space-y-0 lg:space-y-0 ">
              
                
                  <div className="lg:h-44  lg:w-52 py-5 lg:py-0 bg-black bg-opacity-20 border border-white hover:border-yellow-200 text-center content-center rounded-ss-lg rounded-ee-xl">
                    <h2 className="font-bold lg:text-4xl text-white ">Teacher</h2>
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix=" "
                      suffix=" "
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <div className=" lg:h-44  lg:w-52 py-5 lg:py-0 bg-black bg-opacity-20 border border-white hover:border-yellow-200 text-center content-center rounded-ss-lg rounded-ee-xl">
                    <h2 className="font-bold lg:text-4xl text-white ">Student</h2>
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix=""
                      suffix=" "
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>              
                  <div className=" lg:h-44 lg:w-52 py-5 lg:py-0 bg-black bg-opacity-20 border border-white hover:border-yellow-200 text-center content-center rounded-ss-lg rounded-ee-xl">
                  <h2 className="font-bold lg:text-4xl text-white ">Staff</h2>
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix=" "
                      suffix=" "
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>              
                  <div className=" lg:h-44  lg:w-52 py-5 lg:py-0 bg-black bg-opacity-20 border border-white hover:border-yellow-200 text-center content-center rounded-ss-lg rounded-ee-xl">
                  <h2 className="font-bold lg:text-4xl text-white ">
                      Years
                    </h2>
                    <CountUp
                      start={-875}
                      end={160527}
                      duration={3}
                      // separator=" "
                      decimals={4}
                      decimal=","
                      prefix=" "
                      suffix=" "
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>  
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSec;
