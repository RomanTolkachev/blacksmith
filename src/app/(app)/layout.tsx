import { Footer } from "@/shared/ui/footer";
import { ClientHeaderWrapper } from "@/shared/ui/header/ClientHeaderWrapper";
import { Header } from "@/shared/ui/header/Header";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-svh grid grid-rows-[auto_1fr_auto]">
            <Header className="bg-transparent -mb-12"/>
            <ClientHeaderWrapper className="bg-background border-b-1"/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout