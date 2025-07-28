"use client"

import { DataItem } from "@/shared/config";
import { motion } from "motion/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";
import Image from 'next/image'

type Props = {
    items: DataItem[]
    className?: string
}

export const Sidebar: FC<Props> = ({ items, className }) => {

    const { service } = useParams<{ service: string }>();

    return (
        <aside className={`${className} max-w-md flex flex-col items-between`}>
            <ul className=" text-lg">
                {items.map((item, key) => (
                    <li className={`${service === item.href ? "text-chart-3" : ""} transition-colors px-8 py-2 font-pt-serif cursor-pointer`} key={key}>
                        <Link href={`/services/${item.href}`}>
                            <motion.span
                                className="block"
                                whileHover={{ scale: 1.05 }}>
                                {item.name}
                            </motion.span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="relative ml-10 aspect-square flex items-center justify-center mt-auto">
                <Image quality={100} style={{objectFit: "cover"}} fill alt=""src="/farrier-3.png"/>
            </div>
        </aside>
    )
}