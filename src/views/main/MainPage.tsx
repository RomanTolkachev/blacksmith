import { FC } from "react";
import { Background } from "./Background";
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
            <section className="py-10">
                <h2 className={`text-4xl mb-10 w-fit mx-auto`}>Наши работы</h2>
                <CarouselWidget className="lg:max-w-5xl sm:max-w-xl xs:max-w-3xl max-w-sm"/>
            </section>
            <About />
        </>
    )
}