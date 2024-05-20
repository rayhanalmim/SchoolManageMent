import AdmissionSidebar from "@/components/shared/Admission/AdmissionSidebar/AdmissionSidebar";
import CollegeAdmissionForm from "@/components/shared/Admission/CollegeAdmissionForm/CollegeAdmissionForm";
import { Divider } from "antd";

const collegeAdmission = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 px-3 lg:px-0 lg:pr-5">
            <AdmissionSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  College Admission
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full border-t border my-3"></div>

              <section className="lg:w-auto text-gray-800 space-y-4 px-3 md:px-0 lg:px-0">
                {/* Student Information */}
                <CollegeAdmissionForm/>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default collegeAdmission;
