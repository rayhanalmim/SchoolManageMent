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

        <div className="h-[400px] w-full ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-lg lg:text-4xl font-bold  ">
              Doctors Care School
            </h2>
            <h2 className="text-sm font-bold ">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart
              like mine.
            </h2>
            <div className="flex">
              <div>
                {" "}
                <Image src={studentImage} className="w-60 h-52" alt="image" />
              </div>
              {/* count */}
              <div className="gap-5 text-black">
                <div className="flex gap-3">
                  <div className="h-20 w-52 rounded bg-gray-200 border opacity-50 text-center item-center content-center">
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix="EUR "
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
                  <div className="h-20 w-52 rounded bg-gray-200 border opacity-50 text-center item-center content-center">
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix="EUR "
                      suffix=" left"
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
                <div className="flex gap-3" >
                  <div className="h-20 w-52 rounded bg-gray-200 border opacity-50 text-center item-center content-center">
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix="EUR "
                      suffix=" left"
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
                  <div className="h-20 w-52 rounded bg-gray-200 border opacity-50 text-center item-center content-center">
                    <CountUp
                      start={-875.039}
                      end={160527.012}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix="EUR "
                      suffix=" left"
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
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSec;
