'use client'
import BorderTokenomic from '@/components/border-tokenomic';
import OverLayBoxMMP from '@/components/overlay-box-mmp';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLang } from '@/lang/useLang';
import React, { useEffect, useState } from 'react'

const TokenomicMMP = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const { t } = useLang();

    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
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

    const infoTokenomic = [
        {
            title: t('tokenomics.seedRound'),
            description: t('tokenomics.seedRoundDescription')
        },
        {
            title: t('tokenomics.communityRewards'),
            description: t('tokenomics.communityRewardsDescription')
        },
        {
            title: t('tokenomics.liquidityFund'),
            description: t('tokenomics.liquidityFundDescription')
        },
        {
            title: t('tokenomics.marketingPartnership'),
            description: t('tokenomics.marketingPartnershipDescription')
        },
        {
            title: t('tokenomics.operationalCosts'),
            description: t('tokenomics.operationalCostsDescription')
        },
        {
            title: t('tokenomics.reserveFund'),
            description: t('tokenomics.reserveFundDescription')
        }
    ]

    return (
        <div className='bg-footer bg-[#020616BD]/60 z-50 w-full xl:h-svh flex  justify-center relative  overflow-hidden xl:mt-0 mt-10'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            
            {/* Background decorative elements - responsive positioning */}
            <div className='eclipse-box absolute bottom-[5%] left-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[375px] lg:h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[5%] right-[5%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[254px] lg:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            
            <div className='px-4 md:px-6 lg:px-8 w-full relative flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 gap-6 md:gap-8 lg:gap-[3vh]'>
                <h2
                    ref={titleRef}
                    className={`bg-gradient-purple-cyan uppercase text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[43px] bg-clip-text text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                >
                    {t('tokenomics.title')}
                </h2>
                
                <div className='flex flex-col items-center justify-center gap-4 relative mb-6 md:mb-8 lg:mb-10'>
                    <p
                        ref={descRef}
                        className={`text-neutral xl:text-center text-xs sm:text-sm md:text-base lg:text-lg xl:max-w-[1050px] max-w-[370px] sm:max-w-[460px] md:max-w-[600px] lg:max-w-[800px] animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                    >
                        {t('tokenomics.description')}
                    </p>
                </div>
                {/* Mobile Layout - Single Column */}
                {windowWidth < 700 && <div className='w-full max-w-[1440px] md:hidden flex'>
                    <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                        {infoTokenomic.map((item, index) => (
                            <OverLayBoxMMP key={index}>
                                <h3 className='text-base sm:text-lg text-center text-[#00C0FF] font-semibold'>
                                    {item.title}
                                </h3>
                                <p className='text-xs sm:text-sm z-30 text-center text-neutral max-w-none px-2'>
                                    {item.description}
                                </p>
                            </OverLayBoxMMP>
                        ))}
                    </div>
                </div>}
                <div className='xl:flex hidden items-center justify-between gap-[10%] pr-10 mr-[8.33%] w-full max-w-[1440px]'>
                    {infoTokenomic.slice(0, 3).map((item, index) => (
                        <OverLayBoxMMP key={index}>
                            <h3 className='text-lg text-center text-[#00C0FF]'>
                                {item.title}
                            </h3>
                            <p className='text-sm z-30 text-center text-neutral max-w-[189px]'>
                                {item.description}
                            </p>
                        </OverLayBoxMMP>
                    ))}
                </div>
                <div className='xl:flex hidden items-center justify-between gap-[10%] pl-10 ml-[8.33%] w-full max-w-[1440px]'>
                    {infoTokenomic.slice(3, 6).map((item, index) => (
                        <OverLayBoxMMP key={index}>
                            <h3 className='text-lg text-center text-[#00C0FF]'>
                                {item.title}
                            </h3>
                            <p className='text-sm z-30 text-center text-neutral max-w-[189px]'>
                                {item.description}
                            </p>
                        </OverLayBoxMMP>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TokenomicMMP