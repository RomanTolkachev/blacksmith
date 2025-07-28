import Image from 'next/image'
import { FC } from 'react'

type Image = { src: string, width: number, height: number }

type Props = {
    images: Image[]
}

export const Gallery:FC<Props> = ({ images }) => {
    return (
        <ul className="h-full px-5 min-h-max w-max mx-auto sm:max-w-md max-[830px]:max-w-[400px] min-[1100px]:max-w-[700px] lg:max-w-xl md:columns-2 xl:max-w-3xl 2xl:max-w-5xl lg:columns-2 2xl:columns-3 gap-4 space-y-4">
            {images.map((img) => (
                <li
                    key={img.src}
                    className="relative rounded-lg overflow-hidden"
                >
                    <Image
                        src={img.src}
                        width={img.width}
                        height={img.height}
                        className="object-cover transition-transform duration-300 scale-101 hover:scale-102 hover:shadow-md"
                        alt=""
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{
                            aspectRatio: `${img.width}/${img.height}`,
                        }}
                    />
                </li>
            ))}
        </ul>
    )
}