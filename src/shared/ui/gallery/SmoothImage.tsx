"use client";

import { FC, useState } from 'react';
import Image from 'next/image';
import { TImage } from "./Gallery";
import { Skeleton } from '../skeleton';

type Props = {
    image: TImage,
};

export const SmoothImage: FC<Props> = ({ image }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div 
            className="relative"
            style={{ aspectRatio: `${image.width}/${image.height}` }}
        >
            <Image
                src={image.src}
                alt="img"
                fill
                className={`object-cover transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
            />

            {!isLoaded && (
                <Skeleton className="h-full w-wull" />
            )}
        </div>
    );
};