import { FC } from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../navigation-menu/navigation-menu"
import Link from "next/link"
import { services } from "../../config"
import { MobileHeader } from "./MobileHeader"

type Props = {
    className?: string
}

export const Header: FC<Props> = ({ className }) => {
    return (
        <header className={`${className} transition-colors duration-300 w-full sm:h-12 z-40 flex items-center sm:px-10`}>
            <NavigationMenu viewport={false} className="hidden sm:block">
                <NavigationMenuList className="!text-foreground [&_*]:!text-lg">
                    <NavigationMenuItem asChild>
                        <Link className="px-4" href='/'>
                            КорнеевКовка
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">
                            Изделия
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                {services.map((item, key) => (
                                    <li key={key}>
                                        <NavigationMenuLink asChild key={key}>
                                            <Link className="text-nowrap" href={`/services/${item.href}`}>{item.name}</Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                        <Link href='/contacts'>
                            Контакты
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                        <Link href='/about'>
                            О нас
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <MobileHeader />
        </header>
    )
}