"use client";
import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ item, setTab }) => {
  const style = { border: `2px solid ${item.color}` };

  const handleClick = (item) => {
    setTab(item);
  };

  return (
    <motion.li
      key={item.id}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleClick(item)}
    >
      <div className="icon-placeholder" style={style}>
        {item.icon}
      </div>
      <div className="text-placeholder" style={style}>
        <p>{item.value}</p>
      </div>
    </motion.li>
  );
};

export default MenuItem;
