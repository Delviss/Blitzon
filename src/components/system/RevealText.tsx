"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type Props = {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  stagger?: number;
};

const container: Variants = {
  hidden: {},
  show: (custom: number = 0.04) => ({
    transition: { staggerChildren: custom, delayChildren: 0.05 }
  })
};

const word: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export default function RevealText({
  children,
  className,
  as = "span",
  delay = 0,
  stagger = 0.05
}: Props) {
  const Tag = as as any;
  const words = children.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={container}
        custom={stagger}
        transition={{ delay }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="relative mr-[0.25em] inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.06em" }}
          >
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
