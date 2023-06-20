"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/layout/sidebar/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Home from "../../components/home/page";
import About from "../../components/about/page";
import Contact from "../../components/contact/page";
import Experience from "../../components/experience/page";
import Skill from "../../components/skill/page";

function HomePage(props) {
  const { tab, isOpen } = props;
  const [count, setCount] = useState(true);

  // useEffect(() => {
  //   console.log("tab", tab);
  //   renderContent(tab);
  // }, [count]);

  const renderContent = (tab) => {
    console.log("tab", tab.id);
    switch (tab?.id) {
      case 1:
        return <Home />;
        break;
      case 2:
        return <About />;
        break;
      case 3:
        return <Skill />;
        break;
      case 4:
        return <Experience />;
        break;
      case 5:
        return <Contact />;
        break;
      default:
        return <Home />;
    }
  };

  // const variants = {
  //   enter: (direction) => {
  //     return {
  //       x: !direction ? 100 : -100,
  //       opacity: 0,
  //     };
  //   },
  //   center: {
  //     zIndex: 1,
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: (direction) => {
  //     console.log("direction exit", direction);

  //     return {
  //       zIndex: 0,
  //       x: direction ? 100 : -100,
  //       opacity: 0,
  //     };
  //   },
  // };

  const variants = {
    enter: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div className="flex items-center justify-center content">
      <AnimatePresence>
        <motion.div
          exit="exit"
          initial="enter"
          animate="center"
          variants={variants}
          custom={tab?.id}
          className="flex justify-center "
        >
          {count && <motion.div>{renderContent(tab)}</motion.div>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
