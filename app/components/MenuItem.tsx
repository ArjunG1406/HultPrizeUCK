import * as React from "react";
import { Cycle, motion } from "framer-motion";
import Link from "next/link";
import Dot from "../(home)/components/dot";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const Links = [
  {
    title: 'HOME',
    link: '#'
  },
  {
    title: 'EXECOM',
    link: '#execom'
  },
  {
    title:' ABOUT',
    link: '#about'
  },
  {
    title: 'CONTACT',
    link: '/#contact'
  }
]
export const MenuItem = ({ i, toggleon }: { i: number, toggleon: Cycle }) => {
  // Add bounds checking
  if (i >= Links.length || i < 0 || !Links[i]) {
    return null; // or return a fallback component
  }

  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.90 }}
      transition={{
        duration: 0.1,
        stiffness: 1,
      }}
      whileHover={{ x: 20 }}
      className="hover:border-b-[0.01rem] w-full
      border-b-[0.01rem] hover:border-zinc-400 border-zinc-200 sm:mt-3 mt-6"
    >
      <Link 
        onClick={() => toggleon()} 
        href={Links[i].link} 
        target={Links[i].link.startsWith("http") ? "_blank" : undefined} 
        className=" text-black w-full md:text-7xl text-5xl mb-5"
      >
        <span className="inline-flex items-end gap-2">
          {Links[i].title}<Dot />
        </span>
      </Link>
    </motion.li>
  );
};
