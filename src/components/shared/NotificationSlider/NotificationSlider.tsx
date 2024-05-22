import Marquee from "react-fast-marquee";

const NotificationSlider = () => {
  return (
    <div className="bg-[#16A34A] text-white ">
      <div className="lg:w-[1260px] flex justify-center  mx-1 lg:mx-auto rounded ">
        <div
          className="bg-[#3B82F6] text-white text-sm lg:text-base font-bold lg:w-44 lg:p-2 text-center
    "
        >
          Latest Notices
        </div>
        <Marquee pauseOnHover speed={60}>
         <h1 className="text-xl font-semibold "> ৪র্থ অন্ত:স্কুল বিজ্ঞান মেলা এবং কুইজ লীগ: সিজন-২
         ১০ জানুয়ারী, ২০২৩</h1>
           
         
        </Marquee>
      </div>
    </div>
  );
};

export default NotificationSlider;
