import { FC } from "react";
import { ServicesTable } from "./ServicesTable";
import { BlockWithImage } from "@/shared/ui/block-with-image/BlockWithImage";
import { TEAM_DATA, WHY_US_DATA } from "./config";

export const About: FC = () => {
    return (
        <>
            <section className={`lg:max-w-5xl max-w-sm mx-auto max-sm:px-5`}>
                <BlockWithImage data={TEAM_DATA} />
                <ServicesTable />
                <BlockWithImage data={WHY_US_DATA} />
                
                <article className="pt-4 border-t">
                    <blockquote className="text-lg italic text-center">
                        "Обратитесь к нам — и металл заговорит на языке красоты!"
                    </blockquote>
                </article>
            </section>
        </>
    )
}