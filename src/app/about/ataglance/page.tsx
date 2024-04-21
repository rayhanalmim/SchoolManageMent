import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Image from "next/image";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import historyImg from "../../../../public/assests/historyImg.jpg";
import student from "../../../../public/assests/student.jpg";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
const ataglance = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-100 text-gray-800 ">
        <div className="w-[1260px] container flex  mt-10 px-20 mx-auto">
          <div className="p-5">
            <AboutSidebar />
          </div>
          <div className="grid w-full">
            <div className="lg:w-auto pb-5 mx-auto lg:px-4">
              <div className="w-64 pt-5">
                <h3 className="text-2xl font-semibold py-4">
                  At a Glance
                </h3>
              </div>
              <div className="border bg-white rounded">
                <div className="space-y-4">
                  <section className="py-6   text-gray-900">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                      <Image src={historyImg} className="w-full h-full col-span-2 row-span-2 rounded shadow-lg min-h-96 md:col-start-3 md:row-start-1  aspect-square border" alt="" />
                      <Image src={student} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                      <Image src={scienceimg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                      <Image src={scienceimg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                      <Image src={historyImg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                    </div>
                  </section>

                </div>
                <p className="text-justify mx-5 md:mx-8 lg:mx-1 lg:my-1 px-3">
                  Doctors Care Model School is a Cambridge International Education-approved
                  institution. It is part of the learning of over 10000 Cambridge Schools
                  in more than 160 countries. Doctors Care Model School has introduced STEAM
                  Education for the first time in Bangladesh. STEAM education is a highly
                  effective educational approach that is followed by many developed
                  countries. STEAM use Science, Technology, Engineering, Arts, and
                  Mathematics as access points for guiding student inquiry, dialogue, and
                  critical thinking. The end results are students who use critical
                  thinking and take risks, engage in experiential learning, persist in
                  problem-solving, embrace collaboration and work through the creative
                  process.
                  <br />
                  <br />
                  The teaching curriculum is prepared in such a way that students can be
                  self-educated and self-sufficient. No need of any additional tutor or
                  parent’s help at home. All the lessons are attractive, class-based, and
                  full of fun. Incorporation of coding and robotics applications within
                  the schooling methodologies by the trained and skilled teachers helps
                  the students to grow quickly and to become perfect innovative citizens
                  hastening the arrival of the changes in the fourth industrial
                  revolution.
                  <br />
                  <br />
                  We hope our curriculum and tools could be the path of the success for
                  the students in the future. Our institution’s goal is shaping your child
                  toward their bright future. May make this world a better place.
                </p>
                <div className="space-y-4">

                  <section className="py-6   text-gray-900">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">


                      <Image src={historyImg} className="w-full h-full col-span-2 row-span-2 rounded shadow-lg min-h-96 md:col-start-3 md:row-start-1  aspect-square border" alt="" />
                      <Image src={student} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                      <Image src={scienceimg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                      <Image src={scienceimg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                      <Image src={historyImg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
};

export default ataglance;
