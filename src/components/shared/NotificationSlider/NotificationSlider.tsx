import Marquee from "react-fast-marquee";

const NotificationSlider = () => {
  return (
    <div className="lg:w-[1260px] flex justify-center border-black border-2  mt-8 mx-1 lg:mx-auto rounded ">      
    <div className="bg-black text-white text-sm lg:text-base font-bold lg:w-44 lg:p-2 text-center
    ">Latest Notices</div>
      <Marquee pauseOnHover speed={60}>
      ৪র্থ অন্ত:স্কুল বিজ্ঞান মেলা এবং কুইজ লীগ: সিজন-২
        <h1 className="pt-[5px] ml-2 text-[10px] font-light mr-5 md:mr-0 lg:mr-0">১০ জানুয়ারী, ২০২৩</h1>
      </Marquee>
      
    </div>
  );
};
 
export default NotificationSlider;
