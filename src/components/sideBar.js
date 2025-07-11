'use client'
import React, { useState } from 'react'
import { FaAlignLeft, FaAlignRight, FaUser, FaHome, FaBars, FaBell } from 'react-icons/fa';
import SideBarItem from './sideBarItem';

export default function SideBar() {
  const listData = [
    {
      id: 1,
      text: 'Dashboard',
      icon: <FaHome />,
      active: true,
      alert: false,
    },
    {
      id: 2,
      text: 'Menu',
      icon: <FaBars />,
      active: false,
      alert: true,
      options: [
        { id: 11, text: 'Sub Menu 1', icon: <FaBars />, active: false, alert: false },
        { id: 23, text: 'Sub Menu 2', icon: <FaBars />, active: false, alert: true },
      ],
    },
    {
      id: 3,
      text: 'Settings',
      icon: <FaBell />,
      active: false,
      alert: false,
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  console.log('selectedId', JSON.stringify(selectedId, null, 2))


  return (
    <aside
      className={`h-screen overflow-hidden transition-all border-r border-gray-200 duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}>

      <nav className='h-full flex flex-col justify-between bg-white'>

        <div className={`flex justify-between items-center p-4 border-b border-gray-300 bg-white`}>
          <h1 className={`${isExpanded ? 'block' : 'hidden'} text-lg font-bold text-gray-800`}>Admin Dashboard</h1>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
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
