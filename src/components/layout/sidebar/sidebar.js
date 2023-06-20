"use client";
import * as React from "react";
import { useRef, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebarStyle = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = (props) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { isOpen, toggleOpen, setTab, menu } = props;

  return (
    <>
      <motion.div className="">
        <motion.nav
          initial={true}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className={`${isOpen && "shadow-lg"} `}
        >
          <motion.div className="background" variants={sidebarStyle} />
          <Navigation isOpen={isOpen} setTab={setTab} menu={menu} />
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
          <motion.div hidden={!isOpen} className="p-1 shadow-sm copyright">
            © Create By Pichet(FE)
          </motion.div>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
