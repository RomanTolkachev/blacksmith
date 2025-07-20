"use client"

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { FC } from "react";

type Props = {
    className: string
}

export const MainForm: FC<Props> = ({ className }) => {
    return (
        <Card className={`${className}`}>
            <CardHeader className="text-foreground">
                <CardTitle>
                    Кузница
                </CardTitle>
                <CardDescription>
                    тут адрсес кузницы
                </CardDescription>
            </CardHeader>
            <CardContent className="shrink grow">
                Тут сделать форму для ТГ
            </CardContent>
            <CardFooter>
                <Button className="w-full" disabled={false}>заказать проект</Button>
            </CardFooter>
        </Card>
    )
}