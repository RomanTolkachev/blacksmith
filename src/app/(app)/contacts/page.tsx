import { FC } from "react";
import { ClientMap } from "@/widgets/client-ymap";

const Page: FC = () => {

    const list: { top: string, bottom: string }[] = [
        {
            top: "Коломна, ул. Астахова, 14",
            bottom: "адрес"
        },
        {
            top: "+7 926 987 09 96",
            bottom: "телефон"
        },
        {
            top: "c 10:00 по 19:00, пн-пт",
            bottom: "часы работы"
        }
    ]

    return (
        <div className="h-full w-full relative overflow-hidden grid grid-rows-[1fr_2fr] grid-cols-1 md:grid-rows-1 md:grid-cols-2 2xl:grid-cols-[1fr_2fr] place-items-center">
            <article className="mb-0 max-md:absolute bottom-0 left-0 z-20 bg-background w-full md:w-fit pt-3 px-5">
                <h2 className="h-fit text-center max-sm:!mb-2 max-md:hidden">Контакты</h2>
                <ul className="space-y-1 md:space-y-3 m-auto max-sm:mb-2 ">
                    {list.map((item, key) => (
                        <li key={key} className="flex items-start">
                            <div className="flex-1">
                                <p className="font-medium">{item.top}</p>
                                <p className="text-muted-foreground text-sm sm:text-base">{item.bottom}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            <div className="w-full h-full max-md:absolute inset-0 z-10 md:rounded-xl overflow-hidden"><ClientMap /></div>
        </div>
    )
}

export default Page