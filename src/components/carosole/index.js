"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Awards = () => {
    const education = [
        { degree: "F.sc", year: 2018, subjects: "Biology, Physics, Chemistry" },
        {
            degree: "B.sc",
            year: 2022,
            subjects: "Biochemistry , physical Chemistry , Organic chemistry, ",
        },
        { degree: "MPhil", year: 2024, subjects: "Physical  Chemistry" },
    ];

    const [positionIndex, setPositionIndex] = useState([0, 1, 2]);

    const handlePositionIndex = () => {
        setPositionIndex((prev) => {
            const update = [...prev];
            const last = update.pop(); // Remove the last element
            update.unshift(last); // Add it to the start
            return update;
        });
    };

    const position = ["left", "center", "right"];

    const cardVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left: { x: "-50%", scale: 0.8, zIndex: 2 },
        right: { x: "50%", scale: 0.8, zIndex: 2 },
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
            <h1 className="text-black font-bold text-4xl mb-8">Awards</h1>
            <div className="relative w-full flex justify-center items-center h-80">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute  bg-orange-500 shadow-2xl shadow-slate-500 rounded-xl w-96 h-60 p-4 flex flex-col justify-center items-center"
                        initial="center"
                        animate={position[positionIndex[index]]}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-black text-lg font-semibold">{item.degree}</h1>
                        <h2 className="text-black text-sm">{item.year}</h2>
                        <h3 className="text-white text-sm font-medium">{item.subjects}</h3>
                    </motion.div>
                ))}
            </div>
            <button
                onClick={handlePositionIndex}
                className="bg-black text-white px-4 py-2 rounded-lg mt-8"
            >
                Next
            </button>
        </div>
    );
};

export default Awards;
