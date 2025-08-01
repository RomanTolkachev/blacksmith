import { services } from "@/shared/config";
import { Modal } from "@/shared/ui/modal";
import { notFound } from "next/navigation";
import { FC } from "react";
import { Photo } from "@/shared/ui/photo";

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
        <Modal>
            <Photo photo={foundGalleryItem}/>
        </Modal>
    )
}

export default Page;