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
// import History from "@/components/shared/History/History";
// import Address from "@/components/shared/Address/Address";
// import Teacher from "@/components/shared/Teacher/Teacher";

export default function Home() {
  return (
    <main>
      <Slider />
      <NotificationSlider />
      <Corner />
      <EventNotice />
      <Environment/>
      <ParallaxSec />
      <SchoolFeatures/>
      <SeeImgandVideos/>
      <Overview/>
      <OnlineApplication/>
      {/* <Address/> */}
      {/* <History/> */}
      {/* <Teacher /> */}   
    </main>
  );
}
