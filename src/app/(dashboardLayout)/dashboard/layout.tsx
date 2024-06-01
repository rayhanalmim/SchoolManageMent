import React, { ReactNode } from "react";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardDrawer>
      {children}
    </DashboardDrawer>
  )
};

export default layout;
