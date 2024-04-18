"use client";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import Slider from "@/components/shared/Slider/Slider";
import Corner from "@/components/shared/Corner/Corner";
import EventNotice from "@/components/shared/EventNotice/EventNotice";
import History from "@/components/shared/History/History";
import NotificationSlider from "@/components/shared/NotificationSlider/NotificationSlider";
import ParallaxSec from "@/components/shared/ParallaxSec/ParallaxSec";
import Address from "@/components/shared/Address/Address";
import Teacher from "@/components/shared/Teacher/Teacher";


export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <NotificationSlider/>
      <Corner />
      <History/>
      <EventNotice/>
      <ParallaxSec/>   
      {/* <Address/> */}
      <Teacher/>
      <Footer />
    </main>
  );
}
