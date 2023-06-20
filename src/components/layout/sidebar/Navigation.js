import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import Image from "next/image";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ isOpen, setTab, menu }) => {
  return (
    <motion.ul
      variants={variants}
      className="flex flex-col items-center justify-center "
    >
      {isOpen && (
        <motion.div
          className="flex flex-col items-center justify-center box "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="">
            <Image
              src="/profile.jpg"
              width={150}
              height={150}
              alt="Picture of the author"
              className="rounded-full drop-shadow-lg"
            />
          </div>

          <p className="py-6">MR.PICHET STATANAKO</p>
        </motion.div>
      )}
      {menu?.map((item, i) => {
        return <MenuItem item={item} key={i} setTab={setTab} />;
      })}
    </motion.ul>
  );
};

export default Navigation;
