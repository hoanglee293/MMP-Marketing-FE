import React, { useState, useEffect } from 'react';

const BoxBenefit = ({ children }: { children: React.ReactNode }) => {
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
        <div className="relative w-full sm:w-[95%] md:w-[90%] max-h-[240px] xl:aspect-[417/261] ">
            {/* Top decorative SVG - improved responsive positioning */}
            <svg 
                className={`absolute top-0 right-[3%] sm:right-[5%] z-50 
                    ${isClient && windowWidth < 640 ? 'w-[15%] max-w-[60px]' : 
                      isClient && windowWidth < 1280 ? 'w-[18%] max-w-[100px]' : 'w-[146px]'} 
                    h-auto`} 
                xmlns="http://www.w3.org/2000/svg" 
                width="248" 
                height="14" 
                viewBox="0 0 248 14" 
                fill="none"
            >
                <path d="M23.5468 13.2639L0.525391 0.779845H15.873L38.8944 13.2639L23.5468 13.2639Z" fill="url(#paint0_linear_521_2143)" />
                <path d="M53.372 13.2639L30.3506 0.779845H45.6982L68.7196 13.2639L53.372 13.2639Z" fill="url(#paint1_linear_521_2143)" />
                <path d="M83.1982 13.2639L60.1768 0.779845H75.5244L98.5458 13.2639L83.1982 13.2639Z" fill="url(#paint2_linear_521_2143)" />
                <path d="M113.022 13.2639L90.001 0.779845H105.349L128.37 13.2639L113.022 13.2639Z" fill="url(#paint3_linear_521_2143)" />
                <path d="M142.849 13.2639L119.827 0.779845H135.175L158.196 13.2639L142.849 13.2639Z" fill="url(#paint4_linear_521_2143)" />
                <path d="M172.673 13.2639L149.651 0.779845H164.999L188.02 13.2639L172.673 13.2639Z" fill="url(#paint5_linear_521_2143)" />
                <path d="M202.5 13.2639L179.479 0.779845H194.826L217.848 13.2639L202.5 13.2639Z" fill="url(#paint6_linear_521_2143)" />
                <path d="M232.324 13.2639L209.303 0.779845H224.65L247.672 13.2639L232.324 13.2639Z" fill="url(#paint7_linear_521_2143)" />
                <defs>
                    <linearGradient id="paint0_linear_521_2143" x1="11.6648" y1="13.3119" x2="11.6918" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_521_2143" x1="41.49" y1="13.3119" x2="41.517" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_521_2143" x1="71.3161" y1="13.3119" x2="71.3432" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_521_2143" x1="101.14" y1="13.3119" x2="101.167" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_521_2143" x1="130.967" y1="13.3119" x2="130.994" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_521_2143" x1="160.791" y1="13.3119" x2="160.818" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_521_2143" x1="190.618" y1="13.3119" x2="190.645" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_521_2143" x1="220.442" y1="13.3119" x2="220.469" y2="1.69845" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#005EFF" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Main border SVG - responsive sizing */}
            <svg 
                className="w-full h-full" 
                xmlns="http://www.w3.org/2000/svg" 
                width="712" 
                height="242" 
                viewBox="0 0 712 242" 
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <foreignObject x="-24" y="-24" width="760" height="290">
                    <div style={{ backdropFilter: 'blur(12px)', clipPath: 'url(#bgblur_0_521_2139_clip_path)', height: '100%', width: '100%' }}></div>
                </foreignObject>
                <path 
                    data-figma-bg-blur-radius="24" 
                    d="M711 71.4247L662.3 23.2394H182.986L141.975 1H30.9037L1 17.2162V226.174L28.3406 241H147.101L188.112 218.761H497.402L537.558 241H683.659L711 226.174V71.4247Z" 
                    fill="#3352FF" 
                    fill-opacity="0.12" 
                    stroke="#00C0FF" 
                    stroke-width="2" 
                />
                <defs>
                    <clipPath id="bgblur_0_521_2139_clip_path" transform="translate(24 24)">
                        <path d="M711 71.4247L662.3 23.2394H182.986L141.975 1H30.9037L1 17.2162V226.174L28.3406 241H147.101L188.112 218.761H497.402L537.558 241H683.659L711 226.174V71.4247Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* Content container - improved responsive padding and positioning */}
            <div className="flex flex-col gap-1 sm:gap-3 xl:gap-4 top-3 sm:top-10 left-0 absolute z-10 mx-3 sm:mx-4 xl:mx-6 px-2 sm:px-3 py-2 sm:py-4 w-[95%]">
                {children}
            </div>
        </div>
    );
};

export default BoxBenefit;