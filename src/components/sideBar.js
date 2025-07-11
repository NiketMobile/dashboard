'use client'
import React, { useState } from 'react'
import { FaAlignLeft, FaAlignRight, FaUser, FaHome, FaBars, FaBell } from 'react-icons/fa';
import SideBarItem from './sideBarItem';
import { useLayout } from '@/context/layoutContext';

export default function SideBar() {
  const listData = [
    {
      id: 1,
      text: 'Dashboard',
      icon: <FaHome />,
      active: true,
      alert: false,
      path: "dashboard",
    },
    {
      id: 2,
      text: 'Menu',
      icon: <FaBars />,
      active: false,
      alert: true,
      options: [
        {
          id: 11, text: 'Sub Menu 1',
          icon: <FaBars />,
          active: false,
          alert: false,
          path: "dashboard",
        },
        {
          id: 12,
          text: 'Sub Menu 2',
          icon: <FaBars />,
          active: false,
          alert: false,
          path: "dashboard",
        },
      ],
    },
    {
      id: 3,
      text: 'Products',
      icon: <FaBell />,
      active: false,
      alert: false,
      path: "products",
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { placeExpanded, togglePlaceExpanded } = useLayout();

  return (
    // <aside className={`h-screen fixed overflow-hidden transition-all border-r border-gray-200 duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}>
    <aside
      className={`
    fixed
    top-0
    left-0
    h-screen
    z-50
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    bg-white
    border-gray-200
    px-5
    mt-16
    flex flex-col
    lg:mt-0
    ${isExpanded ? 'w-64' : 'w-20'}
    -translate-x-full
    lg:translate-x-0
  `}>
      <nav className='h-full flex flex-col justify-between bg-white'>
        <div className={`flex justify-between items-center p-4 border-b border-gray-300 bg-white`}>
          <h1 className={`${isExpanded ? 'block' : 'hidden'} text-lg font-bold text-gray-800`}>Admin Dashboard</h1>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
              togglePlaceExpanded()
            }}
            className="cursor-pointer rounded hover:bg-brand-300 p-2"
          >
            {isExpanded ? <FaAlignRight size={24} color="black" /> : <FaAlignLeft size={24} color="black" />}
          </button>
        </div>

        <div className="flex-1 w-full px-2 overflow-y-auto py-2">
          {listData.map((item) => (
            <SideBarItem
              key={item.id}
              item={item}
              isExpanded={isExpanded}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>

        <div className="border-t border-gray-300 p-4 w-full px-4 py-3 rounded hover:bg-brand-300 transition-colors mb-10">
          <div className="flex items-center space-x-3">
            <FaUser />
            <h2 className={`${isExpanded ? 'block' : 'hidden'} text-gray-800 font-medium`}>User</h2>
          </div>
        </div>

      </nav>
    </aside>
  )
}
