import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
import { Divider } from "antd";
import Image from "next/image";
import physics from "../../../../public/assests/facilities/physics2.jpg";
import chem from "../../../../public/assests/facilities/chem2.jpg";
import biology from "../../../../public/assests/facilities/biology.jpg";

const scienceLab = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 lg:pr-5">
            <FacilitiesSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Science Lab
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center">
              <h2 className="text-xl text-justify">পাঠ্যসূচির ভিত্তিতে পদার্থবিজ্ঞান, রসায়ন এবং জীববিজ্ঞানের জন্য স্কুলে বড়, যথেষ্ট, ভাল সুসজ্জিত বিজ্ঞান গবেষণাগার রয়েছে। এই গবেষণাগারে গবেষনা এবং পরীক্ষাদিতে বিশ্লেষণাত্নক সৃজনশীল দক্ষতার জন্য এই ল্যাবরেটরিজ ব্যবহার করার জন্য শিক্ষকগণ তাদের ছাত্র-ছাত্রীদের উৎসাহ দিয়ে থাকেন।</h2>
              <Divider className="bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-center">পদার্থবিজ্ঞান ল্যাব</h2>
                  <Image src={physics} className="h-auto w-auto mt-5" alt="physics lab"/>
                  
                </div>
              <Divider className="bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-center">রসায়ন ল্যাব</h2>
                  <Image src={chem} className="h-auto w-auto mt-5" alt="Chem lab"/>
                  
                </div>
              <Divider className="bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-center">জীববিজ্ঞান ল্যাব</h2>
                  <Image src={biology} className="h-auto w-auto mt-5" alt="Biology lab"/>
                  
                </div>
                
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default scienceLab;
