import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {usePathname} from "next/navigation";
import CustomLayout from "@/components/CustomLayout";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <CustomLayout>
            {children}
        </CustomLayout>
        </body>
        </html>
    )
}
