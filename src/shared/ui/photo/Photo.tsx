import { FC } from "react";
import { TGalleryItem } from "@/shared/config";
import Image from "next/image";

type Props = {
    photo: TGalleryItem
}

export const Photo: FC<Props> = ({ photo }) => {

    return (
        <div className="relative w-full h-auto" style={{
            maxHeight: '90vh', // Ограничиваем максимальную высоту
            aspectRatio: `${photo.width}/${photo.height}`
        }}>
            <Image
                alt=""
                fill
                src={photo.src}
                style={{
                    objectFit: 'contain', // Сохраняем пропорции
                }}
                sizes="100vw" // Оптимизация для разных экранов
            />
        </div>
    )
}