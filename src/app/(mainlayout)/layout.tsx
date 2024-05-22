import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/NavBar/NavBar";
import Header from "@/components/shared/Header/Header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
     <NavBar/>
     <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
