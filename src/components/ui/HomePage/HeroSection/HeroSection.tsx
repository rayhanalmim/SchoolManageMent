"use client";

/* eslint-disable react/no-unescaped-entities */
import "swiper/swiper-bundle.min.css";
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
        speed={2000} // Set the transition speed to 1000ms (1 second)
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header">
            <div className="header-content capitalize">
              <div className="left-side">
                <h1 className="welcome-heading text-2xl font-bold text-[#0685FF]">
                "Doctor's Care Model School: "
                </h1>
                <p className="mt-3 text-xl font-semibold welcome-paragraph ">
                Nurturing Minds, Inspiring Futures.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="header">
            <div className="header-content capitalize">
              <div className="left-side">
                <h1 className="welcome-heading text-2xl  font-bold text-[#0685FF]">
                "Doctor's Care Model School: "
                </h1>
                <p className="mt-3 text-xl font-semibold welcome-paragraph ">
                Cultivating Excellence, Shaping Tomorrow's Leaders.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header">
            <div className="header-content capitalize">
              <div className="left-side">
                <h1 className="welcome-heading text-2xl font-bold text-[#0685FF]">
                "Doctor's Care Model School: "
                </h1>
                <p className="mt-3 text-xl font-semibold welcome-paragraph md:text-3xl">
                 Every Student is a Masterpiece in the Making.
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
