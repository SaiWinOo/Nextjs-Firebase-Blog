'use client';
import React, {useState} from "react";
import {Bars2Icon} from "@heroicons/react/20/solid/index.js";
import Link from "next/link";
import links from "@/app/dashboard/links";
import DynamicComponent from "@/components/common/DynamicComponent";
import {usePathname} from "next/navigation";

type DashboardLayoutProps = {
    children : React.ReactNode,
}

const DashboardLayout = (props : DashboardLayoutProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const path = usePathname();
    return (
        <div className="adminlayout bg-gray-100 min-h-screen flex flex-col">
            <div
                className={'fixed z-40 inset-0 bg-black/50 transition-opacity ' + [isOpen ? 'opacity-100 select-auto pointer-events-auto' : 'opacity-0 select-none pointer-events-none']}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={"admin-sidebar bg-white border-r flex flex-col justify-between w-[80%] pb-1 fixed z-40 h-screen overflow-hidden transition-all duration-300 tablet:w-[50%] md:z-10 md:left-0 md:w-[259px] " + [isOpen ? 'left-0' : '-left-full']}
            >
                <div>
                    <header>
                        <div
                            className="flex items-center gap-3 px-7 h-[80px] mb-4"
                        >

                            <div>
                                <h4 className="text-base font-medium line-clamp-1">
                                    User Name
                                </h4>
                                <p className="text-xs w-[173px] truncate pr-[15px] text-gray-500">
                                    User Email
                                </p>
                            </div>
                        </div>
                    </header>

                    <ul
                        className="admin-sidenav space-y-2 pl-3 pr-2 overflow-auto custom-scrollbar"
                    >
                        {links.map(link => (
                            <li key={link.title}>
                                <Link
                                    href={link.link}
                                    className={`text-[15px] cursor-pointer flex gap-2 w-full px-4 py-3 rounded-md transition hover:bg-secondary ${path === link.link && 'bg-secondary'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <DynamicComponent name={link.icon} className="w-5 h-5"/>
                                    <span className="truncate">
                                        {link.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="px-3">
                    <button
                        onClick={() => console.log('logout')}
                        className="!w-full !bg-rose-100 !text-rose-500 !text-[17px] font-medium hover:!bg-rose-500 hover:!text-white"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            <div
                className="mobile-navbar bg-white shadow-sm h-[69px] flex items-center justify-between fixed z-10 w-full top-0 px-4 py-2 md:hidden">
                <div
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <Bars2Icon/>
                </div>
            </div>

            <main className="primary-content flex-1 p-4 pb-8 mt-[69px] overflow-hidden md:ml-[259px] md:mt-0">
                {props.children}
            </main>

        </div>
    );
};

export default DashboardLayout;

