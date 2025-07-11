import SideBar from '@/components/sideBar';
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
