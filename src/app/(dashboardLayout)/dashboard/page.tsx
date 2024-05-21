import principle from "../../../../public/assests/corner/principle.webp";
import acheivement from "../../../../public/assests/corner/achievement.png";
import result from "../../../../public/assests/corner/result.png";
import college from "../../../../public/assests/corner/college.png";
import school from "../../../../public/assests/corner/school.png";
import admission from "../../../../public/assests/corner/admission.png";
import Image from "next/image";
import Link from "next/link";

const corners = [
  {
    id: 1,
    name: "About Us",
    icon: principle,
    link: "/corner/principle/message"
  },
  {
    id: 5,
    name: "Administration",
    icon: school,
    link: "/corner/school/schoolInfo" 
  },
  {
    id: 4,
    name: "Result",
    icon: college,
    link: "/corner/college/collegeInfo" 
  },
  {
    id: 2,
    name: "Admission",
    icon: acheivement,
    link: "/about/achievement"
  },
  {
    id: 3,
    name: "Facilities",
    icon: result,
    link: "/result/schoolResult" 
  }, 
  {
    id: 6,
    name: "Club",
    icon: admission,
    link: "/admission/admissionInfo" 
  },
  {
    id: 6,
    name: "Gallery",
    icon: admission,
    link: "/admission/admissionInfo" 
  },
  {
    id: 6,
    name: "Contact",
    icon: admission,
    link: "/admission/admissionInfo" 
  },
  {
    id: 6,
    name: "Notice",
    icon: admission,
    link: "/admission/admissionInfo" 
  },
];

const DashBoard = () => {
    return (
    
    <div className=" lg:w-auto mx-3 lg:mx-auto flex -mt-[700px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mx-auto lg:my-4 pl-[200px]">
        {corners.map((item) => (
          <div key={item.id}>
          <Link href={item.link}> 
            <div
              className="border border-gray-300 rounded-lg shadow-md p-2 lg:h-48 lg:w-48 bg-opacity-20  bg-gray-300 flex flex-col items-center justify-center gap-3">
              <Image src={item.icon} alt={item.name} className="h-20 w-20"/>
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-blue-500 text-center content-center">
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

export default DashBoard;