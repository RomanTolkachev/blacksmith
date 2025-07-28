import { services } from "@/shared/config"
import { Gallery } from "@/shared/ui/gallery"

export default async function Page({ params }: { params: { service: string } }) {
    const serviceData = services.find(item => item.href === params.service)

    if (!serviceData) {
        return <div>Service not found</div>
    }

    return (
        <div className="max-h-full w-fit overflow-y-auto mx-auto red-scrollbar">
            <Gallery images={serviceData.galleryPaths} />
        </div>
    )
}