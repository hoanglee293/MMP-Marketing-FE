import BorderOurTeam from '@/components/border-our-team';
import BorderPrimary from '@/components/border-primary';
import BoxInvestment from '@/components/box-investment';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLang } from '@/lang/useLang';
import { useRouter } from 'next/navigation';
import React from 'react'

const InvestmentOpportunity = () => {
    const { t } = useLang()
    const router = useRouter()
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
    const { elementRef: mmpImageRef, isIntersecting: mmpImageInView } = useIntersectionObserver<HTMLImageElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });
    return (
        <div className='bg-footer bg-[#020616BD]/60 z-50 w-full min-h-screen xl:h-svh relative pt-8 sm:pt-[4%] xl:pt-[4%] overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] xl:w-[375px] xl:h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[254px] xl:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <div className='container mx-auto h-full flex flex-col'>
                <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 relative'>
                    <h2
                        ref={titleRef}
                        className={`bg-gradient-purple-cyan uppercase text-[24px] sm:text-[28px] md:text-[32px] xl:text-[43px] bg-clip-text w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                    >
                        {t('mmpInfo.investmentOpportunity.title')}
                    </h2>
                    <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 relative mb-6'>
                        <p
                            ref={descRef}
                            className={`text-neutral text-center text-xs sm:text-sm xl:max-w-[1050px] max-w-[460px] px-4 sm:px-0 animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                        >
                            {t('mmpInfo.investmentOpportunity.description')}
                        </p>

                    </div>
                </div>
                <div className='flex-1 flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 xl:p-10 gap-6 lg:gap-10'>
                    {/* Investment Cards Section */}
                    <div className='flex flex-col items-center justify-center z-20 gap-4 sm:gap-6 w-full lg:basis-1/3 order-2 lg:order-1'>
                        <div className='flex flex-col items-center justify-center gap-1 w-full max-w-[280px] sm:max-w-[300px] z-20'>
                            <BorderOurTeam className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm md:text-xl text-center uppercase px-2 sm:px-0'>
                                    {t('mmpInfo.investmentOpportunity.priceFirstSale')}
                                </p>
                                <p className='text-neutral font-medium text-[10px] sm:text-xs md:text-sm mt-1'>
                                    {t('mmpInfo.investmentOpportunity.untilDate')}
                                </p>
                            </BorderOurTeam>
                            <BoxInvestment>
                                {t('mmpInfo.investmentOpportunity.firstSaleRound')}
                            </BoxInvestment>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1 w-full max-w-[280px] sm:max-w-[300px] z-20'>
                            <BorderOurTeam className='w-full'>
                                <div className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm md:text-xl uppercase px-2 sm:px-0'>
                                    {t('mmpInfo.investmentOpportunity.fromPrice')}
                                </div>
                                <div className='text-neutral text-[10px] sm:text-xs md:text-sm mt-1 uppercase font-semibold'>
                                    {t('mmpInfo.investmentOpportunity.andAbove')}
                                </div>
                            </BorderOurTeam>
                            <BoxInvestment>
                                {t('mmpInfo.investmentOpportunity.round2')}
                            </BoxInvestment>
                        </div>
                        <div className='text-neutral text-center text-xs sm:text-sm max-w-[280px] sm:max-w-[330px] capitalize px-4 sm:px-0'>
                            {t('mmpInfo.investmentOpportunity.seedRoundDescription')}
                        </div>
                    </div>
                    
                    {/* Image and Content Section */}
                    <div className='flex flex-col items-center w-full gap-4 sm:gap-6 z-20 lg:basis-2/3 order-1 lg:order-2'>
                        <img
                            ref={mmpImageRef}
                            src="/MMP-hex.png"
                            alt="exchange-token"
                            className={`w-full max-w-[200px] sm:max-w-[240px] xl:max-w-[280px] h-auto object-cover animate-fade-in-up z-20 ${mmpImageInView ? 'in-view' : ''}`}
                        />
                        <h3 className='text-neutral text-center text-lg sm:text-xl xl:text-2xl font-bold xl:max-w-[1050px] max-w-[460px] mt-2 sm:mt-3 px-4 sm:px-0'>
                            {t('mmpInfo.investmentOpportunity.potentialTitle')}
                        </h3>
                        <p className='text-neutral font-medium text-center text-xs sm:text-sm m-0 xl:max-w-[800px] max-w-[460px] px-4 sm:px-0 leading-relaxed'>
                            {t('mmpInfo.investmentOpportunity.potentialDescription')}
                        </p>
                        <div className='h-[40px] w-[180px] sm:w-[199px] relative mt-2' onClick={() => router.push('/swap')}>
                            <BorderPrimary>{t('footer.swapNow')}</BorderPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentOpportunity