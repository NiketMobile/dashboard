// import SideBar from '@/components/sideBar';
// import React from 'react';

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen xl:flex">
//       <SideBar />
//       {children}
//     </div>
//   );
// }

"uswe client"

import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import SideBar from '@/components/sideBar';
import React from 'react';

export default function DashboardLayout({ children }) {


  return (
    <div className="min-h-screen xl:flex">
      <ClientLayoutWrapper>
        <SideBar />
        <div className={`p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6`}>{children}</div>
      </ClientLayoutWrapper>
    </div>
  );
}

