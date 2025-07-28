import { services } from "@/shared/config";
import { FC } from "react"

type Props = {
    params: Promise<{ service: string }>
}

const Page: FC<Props> = async ({ params }) => {

    const { service } = await params;
    return (
        <div className="bg-red-200 w-full">я страничка</div>
    )
}

export default Page;