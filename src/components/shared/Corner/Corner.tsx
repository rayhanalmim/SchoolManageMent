import principle from "../../../../public/assests/corner/principle.webp";
import acheivement from "../../../../public/assests/corner/achievement.png";
import result from "../../../../public/assests/corner/result.png";
import college from "../../../../public/assests/corner/college.png";
import school from "../../../../public/assests/corner/school.png";
import admission from "../../../../public/assests/corner/admission.png";
import Image from "next/image";
import Link from "next/link";
import "./style.css"

const corners = [
  {
    id: 1,
    name: "Principle Corner",
    icon: principle,
    link: "/corner/principle/bio"
  },
  {
    id: 5,
    name: "School Corner",
    icon: school,
    link: "/corner/school/schoolInfo" 
  },
  {
    id: 4,
    name: "College Corner",
    icon: college,
    link: "/corner/college/collegeInfo" 
  },
  {
    id: 2,
    name: "Achievement",
    icon: acheivement,
    link: "/about/achievement"
  },
  {
    id: 3,
    name: "Result",
    icon: result,
    link: "/result/schoolResult" 
  },
  
  
  {
    id: 6,
    name: "Admission Info",
    icon: admission,
    link: "/admission/admissionInfo" 
  },
];


const Corner = () => {
  return (
    <div className=" lg:w-[1260px] mx-auto flex justify-center mt-6 lg:mt-5 lg:px-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] md:gap-6 lg:gap-6 mx-auto justify-between lg:my-4">
        {corners.map((item) => (
          <div key={item.id}>
          <Link href={item.link}> 
            <div
              className="border border-gray-300 rounded-lg shadow-md p-2 md:p-2 lg:p-2 h-auto md:h-48 lg:h-48 w-auto md:w-48 lg:w-48 bg-opacity-20  bg-gray-300 flex flex-col items-center justify-center gap-1 md:gap-3 lg:gap-3">
              <Image src={item.icon} alt={item.name} className="h-[60px] md:h-20 lg:h-20 w-[60px] md:w-20 lg:w-20"/>
              <h1 className="text-sm md:text-xl lg:text-xl md:font-bold lg:font-bold text-blue-500 text-center content-center">
                {item.name}
              </h1>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corner;
