"use client"

import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import MobileNav from '@/components/mobileNav';
import SideBar from '@/components/sideBar';
import React from 'react';

export default function DashboardLayout({ children }) {


  return (
    <div className="min-h-screen xl:flex bg-gray-100">
      <ClientLayoutWrapper>
        <div className="md:block lg:hidden">
        <MobileNav />
        </div>
        <div className="hidden md:hidden lg:block">
          <SideBar />
        </div>
        <div className={`mx-auto max-w-(--breakpoint-2xl)`}>{children}</div>
      </ClientLayoutWrapper>
    </div>
  );
}

