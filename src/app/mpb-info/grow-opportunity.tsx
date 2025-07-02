'use client'
import React from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLang } from '@/lang/useLang';
import BorderInvest from '@/components/border-invest';

const GrowOpportunityMpb = () => {
    const { t } = useLang();
    const { elementRef: titleRef, isIntersecting: titleInView } = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });
    return (
        <div className='bg-footer bg-[#020616BD]/60 h-full z-50 w-full min-h-screen sm:h-svh relative overflow-hidden flex flex-col items-center justify-center pt-[3%] sm:pt-[4%] lg:pt-[6%]'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[375px] xl:h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[254px] xl:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <h2
                ref={titleRef}
                className={`bg-gradient-purple-cyan uppercase text-2xl lg:text-3xl xl:text-[36px] 2xl:text-[43px] min-h-[40px] sm:min-h-[50px] bg-clip-text w-full flex items-center justify-center text-center animate-fade-in-up px-4 ${titleInView ? 'in-view' : ''}`}
            >
                {t('mpbInfo.growOpportunity.title')}
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="310" height="0" viewBox="0 0 310 198" fill="none">
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
            
            <div className='mx-auto h-full flex flex-col pt-[2%] sm:pt-[3%] lg:pt-[4%] z-30'>

                <div className='flex-1 flex flex-col-reverse lg:flex-row items-center justify-center p-3 sm:p-4 lg:p-6 xl:p-10 gap-4 sm:gap-6 lg:gap-8 xl:gap-[10vw]'>
                    {/* Mobile Cards Section - Visible on mobile and tablet */}
                    <div className='flex lg:hidden flex-col justify-center items-center w-full gap-4 sm:gap-6 mb-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[300px] sm:max-w-max w-full'>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.flexibleInvestment.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.flexibleInvestment.description')}
                                </p>
                            </BorderInvest>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.longTermGrowth.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.longTermGrowth.description')}
                                </p>
                            </BorderInvest>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[300px] sm:max-w-max w-full'>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.attractiveReturns.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.attractiveReturns.description')}
                                </p>
                            </BorderInvest>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.highLiquidity.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.highLiquidity.description')}
                                </p>
                            </BorderInvest>
                        </div>
                    </div>

                    {/* Desktop Cards Section - Hidden on mobile/tablet */}
                    <div className='hidden lg:flex basis-1/2 z-20 gap-[6vh]'>
                        <div className='xl:flex flex-col hidden items-center justify-between gap-[10vh] pr-10 mb-[17.33%] w-full max-w-[1440px]'>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm lg:text-lg text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.flexibleInvestment.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.flexibleInvestment.description')}
                                </p>
                            </BorderInvest>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm lg:text-lg text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.longTermGrowth.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.longTermGrowth.description')}
                                </p>
                            </BorderInvest>
                        </div>
                        <div className='xl:flex flex-col hidden items-center justify-between gap-[10vh] pr-10 mt-[17.33%] w-full max-w-[1440px]'>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm lg:text-lg text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.attractiveReturns.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.attractiveReturns.description')}
                                </p>
                            </BorderInvest>
                            <BorderInvest className='w-full'>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-xs sm:text-sm lg:text-lg text-center uppercase px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.highLiquidity.title')}
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1 px-2'>
                                    {t('mpbInfo.growOpportunity.investmentOpportunity.highLiquidity.description')}
                                </p>
                            </BorderInvest>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className='flex basis-1/2 flex-col items-center justify-around gap-4 sm:gap-6 lg:gap-[7vh] w-full z-30'>
                        <div className='flex flex-col items-center sm:items-start justify-start gap-2 w-full z-20'>
                            <h4 ref={titleRef} className={`text-neutral text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[80px] font-bold bg-transparent text-center bg-clip-text bg-gradient-to-r from-[#8C01FA] to-[#19FB9B] animate-fade-in-up ${titleInView ? 'in-view' : ''}`}>300 {t('mpbInfo.growOpportunity.million')} USD</h4>
                            <span className='text-[#C4C4C4] text-xs sm:text-sm lg:text-base text-center sm:text-left leading-relaxed px-2 sm:px-0'>{t('mpbInfo.growOpportunity.statistics.revenueTarget2028')}</span>
                        </div>
                        <div className='flex flex-col items-center sm:items-start justify-start gap-2 w-full z-20'>
                            <h4 ref={titleRef} className={`text-neutral text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[80px] font-bold bg-transparent text-center bg-clip-text bg-gradient-to-r from-[#0047FF] to-[#00BCD4] animate-fade-in-up ${titleInView ? 'in-view' : ''}`}>0.3285 USD</h4>
                            <span className='text-[#C4C4C4] text-xs sm:text-sm lg:text-base text-center leading-relaxed px-2 sm:px-0'>{t('mpbInfo.growOpportunity.statistics.expectedValueMPB')}</span>
                        </div>
                        <div className='flex flex-col items-center sm:items-start justify-start gap-2 w-full z-20'>
                            <h4 ref={titleRef} className={`text-neutral text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[80px] font-bold bg-transparent text-center bg-clip-text bg-gradient-to-r from-[#00FFBD] to-[#025B8C] animate-fade-in-up ${titleInView ? 'in-view' : ''}`}>100 {t('mpbInfo.growOpportunity.million')} USD</h4>
                            <span className='text-[#C4C4C4] text-xs sm:text-sm lg:text-base text-center leading-relaxed px-2 sm:px-0'>{t('mpbInfo.growOpportunity.statistics.projectedRevenue2025')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowOpportunityMpb