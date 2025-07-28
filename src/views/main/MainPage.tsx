import { FC } from "react";
import { Background } from "../../shared/ui/Background";
import { MainForm } from "@/features/MainForm";
import { CarouselWidget } from "@/widgets/carousel";
import { About } from "./About";


export const MainPage: FC = () => {
    return (
        <>
            <section className={`relative h-svh flex items-center justify-center sm:justify-start`}>
                <Background />
                <MainForm className="max-w-xs h-fit min-h-80 ml-0 sm:ml-30" />
            </section>
            <section className="py-10 max-sm:px-5 ">
                <h2 className={`!font-black-ops-one mb-10 w-fit mx-auto`}>Наши работы</h2>
                <CarouselWidget className="lg:max-w-5xl sm:max-w-xl xs:max-w-3xl max-w-sm"/>
            </section>
            <About/>
        </>
    )
}