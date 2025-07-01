import React, { useState, useEffect } from 'react';

const BoxInvestment = ({ children }: { children: React.ReactNode }) => {
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
        <div className="relative h-auto max-h-[90px]  ">
            {/* Top decorative SVG - responsive positioning */}
            <svg width="284" height="39" viewBox="0 0 284 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-20" y="-17" width="317" height="75"><div style={{ backdropFilter: 'blur(10px)', clipPath: 'url(#bgblur_0_529_3217_clip_path)', height: '100%', width: '100%' }}></div></foreignObject>
                <path data-figma-bg-blur-radius="20" d="M277 14.2903L277 38L26.3914 38L10.0706 23.8871L10.0706 16.5484L10.0706 12.5968L3.0598e-06 3L116.483 3.00001L119.747 5.82259L134.109 5.82259L267.207 5.8226L277 14.2903Z" fill="white" fill-opacity="0.08" />
                <path d="M283 38L277.415 38L277.415 14.0923L269.8 5.55385L250 5.55385L250 4.41538L266.246 4.41538L266.246 1L270.308 1L283 13.5231L283 38Z" fill="#0FFFF3" stroke="url(#paint0_linear_529_3217)" stroke-linejoin="round" />
                <defs>
                    <clipPath id="bgblur_0_529_3217_clip_path" transform="translate(20 17)"><path d="M277 14.2903L277 38L26.3914 38L10.0706 23.8871L10.0706 16.5484L10.0706 12.5968L3.0598e-06 3L116.483 3.00001L119.747 5.82259L134.109 5.82259L267.207 5.8226L277 14.2903Z" />
                    </clipPath><linearGradient id="paint0_linear_529_3217" x1="283.127" y1="24.871" x2="252.43" y2="24.6555" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0FE7FF" />
                        <stop offset="1" stop-color="#12D6DF" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Content container - responsive padding */}
            <div className="flex flex-col xl:gap-4 gap-1 top-0 left-[0%] absolute z-10 py-3 text-center text-neutral font-semibold w-full items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default BoxInvestment;