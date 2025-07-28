import { Footer } from "@/shared/ui/footer";
import { ClientHeaderWrapper } from "@/shared/ui/header/ClientHeaderWrapper";
import { Header } from "@/shared/ui/header/Header";
import { FC, PropsWithChildren } from "react";


const Layout: FC<PropsWithChildren> = async ({ children }) => {

    return (
        <div className="grid grid-rows-[auto_1fr_auto]">
            <Header className="bg-transparent -mb-22 sm:-mb-12" />
            <ClientHeaderWrapper className="bg-background md:border-b-1 md:border-b-muted-foreground" />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout