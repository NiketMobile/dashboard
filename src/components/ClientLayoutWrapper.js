'use client';

import { useLayout } from "@/context/layoutContext";

export default function ClientLayoutWrapper({ children }) {
    const { placeExpanded } = useLayout();
    return (
        <div className={`flex-1 transition-all duration-300 ease-in-out ${!placeExpanded ? 'lg:ml-[90px]' : 'lg:ml-[240px]'}`}>
            {children}
        </div>
    );
}
