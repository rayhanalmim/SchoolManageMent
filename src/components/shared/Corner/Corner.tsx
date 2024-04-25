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
    name: "Principle Corner",
    icon: principle,
    link: "/principle"
  },
  {
    id: 5,
    name: "School Corner",
    icon: school,
    link: "/school" // Add a link for School Corner, or remove the link if not needed
  },
  {
    id: 4,
    name: "College Corner",
    icon: college,
    link: "/college" // Add a link for College Corner, or remove the link if not needed
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
    link: "/result/school" // Add a link for Result, or remove the link if not needed
  },
  
  
  {
    id: 6,
    name: "Admission Info",
    icon: admission,
    link: "/admission/school" // Add a link for Admission Info, or remove the link if not needed
  },
];


const Corner = () => {
  return (
    <div className=" lg:w-[1260px] mx-4 lg:mx-auto flex justify-center mt-5 lg:mt-20 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 md:gap-4 lg:gap-6 mx-auto justify-between my-4 space-y-3 md:space-y-0 lg:space-y-0">
        {corners.map((item) => (
          <div key={item.id}>
          <Link href={item.link}> 
            <div
              className="border border-gray-300 rounded-lg shadow-md p-2 h-48 w-48 bg-opacity-20 glas bg-gray-300  flex flex-col items-center justify-center gap-3 "
              
            >
              <Image src={item.icon} alt={item.name} className="h-20 w-20 " />

              <h1 className="text-xl font-bold text-blue-500 text-center content-center ">
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
