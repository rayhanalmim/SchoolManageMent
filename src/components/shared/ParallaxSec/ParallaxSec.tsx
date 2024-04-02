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
          <Image src={studentImage} className="w-[2020px]" alt="image" />
        </Background>

        <div className="h-[400px] w-full ">
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <h2 className="text-lg lg:text-4xl font-bold  ">
              Doctors Care School
            </h2>
            <h2 className="text-lg font-bold ">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart
              like mine.
            </h2>

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
      </Parallax>
    </div>
  );
};

export default ParallaxSec;
