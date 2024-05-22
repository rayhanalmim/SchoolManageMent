import Slider from "@/components/shared/Slider/Slider";
import Corner from "@/components/shared/Corner/Corner";
import EventNotice from "@/components/shared/EventNotice/EventNotice";
import NotificationSlider from "@/components/shared/NotificationSlider/NotificationSlider";
import ParallaxSec from "@/components/shared/ParallaxSec/ParallaxSec";
import SchoolFeatures from "@/components/shared/SchoolFeatures/SchoolFeatures";
import SeeImgandVideos from "@/components/shared/SeeImgandVideos/SeeImgandVideos";
import OnlineApplication from "@/components/shared/OnlineApplication/OnlineApplication";
import Environment from "@/components/shared/Environment/Environment";
import Overview from "@/components/shared/Overview/Overview";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Hero from "@/components/ui/HomePage/Hero/Hero";
import WhyChoose from "@/components/ui/HomePage/WhyChoose/WhyChoose";
import Header from "@/components/shared/Header/Header";

export default function Home() {
  return (
    <main>
      {/* <HeroSection/> */}
      <NotificationSlider />
      <HeroSection />
      <Header />
      <Hero />
      <WhyChoose />
      {/* <Slider /> */}
      <Corner />

      <EventNotice />
      <Environment />
      <ParallaxSec />
      <SchoolFeatures />
      <SeeImgandVideos />
      <Overview />
      <OnlineApplication />
      {/* <Address/> */}
      {/* <History/> */}
      {/* <Teacher /> */}
    </main>
  );
}
