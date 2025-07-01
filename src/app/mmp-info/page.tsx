'use client'
import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import TokenomicMMP from './tokenomic'
import Benefits from './benefits'
import BorderTokenomic from '@/components/border-tokenomic'
import InvestmentOpportunity from './investment-opportunity'
import FooterComp from '@/components/footer'
import { useLang } from '@/lang/useLang'

const MmpInfo = () => {
    const { t } = useLang();
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
                <div className='eclipse-box absolute bottom-[0%] left-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] xl:w-[375px] xl:h-[375px] z-20' style={{ background: '#0090ff57' }} />
                <div className='eclipse-box absolute top-[10%] right-[10%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[254px] xl:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
                <div className='eclipse-box absolute top-[10%] left-[10%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[254px] xl:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />

                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 xl:gap-10">
                        <h1
                            ref={titleRef}
                            className={`text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] orbitron-font tracking-[0.1em] font-bold text-center text-white uppercase bg-gradient-purple-cyan bg-clip-text animate-fade-in-up mobile-text-shadow ${titleInView ? 'in-view' : ''}`}
                        >
                            MMP
                        </h1>
                        <div className='w-full min-h-[300px] sm:min-h-[350px] xl:min-h-[400px] flex flex-col items-center xl:justify-center gap-6 sm:gap-8 xl:gap-10 relative overflow-hidden'>
                            <img
                                ref={mmpImageRef}
                                src="/MMP-hex.png"
                                alt="exchange-token"
                                className={`w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px] xl:max-w-[280px] h-auto object-cover animate-fade-in-up z-20 ${mmpImageInView ? 'in-view' : ''}`}
                            />
                            <div className='xl:hidden flex  gap-4 w-fit xl:w-full xl:max-w-[400px] px-4'>
                                <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag={t('mmpInfo.tokenName')} tagTextColor='#3AB3D9'>
                                    <div className='flex flex-col items-center justify-center gap-2 sm:gap-4 relative'>
                                        <p
                                            ref={descRef}
                                            className={`text-neutral text-center text-xs sm:text-sm xl:animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                        >
                                            {t('mmpInfo.tokenFullName')}
                                        </p>
                                    </div>
                                </BorderTokenomic>
                                <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag={t('mmpInfo.totalSupply')} tagTextColor='#3AB3D9'>
                                    <div className='flex flex-col items-center justify-center gap-2 sm:gap-4 relative'>
                                        <p
                                            ref={descRef}
                                            className={`text-neutral text-center text-xs sm:text-sm xl:animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                        >
                                            {t('mmpInfo.tokenAmount')}
                                        </p>
                                    </div>
                                </BorderTokenomic>
                            </div>
                            <div className={`absolute hidden xl:flex items-end justify-center gap-4 z-10 ${isClient && windowWidth < 1800 ? 'top-[7%] left-[7%]' : 'top-[8%] left-[15%]'}`}>
                                <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag={t('mmpInfo.tokenName')} tagTextColor='#3AB3D9'>
                                    <div className='flex flex-col items-center justify-center gap-4 relative'>
                                        <p
                                            ref={descRef}
                                            className={`text-neutral text-center text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                        >
                                            {t('mmpInfo.tokenFullName')}
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
                            <div className={`absolute hidden xl:flex items-end justify-center gap-4 z-10 ${isClient && windowWidth < 1800 ? 'top-[0%] right-[11%]' : 'top-[2%] right-[14%]'}`}>
                                <div style={{ marginBottom: '-5%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="239" height="99" viewBox="0 0 239 99" fill="none">
                                        <path d="M228.427 21.3118C226.141 21.3118 223.833 20.5573 221.903 19.0262C217.42 15.4315 216.688 8.8411 220.283 4.33657C223.878 -0.167963 230.468 -0.878045 234.95 2.71671C237.125 4.4697 238.501 6.95496 238.789 9.7065C239.1 12.4802 238.301 15.2096 236.57 17.3842C234.507 19.9582 231.489 21.3118 228.427 21.3118ZM222.014 5.73452C219.173 9.2627 219.75 14.4551 223.301 17.2954C226.829 20.1357 232.021 19.5588 234.862 16.0084C236.237 14.2998 236.859 12.1474 236.615 9.97279C236.371 7.79818 235.305 5.82328 233.575 4.4697C230.024 1.60722 224.854 2.18415 222.014 5.73452Z" fill="#8B8B8B" />
                                        <path d="M233.663 10.8608C233.663 13.7455 231.311 16.0976 228.426 16.0976C225.542 16.0976 223.189 13.7455 223.189 10.8608C223.189 7.97615 225.542 5.62402 228.426 5.62402C231.311 5.62402 233.663 7.97615 233.663 10.8608Z" fill="#8B8B8B" />
                                        <path d="M1 97.4268L57 68.4268H175.5L218 16.9268" stroke="#0562B9" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag={t('mmpInfo.totalSupply')} tagTextColor='#3AB3D9'>
                                    <div className='flex flex-col items-center justify-center gap-4 relative'>
                                        <p
                                            ref={descRef}
                                            className={`text-neutral text-center text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                        >
                                            {t('mmpInfo.tokenAmount')}
                                        </p>
                                    </div>
                                </BorderTokenomic>
                            </div>
                            <div className='xl:hidden flex flex-col gap-4 w-full max-w-[400px] px-4'>
                                <div className='flex flex-col gap-2 bg-[#0b4343]/30 backdrop-blur-sm rounded-lg p-3'>
                                    <div className='text-[#3bc2eb] font-bold text-sm sm:text-base flex gap-1 items-center'>
                                        <div className='w-4 h-3 sm:w-6 sm:h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />
                                        {t('mmpInfo.goals')}
                                    </div>
                                    <div className='text-neutral text-xs sm:text-sm border-l-2 border-primary border-y-0 border-r-0 border-solid pl-2'>
                                        {t('mmpInfo.goalsDescription')}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 bg-[#0b4343]/30 backdrop-blur-sm rounded-lg p-3'>
                                    <div className='text-[#3bc2eb] font-bold text-sm sm:text-base flex gap-1 items-center'>
                                        <div className='w-4 h-3 sm:w-6 sm:h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />
                                        {t('mmpInfo.officialLaunch')}
                                    </div>
                                    <div className='text-neutral text-xs sm:text-sm border-l-2 border-primary border-y-0 border-r-0 border-solid pl-2'>
                                        {t('mmpInfo.officialLaunchDescription')}
                                    </div>
                                </div>
                            </div>
                            <div className={`absolute hidden xl:flex items-end justify-center gap-4 ${isClient && windowWidth < 1800 ? 'bottom-[12%] left-[14%]' : 'bottom-[19%] left-[14%]'}`}>
                                <div className='flex flex-col  gap-2'>
                                    <div className='text-[#3bc2eb] font-bold text-base flex gap-1 items-center'><div className='w-6 h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />{t('mmpInfo.goals')}</div>
                                    <div className='text-neutral text-sm border-l-3 border-primary border-y-0 border-r-0 border-solid pl-2  max-w-[180px]'>
                                        {t('mmpInfo.goalsDescription')}
                                    </div>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="233" height="28" viewBox="0 0 233 28" fill="none">
                                        <path d="M231.5 1L160.5 18.8913L23 17" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                        <path d="M10.4266 27.885C8.14109 27.885 5.83335 27.1306 3.90283 25.5995C-0.579511 22.0047 -1.31177 15.4143 2.28298 10.9098C5.87773 6.40528 12.4681 5.6952 16.9504 9.28995C19.125 11.0429 20.5008 13.5282 20.7893 16.2797C21.0999 19.0535 20.3011 21.7828 18.5703 23.9574C16.5066 26.5314 13.4888 27.885 10.4266 27.885ZM4.01378 12.3078C1.17348 15.8359 1.75042 21.0284 5.30079 23.8687C8.82897 26.709 14.0214 26.132 16.8617 22.5816C18.2375 20.873 18.8588 18.7206 18.6147 16.546C18.3706 14.3714 17.3055 12.3965 15.5747 11.0429C12.0243 8.18046 6.85408 8.75739 4.01378 12.3078Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        <path d="M15.663 17.4341C15.663 20.3187 13.3109 22.6709 10.4263 22.6709C7.54158 22.6709 5.18945 20.3187 5.18945 17.4341C5.18945 14.5494 7.54158 12.1973 10.4263 12.1973C13.3109 12.1973 15.663 14.5494 15.663 17.4341Z" fill="#CCCCCC" fill-opacity="0.5" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`absolute hidden xl:flex items-end justify-center gap-4 ${isClient && windowWidth < 1800 ? 'bottom-[12%] right-[10%]' : 'bottom-[19%] right-[10%]'}`}>
                                <div style={{ marginBottom: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="233" height="28" viewBox="0 0 233 28" fill="none">
                                        <path d="M1 1L72 18.8913L209.5 17" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                        <path d="M222.073 27.885C224.359 27.885 226.667 27.1306 228.597 25.5995C233.08 22.0047 233.812 15.4143 230.217 10.9098C226.622 6.40528 220.032 5.6952 215.55 9.28995C213.375 11.0429 211.999 13.5282 211.711 16.2797C211.4 19.0535 212.199 21.7828 213.93 23.9574C215.993 26.5314 219.011 27.885 222.073 27.885ZM228.486 12.3078C231.327 15.8359 230.75 21.0284 227.199 23.8687C223.671 26.709 218.479 26.132 215.638 22.5816C214.263 20.873 213.641 18.7206 213.885 16.546C214.129 14.3714 215.195 12.3965 216.925 11.0429C220.476 8.18046 225.646 8.75739 228.486 12.3078Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        <path d="M216.837 17.4341C216.837 20.3187 219.189 22.6709 222.074 22.6709C224.958 22.6709 227.311 20.3187 227.311 17.4341C227.311 14.5494 224.958 12.1973 222.074 12.1973C219.189 12.1973 216.837 14.5494 216.837 17.4341Z" fill="#CCCCCC" fill-opacity="0.5" />
                                    </svg>
                                </div>
                                <div className='flex flex-col  gap-2'>
                                    <div className='text-[#3bc2eb] font-bold text-base flex gap-1 items-center'><div className='w-6 h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />{t('mmpInfo.officialLaunch')}</div>
                                    <div className='text-neutral text-sm border-l-3 border-primary border-y-0 border-r-0 border-solid pl-2  max-w-[250px]'>
                                        {t('mmpInfo.officialLaunchDescription')}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-center min-h-[180px] sm:min-h-[200px] xl:h-[220px] bg-gradient-to-l from-[#0b4343]/70 to-[#014185]/70 w-full backdrop-blur-lg rounded-lg overflow-hidden'>
                            <div className="xl:block hidden border-4 rounded-l-lg border-r-0 border-solid border-[#33FCFF] h-full w-16" />
                            <div className='flex items-center justify-around flex-1 h-[100%] overflow-hidden p-3 sm:p-4 xl:p-4'>
                                <div className='flex flex-col items-center justify-center gap-3 sm:gap-4'>
                                    <div className='flex flex-col sm:flex-row xl:flex-row items-center gap-1 sm:gap-2'>
                                        <h3 className='text-neutral text-2xl sm:text-3xl xl:text-4xl font-bold bg-transparent text-center'>{t('mmpInfo.introductionTitle')}
                                        </h3><span className="text-2xl sm:text-3xl xl:text-4xl font-bold bg-gradient-to-t from-[#33FCFF] to-[#2492FE] bg-clip-text">{t('mmpInfo.projectName')}</span>
                                    </div>
                                    <p className='text-neutral text-sm sm:text-base px-4 sm:px-6 xl:px-10 xl:text-center leading-relaxed'>
                                        {t('mmpInfo.introductionDescription')}
                                    </p>
                                </div>
                            </div>
                            <div className="xl:block hidden border-4 rounded-r-lg border-l-0 border-solid border-[#33FCFF] h-full w-16" />
                        </div>
                    </div>
                </div>
            </div>
            <TokenomicMMP />
            <Benefits />
            <InvestmentOpportunity />
            <FooterComp>
                {t('mmpInfo.footerDescription')}
            </FooterComp>
        </div>
    )
}

export default MmpInfo