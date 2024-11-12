"use client"
import React from 'react';
import { BaseInfo } from '../../../../Data/data';
import Typewriter from 'typewriter-effect';

const Main = () => {
    const name = "Hii 👋🏻,IAmPrateek";
    const Position = BaseInfo.position;
    const Description = BaseInfo.description;

    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
            <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>
                            {name.split(" ").map((char, index) => (
                                <span
                                    key={index}
                                    style={{ animationDelay: `${index * 0.3}s` }}
                                    className="animate-fadeIn"
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>
                        <h1
                            className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white rotate-animation"
                        >
                            {Position}
                        </h1>
                        
                        {/* Typewriter effect for the Description */}
                        <div className='text-white'>

                        <Typewriter 
                            options={{
                                strings: [Description],  // Wrap Description in an array
                                autoStart: true,
                                loop: true,
                                cursor: "|",
                            }}
                            />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
