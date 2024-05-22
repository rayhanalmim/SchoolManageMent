"use client";

/* eslint-disable react/no-unescaped-entities */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./HeroSection.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  console.log("HeroSection component rendered");

  return (
    <div className="hero-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true} // Enable looping for smooth transitions
        modules={[Autoplay, Pagination, Navigation]}
        speed={1500} // Set the transition speed to 1000ms (1 second)
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header ">
            <div className="header-content capitalize">
            <div className="left-side">
                <h1 className="welcome-heading text-sm md:text-2xl lg:text-4xl font-bold text-[#0685FF]">
                Education is the passport to the future, 
                </h1>
                <p className=" text-sm md:text-xl font-semibold welcome-paragraph ">
                for tomorrow belongs to those who prepare for it today.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="header header2">
            <div className="header-content capitalize">
            <div className="left-side">
                <h1 className="welcome-heading text-sm md:text-2xl lg:text-4xl font-bold text-[#0685FF]">
                Education is the passport to the future, 
                </h1>
                <p className=" text-sm md:text-xl font-semibold welcome-paragraph ">
                for tomorrow belongs to those who prepare for it today.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="header header3">
            <div className="header-content capitalize">
            <div className="left-side">
                <h1 className="welcome-heading text-sm md:text-2xl lg:text-4xl font-bold text-[#0685FF]">
                Education is the passport to the future, 
                </h1>
                <p className=" text-sm md:text-xl font-semibold welcome-paragraph ">
                for tomorrow belongs to those who prepare for it today.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
};

export default HeroSection;
