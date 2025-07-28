'use client'

import dynamic from "next/dynamic"
import { FC } from "react"
import { config } from "./config"
import { Skeleton } from "@/shared/ui/skeleton"

export const ClientMap: FC = () => {
    const ResolvedMap = dynamic(
        () => import('@/shared/ui/yandex-map').then((mod) => mod.YandexMap),
        { ssr: false, loading: () => <Skeleton className="h-full w-full" /> }
    )

    return (
        <div className="h-full w-full overflow-hidden">
            <ResolvedMap config={config} />
        </div>
    )

}