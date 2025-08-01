import { services } from "@/shared/config"
import { Gallery } from "@/shared/ui/gallery"
import { MobileSelect } from "@/shared/ui/select"
import { Sidebar } from "@/shared/ui/sidebar"
import { notFound } from "next/navigation"
import { FC } from "react"

type Props = {
    params: Promise<{ service: string }>
}

const Page: FC<Props> = async ({ params }) => {

    const { service } = await params;

    const serviceData = services.find(item => item.href === service)

    if (!serviceData) {
        return notFound()
    }

    const routes: Record<string, string> = Object.fromEntries(services.map(service => [service.href, service.name]))

    return (
        <>
            <Sidebar className="hidden lg:px-10 md:flex" items={services} />
            <div className="md:hidden px-4 mb-2">
                <MobileSelect values={routes} currentValue={service} />
            </div>
            <div className="overflow-hidden h-full w-full no-scrollbar mx-auto max-sm:px-2 px-5">
                <div className="max-h-full w-full overflow-y-auto mx-auto red-scrollbar">
                    <Gallery images={serviceData.galleryPaths} />
                </div>
            </div>
        </>
    )
}

export default Page