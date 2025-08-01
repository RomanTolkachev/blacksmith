import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel_shadcn";
import Link from "next/link";
import Image from 'next/image'
import { Card, CardContent } from "../card";

type Props = {
    className?: string
    imagesData: string[]
    height: number
    hoverScale?: boolean
}

export const CarouselComp: FC<Props> = ({ className, imagesData, height, hoverScale = false }) => {
    return (
        <Carousel opts={{ loop: true, align: "start", }} className={`${className} w-full mx-auto max-xl:overflow-hidden`}>
            <CarouselContent className='-ml-10 h-full'>
                {imagesData.map((slide, key) => (
                    <CarouselItem key={key} className={`2xl:basis-1/3 lg:basis-1/2 pl-10 h-${height} relative`}>
                        <Card className="relative h-full w-full group cursor-pointer overflow-hidden">
                            <CardContent className="absolute inset-0 w-full">
                                <Link href={`${slide.split('/').pop()?.replace(/\..*$/, "") || ""}`}>
                                    <Image
                                        src={slide}
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                        fill
                                        alt=""
                                        className={`${hoverScale ? "group-hover:scale-102" : ""} object-cover transition-transform duration-400  object-center`}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={85}
                                    />
                                </Link>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <Carousel />
        </Carousel>
    )
}
