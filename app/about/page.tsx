"use client";

import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import { useEffect, useState } from "react";

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <>
      <Navbar />
      <div className="w-full h-112 flex items-center mt-12 flex-col text-center border-b-1 border-white px-8">
        <h1 className={`text-6xl font-bold text-white max-w-2xl leading-tight ${fadeUp("delay-0")}`}>
          Hi, I'm Andrie Elbambuena.
        </h1>
        <p className={`text-lg text-gray-400 font-bold mt-6 max-w-2xl leading-relaxed ${fadeUp("delay-150")}`}>
          I'm a full-stack developer who builds responsive web and mobile applications from scratch,
          focusing on clean code, solid database architecture, and smooth user experiences.
        </p>
      </div>  
      <About />
      <Footer />
    </>
  );
}