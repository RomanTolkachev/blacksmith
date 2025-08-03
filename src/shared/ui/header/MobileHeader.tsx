"use client"

import { CircleQuestionMark, LocateFixed, Menu, Phone } from "lucide-react"
import { FC } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../open-burger/sheet"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion/accordion"
import { services } from "../../config"
import Link from "next/link"
import { Logo } from "../logo"

export const MobileHeader: FC = () => {
    return (
        <div className="flex justify-between md:hidden h-22 w-full items-center">
            <div className="p-8"><Logo /></div>
            <Sheet>
                <SheetTrigger asChild>
                    <div className="p-8"><Menu /></div>
                </SheetTrigger>
                <SheetContent onOpenAutoFocus={(e) => e.preventDefault()} className="px-10" side="right">
                    <DialogTitle className='hidden' />
                    <Accordion collapsible type="single" className="pt-20 [&_button]:!text-base [&_div]:text-muted-foreground [&_svg]:text-muted-foreground [&_button]:text-foreground">
                        <a href="tel:+1234567890" className="block w-full">
                            <AccordionItem value="item-1" className="flex justify-between items-center transition-colors">
                                <AccordionTrigger className="[&_>svg]:hidden flex-1 text-left">
                                    Позвонить
                                </AccordionTrigger>
                                <Phone size={20} className="!text-muted-foreground" />
                            </AccordionItem>
                        </a>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Изделия</AccordionTrigger>
                            {services.map((service) => (
                                <SheetClose asChild key={service.href}>
                                    <Link href={`/services/${service.href}`}>
                                        <AccordionContent className="pl-5 [&_*]:!text-foreground border-none">
                                            {service.name}
                                        </AccordionContent>
                                    </Link>
                                </SheetClose>
                            ))}
                        </AccordionItem>
                        <SheetClose asChild>
                            <Link href="/contacts">
                                <AccordionItem className="flex justify-between items-center" value="item-3">
                                    <AccordionTrigger className="[&_>svg]:hidden">Мы на карте</AccordionTrigger>
                                    <LocateFixed size={20} />
                                </AccordionItem>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/about">
                                <AccordionItem className="flex justify-between items-center" value="item-4">
                                    <AccordionTrigger className="[&_>svg]:hidden">О нас</AccordionTrigger>
                                    <CircleQuestionMark size={20} />
                                </AccordionItem>
                            </Link>
                        </SheetClose>
                    </Accordion>
                </SheetContent>
            </Sheet>
        </div>
    )
}