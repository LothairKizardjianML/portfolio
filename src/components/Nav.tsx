"use client";

import { motion } from "framer-motion";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-background/60 border-b border-white/5"
    >
      <a href="/" className="font-mono text-sm tracking-tight">
        lk<span className="text-accent">.</span>
      </a>
      <ul className="flex gap-6 text-sm text-muted">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
