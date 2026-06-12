"use client";

import Image from 'next/image';
import Profile from '@/assets/Profile.png';
import Flag from '@/assets/Flag.png';
import { useEffect, useState } from 'react';

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const fadeUp = (delay: string) =>
        `transition-all duration-700 ease-out ${delay} ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`;

    return (
        <>
            <div className="home w-full h-168 flex items-center flex-col border-b-1 border-white">
                <div className={`h-48 flex items-center justify-content-center space-x-6 ${fadeUp('delay-0')}`}>
                    <div className="transition-transform duration-300 hover:scale-105">
                        <Image className='rounded-full border-2 border-white w-24 h-24' src={Profile} alt="Profile" />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl text-white">Andrie Elbambuena</h2>
                        <div className='flex items-center space-x-2 mt-2 transition-transform duration-300 hover:translate-x-1'>
                            <Image className='w-6 h-6' src={Flag} alt="Philippines" />
                            <h3 className="font-bold text-md text-white">Based in Philippines</h3>
                        </div>
                    </div>
                </div>

                <div className={fadeUp('delay-150')}>
                    <h1 className="font-bold text-7xl text-white transition-colors duration-300 hover:text-gray-300 cursor-default">
                        Aspiring Fullstack Developer
                    </h1>
                </div>

                <div className={fadeUp('delay-300')}>
                    <p className="font-bold text-xl text-gray-400 mt-4 transition-colors duration-300 hover:text-gray-200 cursor-default">
                        I build clean, functional web apps from frontend to backend.
                    </p>
                </div>

                <div className={`flex items-center mt-4 ${fadeUp('delay-500')}`}>
                    <p className="font-bold text-xl text-blue-500 mt-4 cursor-pointer transition-all duration-300 hover:text-blue-400 hover:tracking-wide hover:scale-105">
                        Download CV
                    </p>
                </div>
            </div>
        </>
    );
}