'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  "Ilmu itu ibarat cahaya, semakin kita bagikan, semakin terang dunia ini.",
  "Bahasa adalah jendela peradaban, pahami maka engkau akan mengerti.",
  "Setiap kata memiliki makna, dan setiap makna memiliki kekuatan.",
  "Belajar tidak pernah mengenal kata terlambat, teruslah mencari ilmu.",
  "Gunakan kata dengan bijak, karena kata bisa membangun atau menghancurkan."
];

export default function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full  text-white py-3 text-center mt-auto">
      <motion.p 
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="italic text-lg text-black  px-4"
      >
        {quotes[index]}
      </motion.p>
      <p className="text-sm text-black mt-2">
        &copy; {new Date().getFullYear()} KamusJawa. All rights reserved.
      </p>
    </footer>
  );
}
