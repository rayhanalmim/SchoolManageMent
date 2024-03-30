import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../../public/assests/s1.jpg";
import slide2 from "../../../public/assests/s2.jpg";
import slide3 from "../../../public/assests/s3.jpg";
import slide4 from "../../../public/assests/s4.jpg";
import slide5 from "../../../public/assests/s5.jpg";
import Image from 'next/image';

const schools = [
  {
    name: "SoftyEdu School & College",
    est: "Est. 1946",
    img: slide1,
  },
  {
    name: "SoftyEdu School & College",
    est: "Est. 1946",
    img: slide2,
  },
  {
    name: "SoftyEdu School & College",
    est: "Est. 1946",
    img: slide3,
  },
  {
    name: "SoftyEdu School & College",
    est: "Est. 1946",
    img: slide4,
  },
  {
    name: "SoftyEdu School & College",
    est: "Est. 1946",
    img: slide5,
  },
];
const Slider = () => {
  return (
    <div className="flex justify-center align-middle items-center w-auto ">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {/* first slide */}
        {schools.map((item) => (
        <div className="h-40 lg:h-full" key={item.name}>
          {/* <img
            src={item.img}
            alt="Image 1"
            className="h-40 lg:h-auto"
          /> */}
          <Image src={item.img}
            alt="Image 1" className="h-auto w-auto"/>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 text-center pl-8 lg:pl-0">
            <h2 className="text-lg lg:text-4xl font-bold lg:mb-4 text-white">
              {item.name}
            </h2>
            <p className="text-white mb-3 text-[10px] lg:text-base">
              {item.est}
            </p>
          </div>
        </div>))}         
        </Carousel>
    </div>
  );
};

export default Slider;
