"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["My Nickname is Ball.", " Programer", " Front End Developer!"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className=" text-cyan-100">
      <h1 className="text-6xl">PICHET SATTANAKO </h1>
      <div className="py-4 text-lg">
        <span className="ml-1 ">I am </span>
        <span ref={typedRef} />
      </div>
    </div>
  );
};

export default TypedText;
