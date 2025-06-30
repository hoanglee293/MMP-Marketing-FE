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
        <div className='bg-feature bg-[#020616BD]/60 z-50 w-full xl:h-svh flex  justify-center relative pt-[6%] overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[375px] h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <div className='px-4 w-full relative flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-4 bg-black/60 w-fit '>
                    <h2
                        ref={titleRef}
                        className={`title-feature text-[36px] xl:text-[43px] bg-clip-text absolute top-[8%] left-0 w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                    >
                        {t('tokenomics.title')}
                    </h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 relative h-[50px] mt-10 mb-10'>
                    <p
                        ref={descRef}
                        className={`text-neutral text-center text-sm  xl:max-w-[1050px] max-w-[460px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                    >
                        {t('tokenomics.description')}
                    </p>

                </div>
                <div className='flex items-center justify-between gap-[10%] pr-10 mr-[8.33%] w-full max-w-[1440px]'>
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
                <div className='flex items-center justify-between gap-[10%] pl-10 ml-[8.33%] w-full max-w-[1440px]'>
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