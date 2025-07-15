import { useLayout } from '@/context/layoutContext';
import { placeEpanded } from '@/redux/reducers/appReducer';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';


export default function SideBarItem({ item, isExpanded, selectedId, setSelectedId }) {
    const { text, icon, active, alert, options } = item;
    const [open, setOpen] = useState(false);
    const { placeExpanded, togglePlaceExpanded } = useLayout();


    const isItemSelected = selectedId == item.id;

    const handleItemClick = () => {
        setOpen(!open);
        setSelectedId(item.id);
        redirect(`/${item.path}`);
    };

    const handleSubItemClick = (sub) => {
        //     Cookies.remove('authToken')
        //    redirect('/login');
        //     return
        setSelectedId(sub.id);
        console.log('sub--->', JSON.stringify(sub, null, 2))
        redirect(`/${sub.path}`);
    };


    return (
        <div className="w-full mt-3">
            <button
                onClick={() => {
                    if (item.path === null) {
                        setOpen(!open);
                    } else {
                        handleItemClick()
                        togglePlaceExpanded()
                    }
                }}
                className={`flex justify-between items-center w-full px-4 py-3 rounded hover:bg-brand-300 transition-colors ${isItemSelected ? 'bg-brand-400 text-white font-semibold' : 'text-gray-800'
                    }`}
            >
                <div className="flex items-center gap-3">
                    {icon}
                    <span className={`${isExpanded ? 'block' : 'hidden'} text-lg transition-all`}>
                        {text}
                    </span>
                </div>
                {alert && <div className="w-2 h-2 rounded-full bg-red-600"></div>}
            </button>

            {options && open && (
                <ul className="pl-4 mt-2 space-y-1">
                    {options.map((sub) => {
                        const isSubItemSelected = selectedId === sub.id;

                        return (
                            <li key={sub.id}>
                                <button
                                    onClick={() => handleSubItemClick(sub)}
                                    className={`flex items-center gap-3 w-full px-2 py-2 rounded hover:bg-brand-300 transition-colors ${isSubItemSelected
                                        ? 'bg-brand-400 text-white font-semibold'
                                        : 'text-gray-800'
                                        }`}
                                >
                                    {sub.icon}
                                    <span
                                        className={`${isExpanded ? 'block' : 'hidden'} text-sm transition-all`}
                                    >
                                        {sub.text}
                                    </span>
                                    {/* 
                                    {sub.alert && (
                                        <div className="w-2 h-2 rounded-full bg-red-600 ml-auto"></div>
                                    )} */}

                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}

        </div>
    );
}
