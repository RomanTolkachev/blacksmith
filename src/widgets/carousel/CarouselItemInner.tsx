import { FC } from "react";
import Image from 'next/image'
import { Card, CardContent } from "./card";
import { TCarouselItemData } from "./model";
import { PT_Serif } from "next/font/google";

type Props = {
    carouselData: TCarouselItemData
}

const ptSerif = PT_Serif({
    weight: ["400", "700"],
    subsets: ['cyrillic']
})

export const CaraouselItemInner: FC<Props> = ({ carouselData }) => {
    const { header, img } = carouselData
    return (
        <Card className="relative h-full w-full group cursor-pointer">
            <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-end p-4 text-white select-none">
                <h3 className={`${ptSerif.className} text-2xl text-card-foreground/70 font-bold font-mono`}>{header}</h3>
            </div>
            <CardContent className="absolute inset-0 w-full overflow-hidden">
                <Image
                    src={img}
                    style={{
                        objectFit: 'cover',
                    }}
                    fill
                    alt=""
                    className="object-cover transition-transform duration-400 group-hover:scale-102 object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent via-50%" />
            </CardContent>
        </Card>
    )
}