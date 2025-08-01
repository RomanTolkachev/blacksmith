import { Photo } from "@/shared/ui/photo";
import { FC } from "react";
import { notFound } from "next/navigation";
import { services } from "@/shared/config";

type Props = {
    params: Promise<{ photo: string }>
}

const Page: FC<Props> = async ({ params }) => {

    const { photo } = await params;

    if (!photo) {
        return notFound()
    }

    const foundGalleryItem = services
        .flatMap(service => service.galleryPaths || [])
        .find(item => item.src.includes(photo));


    if (!foundGalleryItem) {
        return notFound()
    }

    return (
        <Photo photo={foundGalleryItem} />
    )
}

export default Page