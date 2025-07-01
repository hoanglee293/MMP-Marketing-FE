import React, { useState, useEffect } from 'react';

const OverLayBoxMMP = ({ children }: { children: React.ReactNode }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-[100%] h-auto aspect-[417/261] group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg flex items-center justify-center">
            {/* Top decorative SVG - responsive positioning */}
            <svg xmlns="http://www.w3.org/2000/svg" width="298" height="273" viewBox="0 0 298 273" fill="none">
                <path d="M245.071 248.958C245.682 249.951 246 250.967 246 252C246 263.598 206.153 273 157 273C107.847 273 68 263.598 68 252C68 251.497 68.0761 250.998 68.2236 250.504L0 5.40234L298 0L245.071 248.958Z" fill="url(#paint0_linear_521_1738)" fill-opacity="0.2" />
                <defs>
                    <linearGradient id="paint0_linear_521_1738" x1="140.5" y1="6" x2="157" y2="273" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F642D7" stop-opacity="0" />
                        <stop offset="1" stop-color="#42B1F6" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='eclipse-box-section absolute bottom-0 ml-4 z-20' />
            <div className='eclipse-box absolute bottom-0 left-[20%] w-[170px] h-[70px] z-20' style={{ background: '#0aabe0' }} />
            {/* Content container - responsive padding */}
            <div className="flex flex-col xl:gap-4 gap-1 justify-center w-full h-full items-center  absolute z-30 py-[8px] cursor-pointer text-neutral font-bold text-lg transition-all duration-300 ease-in-out group-hover:text-white group-hover:scale-105 max-w-[230px]">
                {children}
            </div>
        </div>
    );
};

export default OverLayBoxMMP;   