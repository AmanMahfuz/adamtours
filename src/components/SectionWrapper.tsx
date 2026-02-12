import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
}
