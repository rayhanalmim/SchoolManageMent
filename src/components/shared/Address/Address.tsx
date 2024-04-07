import { Divider } from "antd";


const Address = () => {
  return (
    <div>

          <div className="lg:w-[1260px] mx-3 lg:mx-auto  lg:my-5 ">
            <div className="w-64 mx-auto py-10">
              <h3 className="text-xl font-semibold border-y-4 text-center py-3">
                Our Address
              </h3>
            </div>
            <div className="flex lg:gap-5 justify-between lg:mx-24 items-center content-center text-center  mb-5 lg:mb-0 space-y-4 lg:space-y-0 border border-gray-300 rounded-3xl shadow-md">
              {/* first */}
              <div className=" lg:px-10 py-6 lg:pt-7  space-y-2 lg:space-y-0 ">
                <div className="flex content-center items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6  text-blue-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                  Address
                </h1>
                <div className="space-y-4 ">
                  <p className="flex  justify-center items-center">

                    <span>Dhaka, Bangladesh.</span>
                  </p>
                </div>

              </div>
              <Divider type="vertical" className=" h-16 bg-gray-400 w-[2px] " />
              {/* second */}
              <div className="lg:px-10 py-6 lg:pt-7    space-y-4 lg:space-y-0">
                <div className="flex content-center items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6  text-blue-500"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                  Phone Number
                </h1>
                <div className="space-y-4">
                  <p className="flex justify-center items-center">

                    <span>+88012345678910</span>
                  </p>
                </div>
              </div>
              <Divider type="vertical" className=" h-16 bg-gray-400 w-[2px] " />
              {/* third */}
              <div className="lg:px-10 py-6 lg:pt-7 space-y-2 lg:space-y-0">
                <div className="flex content-center items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6  text-blue-500"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                  E-Mail
                </h1>
                <div className="space-y-4">
                  <p className="flex justify-center items-center">

                    <span>softedu@softedu.com</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
  );
};

export default Address;
