"use client"

import { FC } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useRouter } from "next/navigation";

type Props = {
    values: Record<string, string>
    currentValue: string
}

export const MobileSelect: FC<Props> = ({currentValue, values}) => {

    const router = useRouter()

    console.log({currentValue, values})


    return (
        <Select value={currentValue} onValueChange={nextValue => router.push(`${nextValue}`)}>
            <SelectTrigger className="w-80">
                <SelectValue placeholder="Выберете значение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    {Object.keys(values).map(item => (
                        <SelectItem key={item} value={item}>
                            <span className='first-letter:capitalize text-muted-foreground'>{values[item]}</span>
                        </SelectItem>)
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}