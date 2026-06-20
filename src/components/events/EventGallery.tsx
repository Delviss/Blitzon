"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/media/openday/visual-3.webp", alt: "Sales Challenge Roleplay beim BlitzON Open Day", className: "sm:col-span-2 sm:row-span-2" },
  { src: "/media/openday/visual-6.webp", alt: "Training Session bei BlitzON", className: "row-span-2" },
  { src: "/media/openday/visual-1.webp", alt: "BlitzON Tag 2026 Ankündigung" },
  { src: "/media/openday/visual-5.webp", alt: "Was passiert bei BlitzON" },
  { src: "/media/openday/visual-7.webp", alt: "Starkes Team bei BlitzON", className: "row-span-2" },
  { src: "/media/openday/visual-2.webp", alt: "BlitzON Open Day Einladung" },
  { src: "/media/openday/visual-4.webp", alt: "Energie Check und Sales Challenge" }
];

export default function EventGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {galleryImages.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 ${img.className ?? ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}
