import { FC } from "react";
import { Logo } from "../logo";
import { Phone } from "lucide-react";

export const Footer: FC = () => {
    return (
        <footer className="h-22 sm:h-12 flex justify-between items-center mx-w-full px-6">
            <div className="p-6 md:hidden"><a href="tel:+79269870996"><Phone /></a></div>
            <div className="hidden md:flex">+7 (926) 987 09 96</div>
            <div><Logo /></div>
        </footer>
    )
}