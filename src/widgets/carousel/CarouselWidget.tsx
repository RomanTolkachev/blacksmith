"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel/carousel_shadcn';
import Autoplay from 'embla-carousel-autoplay';
import { FC, useRef } from 'react';
import { CaraouselItemInner } from './CarouselItemInner';
import { CarouselData } from "./config"
import Link from 'next/link';

export const CarouselWidget: FC<{ className?: string }> = ({ className }) => {

    const plugin = useRef(
        Autoplay({
            delay: 4500,
            stopOnInteraction: false, // Не останавливаться полностью при взаимодействии
            stopOnMouseEnter: true,  // Пауза при наведении
            stopOnFocusIn: true,     // Пауза при фокусе (например, на кнопках)
        }),
    )

    return (
        <Carousel opts={{ loop: true, align: "start", }} plugins={[plugin.current]} className={`${className} w-full mx-auto max-xl:overflow-hidden`}>
            <CarouselContent className='-ml-10 h-full'>
                {CarouselData.map((slide, key) => (
                    <CarouselItem key={key} className='md:basis-1/2 lg:basis-1/3 pl-10 h-80'>
                        <Link href={slide.link}>
                            <CaraouselItemInner carouselData={slide} />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <Carousel />
        </Carousel>
    )
}