import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
import Link from "next/link";
const achievement = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-100 text-gray-800 ">
        <div className="w-[1260px] container flex  mt-10 px-20 mx-auto">
          <div className="p-5">
            <AboutSidebar />
          </div>
          <div className="grid w-auto">
            <div className="lg:w-auto pb-5 mx-auto lg:px-4">
              <div className="w-64 pt-5">
                <h3 className="text-2xl font-semibold py-4">
                  Achievement
                </h3>
              </div>
              <div className="border rounded p-10 bg-white">
                <h1 className="justify-center text-center font-bold text-2xl pb-3 underline">
                  খ্যাতি ও কৃতি
                </h1>

                <table className="w-[600px] mx-auto py-10 border text-center">
                  <tr className="border-black border-2">
                    <th className="border-black border-2 p-1">সাল</th>
                    <th className="border-black border-2 p-1">পদক ও স্বীকৃতি</th>
                  </tr>
                  <tr className="border-black border-2 p-2">
                    <td className="border-black border-2 p-2">2024</td>
                    <td className="border-black border-2 p-2">World Health Organization</td>
                  </tr>
                  <tr className="border-black border-2 p-2">
                    <td className="border-black border-2 p-2">2023</td>
                    <td className="border-black border-2 p-2">First at Dhaka Board in SSC Exam</td>
                  </tr>
                  <tr className="border-black border-2 p-2">
                    <td className="border-black border-2 p-2">2022</td>
                    <td className="border-black border-2 p-2">First at Dhaka Board in HSC Exam</td>
                  </tr>
                  <tr className="border-black border-2 p-2">
                    <td className="border-black border-2 p-2">2021</td>
                    <td className="border-black border-2 p-2">First at Dhaka Board in HSC Exam</td>
                  </tr>
                  <tr className="border-black border-2 p-2">
                    <td className="border-black border-2 p-2">2020</td>
                    <td className="border-black border-2 p-2">First at Dhaka Board in HSC Exam</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
};

export default achievement;
