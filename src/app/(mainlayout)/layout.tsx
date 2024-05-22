import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/NavBar/NavBar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
     <NavBar/>
      {children}
      <Footer />
    </>
  );
};

export default layout;
