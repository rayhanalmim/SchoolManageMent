import Slider from "@/components/shared/Slider/Slider";
import Corner from "@/components/shared/Corner/Corner";
import EventNotice from "@/components/shared/EventNotice/EventNotice";
import History from "@/components/shared/History/History";
import NotificationSlider from "@/components/shared/NotificationSlider/NotificationSlider";
import ParallaxSec from "@/components/shared/ParallaxSec/ParallaxSec";
import Address from "@/components/shared/Address/Address";
import Teacher from "@/components/shared/Teacher/Teacher";
import SchoolFeatures from "@/components/shared/SchoolFeatures/SchoolFeatures";
import SeeImgandVideos from "@/components/shared/SeeImgandVideos/SeeImgandVideos";
import OnlineApplication from "@/components/shared/OnlineApplication/OnlineApplication";
import Environment from "@/components/shared/Environment/Environment";
import Overview from "@/components/shared/Overview/Overview";

export default function Home() {
  return (
    <main>
      <Slider />
      <NotificationSlider />
      <Corner />
      {/* <History/> */}
      <EventNotice />
      <Environment/>
      {/* <Address/> */}
      <ParallaxSec />
      <SchoolFeatures/>
      <SeeImgandVideos/>
      {/* <Teacher /> */}   
      <Overview/>
      <OnlineApplication/>
    </main>
  );
}
