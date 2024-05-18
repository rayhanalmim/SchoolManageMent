import DashBoardSidebar from '@/components/shared/DashBoard/DashBoardSidebar/DashBoardSidebar';
import React, { ReactNode } from 'react';


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <DashBoardSidebar />
            {children}

        </div>
    );
};

export default layout;