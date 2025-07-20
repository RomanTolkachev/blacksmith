import { Footer } from "@/shared/ui/footer";
import { Header } from "@/shared/ui/header";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-svh grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout