import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../css/Home.css'
import { motion } from 'framer-motion'


const Home = () => {
    const dotVariants = {
        animate: (i) => ({
            x: [0, getStraightPoint(i).x, getTurnPoint(i).x, getStraightPoint(i).x, 0],
            y: [0, getStraightPoint(i).y, getTurnPoint(i).y, getStraightPoint(i).y, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
            },
        }),
    };

    // Distance configuration for each dot
    const straightDistances = [200, 320, 120, 120]; // Straight movement distances
    const turnDistances = [320, 120, 310, 80]; // Turning movement distances

    // Get straight movement point
    const getStraightPoint = (index) => {
        const straightPositions = [
            { x: 0, y: -straightDistances[index] }, // Top
            { x: straightDistances[index], y: 0 }, // Right
            { x: 0, y: straightDistances[index] }, // Bottom
            { x: -straightDistances[index], y: 0 }, // Left
        ];
        return straightPositions[index];
    };

    // Get turning movement point
    const getTurnPoint = (index) => {
        const turnPositions = [
            { x: -turnDistances[index], y: -straightDistances[index] }, // Top-left
            { x: straightDistances[index], y: -turnDistances[index] }, // Top-right
            { x: turnDistances[index], y: straightDistances[index] }, // Bottom-right
            { x: -straightDistances[index], y: turnDistances[index] }, // Bottom-left
        ];
        return turnPositions[index];
    };


    return (
        <div className='home w-full relative h-[90vh] flex items-center justify-center  flex-col gap-3'>


            <span className='tag-1 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[15%] left-[20%] text-xl'>RTC</span>
            <span className='tag-2 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[10%] left-[46%] text-xl'>Sale Deed</span>
            <span className='tag-3 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[15%] right-[18%] text-xl '>Encumbrance <br /> certificate</span>
            <span className='tag-4 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[19%] right-[15%] text-xl'>Grant Order</span>
            <span className='tag-5 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[16%] right-[37%] text-xl'>Partition Deed</span>
            <span className='tag-6 border-[#575757] border-[0.1px] px-4 py-1.5 text-[#575757] absolute bottom-[10%] right-[58%] text-xl'>Mutation <br /> Register</span>
            <span className='tag-7 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[25%] right-[80%] text-xl'>Will</span>

            {/* <div className="w-[42vw] flex justify-between items-end mb-[-1vh]">
              <img className='union-1 items-end opacity-0' src="Union.png" alt="" />
              <img className='union-2 items-end opacity-0' src="Union.png" alt="" />
              <img className='union-3 opacity-0' src="Union.png" alt="" />

              </div> */}

            {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="dot absolute"
                    style={{
                        top: `${i % 2 === 0 ? 10 + i * 10 : 40}%`, // Adjust for different positions
                        left: `${i % 2 === 0 ? 20 + i * 15 : 60}%`,
                    }}
                    variants={dotVariants}
                    custom={i}
                // animate="animate"
                ></motion.div>
            ))}



            <div className="home-center relative text-[5vh] font-bold border-dashed border-2 border-gray-600 w-[50vw]  flex items-center justify-center text-center p-2 ">

                <motion.div
                    initial={{ y: "100%" }} // Start from below the visible area
                    animate={{ y: ["100%", "0%", "-2100%", "0%", "100%"] }} // Keyframes: start, move up, come down
                    transition={{
                        duration: 5, // Total duration for the entire animation
                        ease: "easeInOut", // Smooth movement
                        // times: [0, 0.25, 0.5, 0.75, 1], // Equal timing for up and down
                        repeat: Infinity, // Repeats the animation
                        repeatType: "loop" // Loops the animation smoothly
                    }}
                    className="union-2 w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-[-5%] left-[48%] mb-5"
                >
                </motion.div>


                <h1>Generate title flows, compare revenue records, check encumbrances in <span className='bg-[#dd9798]'>seconds.</span></h1>
                <motion.div
                    initial={{ y: "100%" }} // Start from below the visible area
                    animate={{ y: ["100%", "0%", "2300%", "0%", "100%"] }} // Keyframes: start, move up, come down
                    transition={{
                        duration: 5, // Total duration for the entire animation
                        ease: "easeInOut", // Smooth movement
                        times: [0, 0.25, 0.5, 0.75, 1], // Equal timing for up and down
                        repeat: Infinity, // Repeats the animation
                        repeatType: "loop" // Loops the animation smoothly
                    }}
                    className="union-5 w-1.5 h-1.5 bg-green-500 rounded-full absolute top-[100%] left-[68%]"
                >
                </motion.div>
                <motion.div
                    initial={{ y: "100%" }} // Start from below the visible area
                    animate={{ y: ["100%", "0%", "2500%", "0%", "100%"] }} // Keyframes: start, move up, come down
                    transition={{
                        duration: 5, // Total duration for the entire animation
                        ease: "easeInOut", // Smooth movement
                        times: [0, 0.25, 0.5, 0.75, 1], // Equal timing for up and down
                        repeat: Infinity, // Repeats the animation
                        repeatType: "loop" // Loops the animation smoothly
                    }}
                    className="union-6 w-1.5 h-1.5 bg-red-500 rounded-full absolute top-[100%] left-[27%]"
                >
                    <img className="" src="Union.png" alt="Moving Union" />
                </motion.div>
            </div>
            {/* <div className="w-[42vw] flex justify-between items-start mt-[-2vh]">
              <img className='union-7 items-end opacity-0' src="Union.png" alt="" />
              <img className='union-6 items-end  opacity-0 mr-[10vw]' src="Union.png" alt="" />
              <img className='union-5 opacity-0 ' src="Union.png" alt="" />
              <img className='union-4 opacity-0' src="Union.png" alt="" />

              </div> */}
            <Link
                href="/request-access"
                className="home-btn px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
            >
                Request Access
            </Link>

        </div>
    )
}

export default Home

