'use client';

import {usePathname} from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";

type CustomLayoutProps = {
    children: React.ReactNode,
}

const CustomLayout = (props: CustomLayoutProps) => {
    const path = usePathname();
    let isDashboard = path.includes('/dashboard');
    return (
        <>
            {
                isDashboard &&
                <DashboardLayout>
                    {props.children}
                </DashboardLayout>
            }
            {
                !isDashboard &&
                props.children
            }
        </>
    );
};

export default CustomLayout;