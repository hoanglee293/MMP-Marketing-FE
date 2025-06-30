'use client'
import BoxFeauture from '@/components/border'
import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import BorderPrimary from '@/components/border-primary'
import TokenomicMMP from './tokenomic'
import Benefits from './benefits'
import BorderTokenomic from '@/components/border-tokenomic'

const MmpInfo = () => {
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

    const { elementRef: titleRef, isIntersecting: titleInView } = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const { elementRef: mmpImageRef, isIntersecting: mmpImageInView } = useIntersectionObserver<HTMLImageElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const { elementRef: descRef, isIntersecting: descInView } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    return (
        <div className='flex flex-col'>
            <div className='bg-overview bg-blue-200 z-50 w-full h-auto min-h-[50vh] sm:h-svh flex items-center justify-center relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
                <div className='eclipse-box absolute bottom-[0%] left-[10%] w-[375px] h-[375px] z-20' style={{ background: '#0090ff57' }} />
                <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
                <div className='eclipse-box absolute top-[10%] left-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />

                <div className='container mx-auto '>
                    <div className="flex flex-col items-center justify-center gap-10">
                        <h1
                            ref={titleRef}
                            className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] orbitron-font tracking-[0.1em] font-bold text-center text-white uppercase bg-gradient-purple-cyan bg-clip-text animate-fade-in-up mobile-text-shadow ${titleInView ? 'in-view' : ''}`}
                        >
                            MMP
                        </h1>
                        <div className='w-full min-h-[400px] flex flex-col items-center justify-center gap-10 relative'>
                            <img
                                ref={mmpImageRef}
                                src="/MMP-hex.png"
                                alt="exchange-token"
                                className={`w-full max-w-[280px] h-auto object-cover animate-fade-in-up ${mmpImageInView ? 'in-view' : ''}`}
                            />
                            <div className={`absolute hidden xl:flex items-end justify-center gap-4 ${isClient && windowWidth < 1800 ? 'top-[7%] left-[7%]' : 'top-[8%] left-[15%]'}`}>
                                <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag='Token name' tagTextColor='#3AB3D9'>
                                    <div className='flex flex-col items-center justify-center gap-4 relative'>
                                        <p
                                            ref={descRef}
                                            className={`text-neutral text-center text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                        >
                                            Meme Meta Pump
                                        </p>
                                    </div>
                                </BorderTokenomic>
                                <div style={{ marginBottom: '-40px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="232" height="99" viewBox="0 0 232 99" fill="none">
                                        <path d="M23 10.4272L160.5 12.3186L178 33.1229L231 36.9055V97.4272" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                        <path d="M10.4266 21.3123C8.14109 21.3123 5.83335 20.5578 3.90283 19.0267C-0.579511 15.432 -1.31177 8.84159 2.28298 4.33706C5.87773 -0.167475 12.4681 -0.877557 16.9504 2.71719C19.125 4.47019 20.5008 6.95545 20.7893 9.70699C21.0999 12.4807 20.3011 15.2101 18.5703 17.3847C16.5066 19.9587 13.4888 21.3123 10.4266 21.3123ZM4.01378 5.73501C1.17348 9.26319 1.75042 14.4556 5.30079 17.2959C8.82897 20.1362 14.0214 19.5593 16.8617 16.0089C18.2375 14.3003 18.8588 12.1479 18.6147 9.97327C18.3706 7.79867 17.3055 5.82377 15.5747 4.47019C12.0243 1.60771 6.85408 2.18464 4.01378 5.73501Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        <path d="M15.663 10.8613C15.663 13.746 13.3109 16.0981 10.4263 16.0981C7.54158 16.0981 5.18945 13.746 5.18945 10.8613C5.18945 7.97663 7.54158 5.62451 10.4263 5.62451C13.3109 5.62451 15.663 7.97663 15.663 10.8613Z" fill="#CCCCCC" fill-opacity="0.5" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`absolute hidden xl:flex items-end justify-center gap-4 ${isClient && windowWidth < 1800 ? 'top-[0%] right-[11%]' : 'top-[12%] right-[14%]'}`}>
                                <div style={{ marginBottom: '-5%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="239" height="99" viewBox="0 0 239 99" fill="none">
                                        <path d="M228.427 21.3118C226.141 21.3118 223.833 20.5573 221.903 19.0262C217.42 15.4315 216.688 8.8411 220.283 4.33657C223.878 -0.167963 230.468 -0.878045 234.95 2.71671C237.125 4.4697 238.501 6.95496 238.789 9.7065C239.1 12.4802 238.301 15.2096 236.57 17.3842C234.507 19.9582 231.489 21.3118 228.427 21.3118ZM222.014 5.73452C219.173 9.2627 219.75 14.4551 223.301 17.2954C226.829 20.1357 232.021 19.5588 234.862 16.0084C236.237 14.2998 236.859 12.1474 236.615 9.97279C236.371 7.79818 235.305 5.82328 233.575 4.4697C230.024 1.60722 224.854 2.18415 222.014 5.73452Z" fill="#8B8B8B" />
                                        <path d="M233.663 10.8608C233.663 13.7455 231.311 16.0976 228.426 16.0976C225.542 16.0976 223.189 13.7455 223.189 10.8608C223.189 7.97615 225.542 5.62402 228.426 5.62402C231.311 5.62402 233.663 7.97615 233.663 10.8608Z" fill="#8B8B8B" />
                                        <path d="M1 97.4268L57 68.4268H175.5L218 16.9268" stroke="#0562B9" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <BorderTokenomic primaryColor='#9C00D3' secondaryColor='#9C00D3' tag='Tổng cung' tagTextColor='#9C00D3'>
                                    <div className='flex flex-col items-center justify-center gap-4 relative'>
                                        <p
                                            ref={descRef}
                                            className={`text-neutral text-center text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                        >
                                            100 tỷ token
                                        </p>
                                    </div>
                                </BorderTokenomic>
                            </div>
                        </div>
                        <div className='flex items-center justify-center h-[220px] bg-gradient-to-l from-[#0b4343]/70 to-[#014185]/70 w-full backdrop-blur-lg rounded-lg overflow-hidden'>
                            <div className="border-4 rounded-l-lg border-r-0 border-solid border-[#33FCFF] h-full w-16" />
                            <div className='flex items-center justify-around flex-1 h-[100%] overflow-hidden '>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-neutral text-4xl font-bold bg-transparent'>Introduction to the
                                        </h3><span className=" text-4xl font-bold bg-gradient-to-t from-[#33FCFF] to-[#2492FE] bg-clip-text">MemePump Project (MMP)</span>
                                    </div>
                                    <p className='text-neutral text-base px-10 text-center'>
                                        The MemePump (MMP) project is a groundbreaking initiative in the world of cryptocurrency, particularly in the Web3 space and decentralized platforms, aimed at introducing a new type of liquidity token. MMP is not just a cryptocurrency; it is a tool for creating value and opportunities for the community, with the goal of building a sustainable and robust ecosystem. Developed on the Solana platform, MemePump seeks to transform how users interact and engage in the cryptocurrency space.
                                    </p>
                                </div>
                            </div>
                            <div className="border-4 rounded-r-lg border-l-0 border-solid border-[#33FCFF] h-full w-16" />
                        </div>
                    </div>
                </div>
            </div>
            <TokenomicMMP />
            <Benefits />
        </div>
    )
}

export default MmpInfo