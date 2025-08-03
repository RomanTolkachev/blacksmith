import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children}) => {

    return (
        <section className="h-[calc(100svh-5.5rem)] md:h-[calc(100svh-3rem)] py-5 relative overflow-hidden pt-22 md:pt-17 grid grid-cols-[auto] md:grid-cols-[auto_1fr] bg-black/40">
            {children}
        </section>
    )
}

export default Layout;