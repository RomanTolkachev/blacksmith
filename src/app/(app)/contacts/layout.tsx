import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <section className="h-[calc(100svh-5.5rem)] sm:h-[calc(100svh-3rem)] w-screen py-5 relative overflow-hidden pt-22 sm:pt-17">
            <div className="overflow-hidden h-full no-scrollbar mx-auto px-10">
                {children}
            </div>
        </section>
    )
}

export default Layout;