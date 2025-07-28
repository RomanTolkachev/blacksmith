import Image from 'next/image'
import { FC } from 'react'

export const Background: FC = () => {
    return (
        <Image
            style={{
                objectFit: 'cover',
                zIndex: -1
            }}
            fill
            priority
            alt="main_bg"
            src="/main_bg_better_2.webp" />
    )
}

