import ResultSidebar from "@/components/shared/ResultSidebar/ResultSidebar";
 

const tables = [
  {
    name: "Bangla",
    subCode: "101",
    marks: "70",
    grade: "A"
  },
  {
    name: "English",
    subCode: "102",
    marks: "70",
    grade: "A"
  },
  {
    name: "Math",
    subCode: "103",
    marks: "70",
    grade: "A"
  },
  {
    name: "Social Science",
    subCode: "104",
    marks: "70",
    grade: "A"
  },
  {
    name: "ICT",
    subCode: "105",
    marks: "70",
    grade: "A"
  },
  {
    name: "Higher Math",
    subCode: "106",
    marks: "70",
    grade: "A"
  },
  {
    name: "Islam",
    subCode: "107",
    marks: "70",
    grade: "A"
  },
  {
    name: "Physics",
    subCode: "108",
    marks: "70",
    grade: "A"
  },
  {
    name: "Chemistry",
    subCode: "109",
    marks: "70",
    grade: "A"
  },
  {
    name: "Biology",
    subCode: "110",
    marks: "70",
    grade: "A"
  },
]
const englishVersionResult = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="xl:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <ResultSidebar />
          </div>
          <div className="lg:grid lg:w-full">
            <div className="w-auto lg:mt-2 px-2">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  English Version Result
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              {/* submit section */}
              {/* submit section */}
              <section className="w-auto border rounded p-4 bg-white text-gray-800 lg:px-16 my-4 md:my-0 lg:my-0">
                <div className="lg:w-full flex flex-col items-center justify-center">
                  <h2 className="text-xl md:text-2xl lg:text-2xl">Gives Information for Result</h2>
                </div>
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 my-3 md:my-6 lg:my-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-4">
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
                  <button className="btn btn-neutral md:btn-wide lg:btn-wide mt-5">Submit</button>
                </div>
              </section>


              {/* ------------------Result section----------------- */}
              <section className="lg:w-full border rounded p-1 md:p-2 lg:p-4 bg-white text-gray-800 lg:gap-4 lg:mt-5 lg:px-20 lg:py-6">
                <div className="lg:w-full flex flex-col items-center justify-center">
                  <h2 className="text-xl md:text-2xl lg:text-2xl">Mid Term Exam Result - 2024</h2>
                </div>
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
                {/* -------first section--------- */}
                <div className="lg:w-full text-xs md:text-base lg:text-base">
                  <table className="border-collapse border border-gray-400 lg:w-full mx-auto">
                    <thead>
                      <tr className="bg-gray-100 text-center">
                        <td className="border border-gray-400 p-[2px] md:p-1p-2">Roll No.</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">12345</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Class</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">4</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Student Name</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2" colSpan="3">Mr. Chamal </td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Father Name</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2" colSpan="3">Mr. Chamal </td>

                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Mother Name</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2" colSpan="3">Mr. Chamal </td>

                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Board</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Rajshahi</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Session</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">2023-2024</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Group</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Science</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Type</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Regular</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Result</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">GPA = 4.00</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Date of Birth</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">16-05-1996</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                {/* --------second section-------- */}
                <h2 className="text-xl md:text-2xl lg:text-2xl text-center py-5">Subject Wise grade / marks</h2>
                <div className="lg:w-full text-xs md:text-base lg:text-base">
                  <table className=" border border-gray-400  lg:w-full mx-auto">
                    <tbody>
                      <tr className="text-center bg-green-500 text-white font-bold">
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Subject Code</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Subject Name</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Marks</td>
                        <td className="border border-gray-400 p-[2px] md:p-2 lg:p-2">Grade</td>
                      </tr>
                      {tables.map((items, index) => (
                        <tr key={items.name}>
                          <td className={`border border-gray-400 p-[2px] md:p-2 lg:p-2 text-center ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>{items.subCode}</td>
                          <td className={`border border-gray-400 p-[2px] md:p-2 lg:p-2 uppercase ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>{items.name}</td>
                          <td className={`border border-gray-400 p-[2px] md:p-2 lg:p-2 text-center ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>{items.marks}</td>
                          <td className={`border border-gray-400 p-[2px] md:p-2 lg:p-2 text-center ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>{items.grade}</td>
                        </tr>
                      ))}
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

export default englishVersionResult;
