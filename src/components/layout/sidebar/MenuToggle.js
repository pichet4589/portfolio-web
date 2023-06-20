import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 25%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <>
      <button onClick={toggle}>
        <div className="flex justify-center ">
          <svg width={25} height={25} viewBox="0 0 24 24">
            <Path
              variants={{
                closed: { d: "M 2 3.5 L 20 3.5" },
                open: { d: "M 2 20 L 17 3.5" },
              }}
            />
            <Path
              d="M 2 11.623 L 20 11.623"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 20 L 20 20" },
                open: { d: "M 2 3.5 L 17 20" },
              }}
            />
          </svg>
        </div>
      </button>
    </>
  );
};

export default MenuToggle;
