import Link from 'next/link'
import { FC } from 'react'
import { SmoothImage } from './SmoothImage'

export type TImage = { src: string, width: number, height: number }

type Props = {
    images: TImage[]
}

export const Gallery: FC<Props> = ({ images }) => {
    return (
        <ul className="h-full !w-full p-5 min-h-max mx-auto sm:max-w-md max-[830px]:max-w-[400px] min-[1100px]:max-w-[700px] lg:max-w-xl md:columns-2 xl:max-w-3xl 2xl:max-w-5xl lg:columns-2 2xl:columns-3 gap-4 space-y-4">
            {images.map((img) => (
                <li
                    key={img.src}
                    className="relative w-full rounded-lg overflow-hidden transition-all duration-300 ring-0 sm:hover:ring-3 ring-chart-3 hover:shadow-md"
                >
                    <Link href={`/services/${img.src.replace(/\..*$/, "")}`}>
                        <SmoothImage image={img} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}