import { FC } from "react"

type Props = {
    className?: string
}

export const Header: FC<Props> = ({ className }) => {
    return (
        <header className={`${className} transition-colors duration-300 w-full h-12`}>я хедер</header>
    )
}