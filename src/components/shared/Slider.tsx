import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <div className="flex justify-center align-middle items-center w-auto ">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {/* first slide */}
        <div className="h-40 lg:h-full">
       
          <img
            src="https://i.ibb.co/8xF6nH8/bruno-kelzer-Lvy-SG1hvuz-I-unsplash.jpg"
            alt="Image 1"
            className="h-40 lg:h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 lg:left-1/3 transform lg:-translate-x-1/2 -translate-y-1/2 text-left pl-8 lg:pl-0">
            <h2 className="text-lg lg:text-4xl font-bold lg:mb-4 text-white">
              This is E-Soft E-commerce site
            </h2>
            <p className="text-white mb-3 text-[10px] lg:text-base">
              We prioritize reliability and trust, ensuring a hassle-free
              shopping.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded text-sm lg:text-base">
              Shop Now
            </button>
          </div>
        </div>
        {/* second slide */}
        <div className="h-40 lg:h-full">
          <img
            src="https://i.ibb.co/NSkFTpk/brooke-cagle-Ti-TU0k1-E0-UE-unsplash.jpg"
            alt="Image 2"
            className="h-40 lg:h-auto"
          />
          <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 text-center pl-8 lg:pl-auto">
            <h2 className="text-lg lg:text-4xl font-bold lg:mb-4 text-white">
              This is E-Soft E-commerce site
            </h2>
            <p className="text-white mb-3 text-[10px] lg:text-base">
              We prioritize reliability and trust, ensuring a hassle-free
              shopping.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded text-sm lg:text-base">
              Buy Now
            </button>
          </div>
        </div>
        {/* 3rd slide */}
        <div className="h-40 lg:h-full">        
          <img
            src="https://i.ibb.co/5s0vWwT/myriam-jessier-eve-I7-MOc-Smw-unsplash.jpg"
            alt="Image 3"
            className="h-40 lg:h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 lg:left-1/3 transform lg:-translate-x-1/2 -translate-y-1/2 text-left pl-8 lg:pl-auto">
            <h2 className="text-lg lg:text-4xl font-bold lg:mb-4 text-white">
              This is E-Soft E-commerce site
            </h2>
            <p className="text-white mb-3 text-[10px] lg:text-base">
              We prioritize reliability and trust, ensuring a hassle-free
              shopping.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded text-sm lg:text-base">
              Buy Now
            </button>
          </div>
        </div>
        {/* 4th slide */}
        <div className="h-40 lg:h-full">
          <img
            src="https://i.ibb.co/1T1LP91/lance-reis-Ce-G8n-EBrer-U-unsplash.jpg"
            alt="Image 4"
            className="h-40 lg:h-auto"
          />
          <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute transform top-1/2 lg:left-1/2 -translate-y-1/2 text-right pr-8 lg:pr-auto">
            <h2 className="text-lg lg:text-4xl font-bold lg:mb-4 text-white">
              This is E-Soft E-commerce site
            </h2>
            <p className="text-white mb-3 text-[10px] lg:text-base">
              We prioritize reliability and trust, ensuring a hassle-free
              shopping.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded text-sm lg:text-base">
              Buy Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
    );
};

export default Slider;