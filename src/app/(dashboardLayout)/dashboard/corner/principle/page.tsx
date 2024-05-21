import React from 'react';

const Principle = () => {
    return (
      <div className="lg:w-auto mx-3 lg:mx-auto flex -mt-[700px]">
      <div className="gap-2 md:gap-4 lg:gap-6 mx-auto lg:my-4 pl-[200px]">
        
        <div className="lg:w-full  rounded p-4 bg-white ">
                <section className="p-0 lg:p-2  text-gray-800 ">
                  <div className="container mx-auto space-y-8">

                    <section className="text-gray-900">
                      <div className="border rounded">
                        

                        <form className="p-6">
                          <div className="flex gap-2 w-full ">
                            <label className=" w-full">
                              <span className="mb-1 font-light text-gray-500">First Name*</span>
                              <input type="text" className="border w-full p-2" />
                            </label>
                            <label className="w-full ">
                              <span className="mb-1 font-light text-gray-500">Last Name*</span>
                              <input type="text" className="border p-2 w-full" />
                            </label>
                          </div>
                          <div className="my-5">
                          <label className="">
                            <span className="mb-1 font-light text-gray-500">Email*</span>
                            <input type="email" className="border p-2 w-full" />
                          </label>
                          </div>
                          <div className="my-5">
                          <label className="">
                            <span className="mb-1 font-light text-gray-500">Message*</span>
                            <textarea rows="3" className="border w-full p-2" />
                          </label>
                          </div>
                          <button type="button" className="self-center px-8 py-3 text-lg   hover:ring focus:ring-opacity-75  bg-[#2d76b2]  text-gray-50 ">Submit</button>
                        </form>
                      </div>
                    </section>

                  </div>
                </section>
              </div>
      </div>
    </div>
    );
};

export default Principle;