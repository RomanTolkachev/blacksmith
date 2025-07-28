import { FC, PropsWithChildren } from "react";
import { services } from "@/shared/config";
import { Sidebar } from "@/shared/ui/sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <section className="h-[calc(100svh-5.5rem)] sm:h-[calc(100svh-3rem)] py-5 relative overflow-hidden pt-22 sm:pt-17 grid grid-cols-[auto] md:grid-cols-[auto_1fr] bg-black/40">
            <Sidebar className="hidden lg:px-10 md:flex" items={services} />
            <div className="md:hidden h-12 bg-red-200 mb-5">тут лелект</div>
            <div className="overflow-hidden h-full no-scrollbar mx-auto">
                {children}
            </div>
        </section>
    )
}

export default Layout;