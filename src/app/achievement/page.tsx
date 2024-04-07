import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";

const achievement = () => {
  return (
    <div>
      <Header />
      <div className="mb-10 items-center">
        <div className="w-64 mx-auto py-10">
          <h3 className="text-xl font-semibold border-y-4 text-center py-3">
            Achievement
          </h3>
        </div>
        <h1 className="justify-center text-center font-bold text-2xl pb-3 underline">
          খ্যাতি ও কৃতি
        </h1>

        <table className="w-[600px] mx-auto py-10 border text-center ">
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
      <Footer />
    </div>
  );
};

export default achievement;
