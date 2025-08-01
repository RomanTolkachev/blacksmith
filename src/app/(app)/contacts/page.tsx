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
        <div className="h-full w-full overflow-hidden grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 2xl:grid-cols-[1fr_2fr] place-items-center">
            <article className="mb-0">
                <h2 className="h-fit text-center">Контакты</h2>
                <ul className="space-y-3 m-auto w-fit">
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
            <div className="w-full h-full"><ClientMap /></div>
        </div>
    )
}

export default Page