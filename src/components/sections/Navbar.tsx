import { motion } from "framer-motion";
import { BrandLogo } from "@/components/icons/BrandLogo";

/** Smooth-scrolls to the section with the given id (About/Portfolio headings carry matching ids). */
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Top-left "Bio / Portfolio" text links. */
export function NavLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="[word-break:break-word] absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[30px] items-center leading-[normal] left-[50px] not-italic text-[#d5cdc4] text-[16px] top-[50px] whitespace-nowrap"
    >
      <motion.p
        onClick={() => scrollToSection("about")}
        whileHover={{ y: -2, opacity: 0.7 }}
        transition={{ duration: 0.2 }}
        className="relative shrink-0 cursor-pointer"
      >
        Bio
      </motion.p>
      <motion.p
        onClick={() => scrollToSection("portfolio")}
        whileHover={{ y: -2, opacity: 0.7 }}
        transition={{ duration: 0.2 }}
        className="relative shrink-0 cursor-pointer"
      >
        Portfolio
      </motion.p>
    </motion.div>
  );
}

/** Full top navigation bar: left text links, centered brand mark, right "Blog" link. */
export function Navbar() {
  return (
    <>
      <NavLinks />
      <BrandLogo />
      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2, opacity: 0.7 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1352px] not-italic text-[#d5cdc4] text-[16px] top-[50px] whitespace-nowrap cursor-pointer"
      >
        Blog
      </motion.p>
    </>
  );
}
