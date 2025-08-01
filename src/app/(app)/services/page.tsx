import { FC } from "react"

type Props = {
    params: Promise<{ service: string }>
}

const Page: FC<Props> = async () => {

    return (
        <div className="bg-red-200 w-full">я страничка</div>
    )
}

export default Page;