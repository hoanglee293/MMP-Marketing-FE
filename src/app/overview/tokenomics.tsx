'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import React from 'react'

const Tokenomics = () => {
    const { elementRef: titleRef, isIntersecting: titleInView } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const { elementRef: title2Ref, isIntersecting: title2InView } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const { elementRef: descRef, isIntersecting: descInView } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    return (
        <div className='bg-feature bg-[#020616BD]/60 z-50 w-full h-svh flex items-center justify-center relative pt-20 overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#020616c2] backdrop-blur-lg' />
            <div className='container mx-auto px-4 relative flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-4 bg-black/60 w-fit h-[43px]'>
                    <h2
                        ref={titleRef}
                        className={`title-feature text-[36px] xl:text-[43px] bg-clip-text absolute top-0 left-0 w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                    >
                        TOKENOMICS
                    </h2>
                    <h3
                        ref={title2Ref}
                        className={`text-[#DFE0EF] text-[32px] webkit-text-stroke-1 font-bold bg-black/60 xl:min-w-[440px] min-w-[300px] h-[full] text-center z-10 leading-none animate-fade-in-up-delayed ${title2InView ? 'in-view' : ''}`}
                    >
                        TOKENOMICS
                    </h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 relative h-[50px] mt-10'>
                    <p
                        ref={descRef}
                        className={`text-neutral text-center text-base  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                    >
                        MMP and MPB are two pioneering exchange-issued coins that represent a breakthrough in the world of Web3 and decentralized platforms. Built on Solana, they are not just liquidity tokens but also tools for creating value and opportunities for the community, aiming to establish a sustainable and powerful ecosystem.
                    </p>

                </div>
                {/* <TokenomicSvg /> */}
                <div className='flex items-center justify-center flex-1'>
                    <img src="/tokenomics.png" alt="tokenomics" className='w-full max-w-[500px] h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Tokenomics