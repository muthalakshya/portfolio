// import React from "react";
// import { motion } from "framer-motion";

// const Texttransition = ({ text }) => {
//   const containerVariants = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1, // Delay between each letter
//       },
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       style={{ display: "inline-flex" }}
//     >
//       {text.split("").map((letter, index) => (
//         <motion.span key={index} variants={letterVariants} style={{ margin: "0 2px" }}>
//           {letter}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default Texttransition;


import { useState, useEffect } from 'react';

const Texttransition = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Texttransition;
