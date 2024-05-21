import DashBoardSidebar from "@/components/shared/DashBoard/DashBoardSidebar/DashBoardSidebar";
import React, { ReactNode } from "react";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
