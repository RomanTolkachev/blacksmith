"use client"

import { Hammer } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

function ServiceItem({ title, description, index }: { title: string; description: string; index: number }) {
    return (
        <motion.li 
            className="flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }}
        >
            <span className="mt-0.5 size-5 rounded-full w-fit h-fit bg-primary/10 p-1 text-primary">
                <Hammer />
            </span>
            <div>
                <p>{title}</p>
                <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
            </div>
        </motion.li>
    );
}

export const ServicesTable: FC = () => {
    const services = [
        [
            { title: "Балконы и ограждения", description: "Надёжная защита с художественной ковкой" },
            { title: "Перила и лестницы", description: "Безопасность с индивидуальным дизайном" },
            { title: "Ворота и калитки", description: "Элегантные решения для въезда" },
            { title: "Мангалы и печи", description: "Долговечные изделия для отдыха" }
        ],
        [
            { title: "Навесы и козырьки", description: "Защита от непогоды с элементами декора" },
            { title: "Беседки", description: "Уютные металлические конструкции" },
            { title: "Решётки", description: "Защитные изделия с художественным узором" },
            { title: "Реставрация", description: "Восстановление старинных кованых изделий" }
        ]
    ];

    return (
        <article>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Наши услуги
            </motion.h2>
            <div className="grid gap-4 lg:grid-cols-2">
                {services.map((column, colIndex) => (
                    <motion.ul 
                        key={colIndex}
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {column.map((service, index) => (
                            <ServiceItem 
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                index={colIndex === 0 ? index : index + column.length}
                            />
                        ))}
                    </motion.ul>
                ))}
            </div>
        </article>
    )
}