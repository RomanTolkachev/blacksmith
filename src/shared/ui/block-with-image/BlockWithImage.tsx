import { FC } from "react"

type ListItem = {
    top: string
    bottom: string
}

type Props = {
    className?: string
    data: {
        header: string
        list: ListItem[]
        imgPath: string
    }
}

export const BlockWithImage: FC<Props> = ({ data: { header, imgPath, list }, className }) => {
    return (
        <article className={className}>
            <h2>{header}</h2>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="p-4 h-60 sm:h-80 lg:order-2">
                    <img className="!h-full mx-auto object-contain" src={imgPath} alt="" />
                </div>
                <ul className="space-y-3 h-full my-auto lg:order-1">
                    {list.map((item, key) => (
                        <li key={key} className="flex items-start">
                            <div className="flex-1">
                                <p className="font-medium">{item.top}</p>
                                <p className="text-muted-foreground text-sm sm:text-base">{item.bottom}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}