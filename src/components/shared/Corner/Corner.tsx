import principle from "../../../../public/assests/corner/principle.webp";
import acheivement from "../../../../public/assests/corner/achievement.png";
import result from "../../../../public/assests/corner/result.png";
import college from "../../../../public/assests/corner/college.png";
import school from "../../../../public/assests/corner/school.png";
import admission from "../../../../public/assests/corner/admission.png";
import Image from "next/image";


const corners = [
  {
    id: 1,
    name: "Principle Corner",
    icon: principle,
  },
  {
    id: 2,
    name: "Acheivement",
    icon: acheivement,
  },
  {
    id: 3,
    name: "Result",
    icon: result,
  },
  {
    id: 4,
    name: "College Corner",
    icon: college,
  },
  {
    id: 5,
    name: "School Corner",
    icon: school,
  },
  {
    id: 6,
    name: "Admission Info",
    icon: admission,
  },
];

const Corner = () => {
  return (
    <div className="flex justify-center mt-5 lg:mt-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6 mx-8 justify-between my-4 space-y-3 lg:space-y-0">
        {corners.map((item) => (
          <div
            className="border border-gray-500 rounded-3xl shadow-md p-2 h-48 w-48 bg-opacity-20 glas bg-gray-300  flex flex-col items-center justify-center gap-3 "
            key={item.id}
          >
            <Image src={item.icon} alt={item.name} className="h-20 w-20 " />

            <h1 className="text-xl font-bold text-blue-500 text-center content-center ">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corner;
