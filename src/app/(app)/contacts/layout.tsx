import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <section className="h-[calc(100svh-5.5rem)] md:h-[calc(100svh-3rem)] w-screen relative overflow-hidden pt-22 md:pt-17">
            <div className="overflow-hidden h-full no-scrollbar mx-auto md:px-10">
                {children}
            </div>
        </section>
    )
}

export default Layout;