import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import ResultSidebar from "@/components/shared/ResultSidebar/ResultSidebar";
import { Divider } from "antd";

const schoolResult = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-20 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-5">
            <ResultSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  School Result
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 ">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Name</span>
                    </div>
                    <input type="text" placeholder="Name" className="input input-bordered w-full " />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Roll</span>
                    </div>
                    <input type="text" placeholder="Roll" className="input input-bordered w-full " />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Select Class</span>

                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>Select Class</option>
                      <option>Class One</option>
                      <option>Class Two</option>
                      <option>Class Three</option>
                      <option>Class Four</option>
                      <option>Class Five</option>
                    </select>

                  </label>

                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Exam</span>

                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>Select Exam</option>

                      <option>Class Test</option>
                      <option>Quiz</option>
                      <option>Test (class-10) </option>
                      <option>Pre-Test (class-10)</option>
                      <option>1st Term Exam</option>
                      <option>2nd Term Exam</option>
                      <option>Mid Term</option>
                      <option>Final</option>

                    </select>

                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Month</span>

                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>Select Month</option>

                      <option>January</option>
                      <option>February</option>
                      <option>March </option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>

                    </select>

                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Year</span>
                    </div>
                    <input type="text" placeholder="Year" className="input input-bordered w-full " />
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button className="btn btn-neutral lg:btn-wide lg:mt-5">Submit</button>
                </div>


              </section>
              <section className="w-full border rounded p-4 bg-white text-gray-800 gap-4 mt-5 ">
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="text-2xl">Mid Term Exam Result - 2024</h2>
                </div>
                <Divider className="bg-gray-300" />

                <div className="lg:w-full">
                  <table className="border-collapse border border-gray-400 lg:w-full">
                    <thead>
                      <tr>
                        <td className="border border-gray-400 p-2">Roll No.</td>
                        <td className="border border-gray-400 p-2">12345</td>
                        <td className="border border-gray-400 p-2">Class</td>
                        <td className="border border-gray-400 p-2">4</td>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td className="border border-gray-400 p-2">Student Name</td>
                        <td className="border border-gray-400 p-2">Mr. Chamal </td>


                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-2">Father Name</td>
                        <td className="border border-gray-400 p-2">Mr. Chamal </td>

                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-2">Mother Name</td>
                        <td className="border border-gray-400 p-2">Mr. Chamal </td>

                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-2">Board</td>
                        <td className="border border-gray-400 p-2">Rajshahi</td>
                        <td className="border border-gray-400 p-2">Session</td>
                        <td className="border border-gray-400 p-2">2023-2024</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-2">Group</td>
                        <td className="border border-gray-400 p-2">Science</td>
                        <td className="border border-gray-400 p-2">Type</td>
                        <td className="border border-gray-400 p-2">Regular</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-2">Result</td>
                        <td className="border border-gray-400 p-2">GPA = 4.00</td>
                        <td className="border border-gray-400 p-2">Date of Birth</td>
                        <td className="border border-gray-400 p-2">16-05-1996</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <h2 className="text-2xl text-center py-5">Subject Wise Grade / Marks</h2>
                <div className="lg:w-full">
                  
                  <table className="border-collapse border border-gray-400  lg:w-full">
                    <thead>
                      <tr className="bg-green-500 text-white text-center font-bold">
                        <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                      <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>


                      </tr>
                      <tr>
                      <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>

                      </tr>
                      <tr>
                      <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>

                      </tr>
                      <tr>
                      <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>
                      </tr>
                      <tr>
                      <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>
                      </tr>
                      <tr>
                      <td className="border border-gray-400 p-2">Subject Code</td>
                        <td className="border border-gray-400 p-2">Subject Name</td>
                        <td className="border border-gray-400 p-2">Grade</td>
                      </tr>

                    </tbody>
                  </table>
                </div>





              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default schoolResult;
