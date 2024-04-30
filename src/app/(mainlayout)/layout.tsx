import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';

import React, { ReactNode } from 'react';

const layout = ({children}:{children:ReactNode}) => {
    return (
        <div>
     
            {children}
      
        </div>
    );
};

export default layout;