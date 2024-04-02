"use client";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import Slider from "@/components/shared/Slider/Slider";
import Corner from "@/components/shared/Corner/Corner";
import EventNotice from "@/components/shared/EventNotice/EventNotice";
import History from "@/components/shared/History/History";
import NotificationSlider from "@/components/shared/NotificationSlider/NotificationSlider";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <NotificationSlider/>
      <Corner />
      <History/>
      <EventNotice/>
      <Footer />
    </main>
  );
}
