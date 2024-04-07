import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

const collegeAdmission = () => {
  return (
    <>
      <Header />
      
      <div className=" lg:card-side  mx-20 my-5 ">
      {/* <h2 className="font-bold text-3xl text-center my-10 justify-center">Admission Form</h2> */}
        <div className="card-body">
          {/* Student Information */}
          <div className="card card-body shadow bg-gray-50">
            <div className="divider">Students Information</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <label className="form-control w-full ">
              <h1 className="text-sm p-1">First Name </h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <h1 className="text-sm p-1">Last Name </h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full">
              <h1 className="text-sm p-1">Gender - </h1>
              <select className="select select-bordered">
                <option disabled selected>
                  -- Select a Gender -
                </option>
                <option> Male </option>
                <option>Fe-Male</option>
              </select>
            </label>

            <label className="form-control w-full ">
              <h1 className="text-sm p-1">Mobile No.</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <h1 className="text-sm p-1">E-Mail</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>

            <label className="form-control w-full ">
              <h1 className="text-sm p-1">Date of Birth </h1>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <h1 className="text-sm p-1">NID / Birth Certificate No. - </h1>
              <input
                type="text"
                placeholder="NID / Birth Certificate Number"
                className="input input-bordered w-full "
                pattern="[0-9]*"
              />
            </label>
            <label className="form-control w-full ">
              <h1 className="text-sm p-1">Student Image (Passport Size)</h1>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            </div>
          </div>
          {/* Guardians or Parents Information */}
          <div className="card card-body shadow bg-gray-50">
            <div className="divider">Guardians or Parents Information</div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-3">
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Father Name </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Mother Name </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>

              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Guardian Mobile No: </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Emergency Mobile No: </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Guardian Occupation: </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>

              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Guardian Photo (Passport Size)</h1>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full "
                />
              </label>
              
            </div>
          </div>
          {/* Address */}
          <div className="card card-body shadow bg-gray-50">
            <div className="divider">Address</div>
            <div className="grid grid-cols-2 gap-3">
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Present Address</h1>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Present Address"
                ></textarea>
              </label>
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Permanent Address</h1>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Permanent Address"
                ></textarea>
              </label>
            </div>
          </div>
          {/* Admission Information */}
          <div className="card card-body shadow bg-gray-50">
            <div className="divider">Admission Information</div>
            <div className="grid grid-cols-2 gap-3">
              <label className="form-control w-full">
                <h1 className="text-sm p-1">Admission For - </h1>
                <select className="select select-bordered">
                  <option disabled selected>
                    -- Please Select a Class -
                  </option>
                  <option>PG</option>
                  <option>Nursery</option>
                  <option>Junior-1</option>
                  <option>Class - 1</option>
                  <option>Class - 2</option>
                  <option>Class - 3</option>
                  <option>Class - 4</option>
                  <option>Class - 5</option>
                  <option>Class - 6</option>
                  <option>Class - 7</option>
                </select>
              </label>

              <label className="form-control w-full">
                <h1 className="text-sm p-1">Admission Month - </h1>
                <select className="select select-bordered">
                  <option disabled selected>
                    -- Please Select Month -
                  </option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
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
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Academic Year</h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Previous School</h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <h1 className="text-sm p-1">Last Exam Result</h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control">
                <h1 className="text-sm p-1">Others</h1>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Others"
                ></textarea>
              </label>
            </div>
          </div>
        </div>
        
        <button className="btn bg-black btn-wide ml-8 text-white">Submit</button>
      </div>
      <Footer/>
    </>
  );
};

export default collegeAdmission;
