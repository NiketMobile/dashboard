import React, { useState } from 'react';
import Link from 'next/link';
import { listData } from '@/utils/constants';
import SideBarItem from './sideBarItem';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    return (
        <div className="lg:hidden sticky top-0 z-50 bg-white shadow-sm">
            <nav className="flex items-center justify-between p-4">
                <Link href="/dashboard" className="text-xl font-bold">
                    Home
                </Link>
                {/* <div className="flex">
                    <Link href="/" className="px-4 hover:bg-gray-100 rounded">
                        Home
                    </Link>
                    <Link href="/" className="px-4 hover:bg-gray-100 rounded">
                        About
                    </Link>
                    <Link href="/" className="px-4 hover:bg-gray-100 rounded">
                        Contact
                    </Link>
                </div> */}

                <div className="flex">
                    {listData.map((item,index) => (
                        <div key={index} className='flex flex-row'>
                            <div className='px-4 hover:bg-gray-100 rounded'>
                                <Link href={`/${item.path}`}>{item.text}</Link>
                            </div>
                        </div>
                    ))}
                </div>

            </nav>

        </div>
    );
}