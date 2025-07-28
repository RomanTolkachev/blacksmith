import { FC } from "react";
import { ClientMap } from "@/widgets/client-ymap";

const Page: FC = () => {

    return (
        <div className="h-full overflow-hidden flex ">
            <h2 className="basis-1/2 h-fit text-center">Наши контакты</h2>
            <div className="shrink grow"><ClientMap /></div>
        </div>
    )
}

export default Page