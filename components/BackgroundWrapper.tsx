'use client';
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BackgroundWrapper({ children }: {children: ReactNode}) {
    const pathname = usePathname();

    const properPage = pathname.match(/\/(s|S)hop\/((g|G)irls)|((b|B)oys)/);

    return (
        <div className={`${properPage ? 'tieDyeStarBackground' : ''} ps-4`}>
            {children}
        </div>
    )
}