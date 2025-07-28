"use client"

import { useScroll, useMotionValueEvent, motion, AnimatePresence, MotionProps } from "motion/react";
import { FC, useState } from "react";
import { Header } from "./Header";

type Props = {
    className?: string
}

export const ClientHeaderWrapper: FC<Props> = ({ className }) => {

    const { scrollY } = useScroll()

    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const shouldBeVisible = latest > 60;
        if (shouldBeVisible !== isScrolled) {
            setIsScrolled(shouldBeVisible);
        }
    });

    const motionProps: MotionProps = {
        initial: { opacity: 0.01, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    }

    return (
        <AnimatePresence mode="wait">
            {isScrolled && (
                <motion.div {...motionProps} className="fixed top-0 w-full z-40">
                    <Header className={`${className}`} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
