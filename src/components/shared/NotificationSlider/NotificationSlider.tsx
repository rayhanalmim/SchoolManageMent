import Marquee from "react-fast-marquee";

const notifications = [
  {
    name: "SoftyEdu School & College",
  },
  {
    name: "SoftyEdu School & College",
  },
  {
    name: "SoftyEdu School & College",
  },
  {
    name: "SoftyEdu School & College",
  },
  {
    name: "SoftyEdu School & College",
  },
];

const NotificationSlider = () => {
  return (
    <div className="flex justify-center border-black border-2  mt-8 mx-36 rounded ">      
    <div className="bg-black text-white font-bold w-44 p-2 text-center
    ">Latest Notices</div>
      <Marquee pauseOnHover speed={60}>
        I can be a React component, multiple React components, or just some
        text.
        <h1 className="pt-[5px] ml-2 text-[10px] font-light ">January 10, 2023</h1>
      </Marquee>
      
    </div>
  );
};

export default NotificationSlider;
