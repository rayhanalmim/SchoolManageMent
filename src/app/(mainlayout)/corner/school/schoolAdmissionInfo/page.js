 
import SchoolSidebar from "@/components/shared/Corner/SchoolSidebar/SchoolSidebar";
import AdmissionInfo from "@/components/shared/Admission/AdmissionInfo/AdmissionInfo";

const schoolAdmissionInfo = () => {
    return (
        <>
            <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
                <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
                    <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
                        <SchoolSidebar />
                    </div>
                    <div className="grid w-full ">
                        <div className="lg:w-auto lg:mt-2  ">
                            <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                                    School Admission Info
                                </h3>
                            </div>
                            {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
                            <AdmissionInfo/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default schoolAdmissionInfo;