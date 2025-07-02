import React, { useState, useEffect } from 'react';

const BorderInvest = ({ children, className }: { children: React.ReactNode, className?: string }) => {
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
        <div className={`relative w-[100%] max-h-[200px] z-20 h-auto aspect-[417/261] ${isClient && windowWidth < 1600 ? 'aspect-[310/198]' : 'aspect-[417/261]'} ${className}`}>
            {/* Top decorative SVG - responsive positioning */}
            <svg className='h-[80%] xl:h-[100%] z-10' xmlns="http://www.w3.org/2000/svg" width="310" height="198" viewBox="0 0 310 198" fill="none">
                <g filter="url(#filter0_d_576_2610)">
                    <path d="M5.5 12.5V34.5L5 125.5V176.5L16 189H293.5L305 176.5V12.5L293.5 1H203.5L192 12.5H117.5L105.5 1H17L5.5 12.5Z" fill="url(#paint0_linear_576_2610)" shape-rendering="crispEdges" />
                    <path d="M5.5 12.5V34.5L5 125.5V176.5L16 189H293.5L305 176.5V12.5L293.5 1H203.5L192 12.5H117.5L105.5 1H17L5.5 12.5Z" stroke="white" shape-rendering="crispEdges" />
                </g>
                <defs>
                    <filter id="filter0_d_576_2610" x="0.5" y="0.5" width="309" height="197" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_2610" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_2610" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_576_2610" x1="155" y1="1" x2="155" y2="189" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#33FCFF" />
                        <stop offset="0.488686" stop-color="#3CA8CD" stop-opacity="0.39" />
                        <stop offset="1" stop-color="#7FDDFF" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Content container - responsive padding */}
            <div className="flex flex-col items-center justify-center gap-1 top-0 left-10 sm:left-0 absolute z-10 xl:mx-6 mx-auto px-2 py-4 xl:h-[90%] h-[80%] w-[65%] xl:w-[85%]">
                {children}
            </div>
        </div>
    );
};

export default BorderInvest;