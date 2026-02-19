"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {children}
        </motion.div>

        <motion.div
          className="pointer-events-none fixed inset-0 z-9999 bg-black"
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1, transformOrigin: "top" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="pointer-events-none fixed inset-0 z-9999 bg-black"
          initial={{ scaleY: 1, transformOrigin: "bottom" }}
          animate={{ scaleY: 0, transformOrigin: "bottom" }}
          exit={{ scaleY: 0 }}
          transition={{ delay: 0.35, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
