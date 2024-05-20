import AdmissionInfo from "@/components/shared/Admission/AdmissionInfo/AdmissionInfo";
import AdmissionSidebar from "@/components/shared/Admission/AdmissionSidebar/AdmissionSidebar";
import { Divider } from "antd";

const admissionInfo = () => {
    return (
        <>
            <div className=" bg-gray-100  lg:py-12 text-gray-800">
                <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
                    <div className="py-5 px-3 lg:px-0 lg:pr-5">
                        <AdmissionSidebar />
                    </div>
                    <div className="grid w-full">
                        <div className="lg:w-auto lg:mt-2">
                            <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                                    Admission Info
                                </h3>
                            </div>
                            {/* Divider  */}
              <div className="w-full border-t border my-3"></div>
                            <AdmissionInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default admissionInfo;