import React from "react";
import { Background, Parallax } from "react-parallax";
import CountUp from "react-countup";

import studentImage from "../../../../public/assests/student.jpg"; // Adjusted the import path
import Image from "next/image";

const ParallaxSec = () => {
  return (
    <div className="relative">
      <Parallax strength={400}>
        <Background className="w-[1400px]">
          <Image src={studentImage} className="w-full" alt="image" />
        </Background>

        <div className="h-[800px] w-full ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <div className="space-y-3 mb-3">
              <h2 className="text-lg lg:text-4xl font-bold  ">
                Doctors Care School
              </h2>
              <h2 className="text-sm lg:font-bold ">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart like mine.
              </h2>
            </div>
            <div className="grid gird-cols-1 lg:grid-cols-2 lg:gap-20">
              <div className="lg:w-96 lg:h-96">
                <Image
                  src={studentImage}
                  className="lg:h-full lg:w-auto"
                  alt="image"
                />
              </div>
              {/* count */}
              <div className="grid grid-cols-1 lg:grid-cols-2 ml-5 space-y-5 lg:space-y-0">
              {/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 text-white space-y-5 lg:space-y-0  mt-4 lg:mt-0 lg:ml-5 "> */}
                
                  <div className="lg:h-44 lg:w-52 px-1 lg:px-0 py-5 lg:mr-32 lg:py-0 bg-black border border-white text-center mt-5 lg:mt-0 content-center">
                    <h2 className="font-bold lg:text-2xl text-white ">Teacher</h2>
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
                  <div className="lg:h-44 lg:w-52 lg:mx-20  py-5 lg:mr-32 lg:py-0 bg-black border border-white text-center content-center">
                    <h2 className="font-bold lg:text-2xl text-white ">Student</h2>
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
                
                  <div className="lg:h-44 lg:w-52 px-1 lg:px-0 py-5 lg:mr-32 lg:py-0 bg-black border border-white text-center  content-center">
                    <h2 className="font-bold lg:text-2xl text-white ">Staff</h2>
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
                  <div className="lg:h-44 lg:w-52 lg:mx-20 py-5 lg:mr-32 lg:py-0 bg-black border border-white text-center content-center">
                    <h2 className="font-bold lg:text-2xl text-white ">
                      Supporting Staff
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
