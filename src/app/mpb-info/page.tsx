'use client'
import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import BorderTokenomic from '@/components/border-tokenomic'
import FooterComp from '@/components/footer'
import { useLang } from '@/lang/useLang'
import BenefitsMPB from './benefits'
import GrowOpportunity from './grow-opportunity'

const MmbInfo = () => {
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
            <div className='bg-overview bg-blue-200 z-50 w-full h-auto min-h-[60vh] sm:min-h-[50vh] sm:h-svh flex items-center justify-center relative overflow-hidden pb-8 sm:pb-10'>
                <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
                <div className='eclipse-box absolute bottom-[0%] left-[10%] w-[200px] h-[200px] sm:w-[375px] sm:h-[375px] z-20' style={{ background: '#0090ff57' }} />
                <div className='eclipse-box absolute top-[10%] right-[10%] w-[150px] h-[150px] sm:w-[254px] sm:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
                <div className='eclipse-box absolute top-[10%] left-[10%] w-[150px] h-[150px] sm:w-[254px] sm:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />

                <div className='container mx-auto h-full px-6 sm:px-0'>
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 h-full">
                        <h1
                            ref={titleRef}
                            className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] orbitron-font tracking-[0.1em] font-bold text-center text-white uppercase bg-gradient-purple-cyan bg-clip-text animate-fade-in-up mobile-text-shadow ${titleInView ? 'in-view' : ''}`}
                        >
                            MPB
                        </h1>



                        <div className='w-full xl:min-h-[400px] flex flex-col items-center justify-center overflow-hidden flex-1 max-h-[45%] sm:max-h-[52%] relative px-2 sm:px-0'>
                            <div className='relative w-full xl:h-fit flex flex-col items-center xl:justify-center'>
                                <img
                                    ref={mmpImageRef}
                                    src="/MPB-hex.png"
                                    alt="exchange-token"
                                    className={`w-full xl:max-w-[280px] max-w-[180px] sm:max-w-[200px] h-auto object-cover animate-fade-in-up z-20 ${mmpImageInView ? 'in-view' : ''}`}
                                />

                                {/* Desktop Layout - Hidden on Mobile */}
                                <div className={`absolute hidden xl:flex items-end justify-center gap-4 z-10 ${isClient && windowWidth < 1800 ? 'top-[0%] left-[10%]' : 'top-[0%] left-[14%]'}`}>
                                    <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag={t('mmpInfo.tokenName')} tagTextColor='#3AB3D9'>
                                        <div className='flex flex-col items-center justify-center gap-4 relative'>
                                            <p
                                                ref={descRef}
                                                className={`text-neutral text-center text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                            >
                                                {t('exchangeToken.mpb.name')}
                                            </p>
                                        </div>
                                    </BorderTokenomic>
                                    <div style={{ marginBottom: '20px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="232" height="38" viewBox="0 0 232 38" fill="none">
                                            <path d="M231 36.4783L160.5 11.8913L23 10" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                            <path d="M10.4266 20.885C8.14109 20.885 5.83335 20.1306 3.90283 18.5995C-0.579511 15.0047 -1.31177 8.41434 2.28298 3.90981C5.87773 -0.594721 12.4681 -1.3048 16.9504 2.28995C19.125 4.04294 20.5008 6.52821 20.7893 9.27974C21.0999 12.0535 20.3011 14.7828 18.5703 16.9574C16.5066 19.5314 13.4888 20.885 10.4266 20.885ZM4.01378 5.30776C1.17348 8.83595 1.75042 14.0284 5.30079 16.8687C8.82897 19.709 14.0214 19.132 16.8617 15.5816C18.2375 13.873 18.8588 11.7206 18.6147 9.54603C18.3706 7.37143 17.3055 5.39652 15.5747 4.04295C12.0243 1.18046 6.85408 1.75739 4.01378 5.30776Z" fill="#CCCCCC" fill-opacity="0.5" />
                                            <path d="M15.663 10.4341C15.663 13.3187 13.3109 15.6709 10.4263 15.6709C7.54158 15.6709 5.18945 13.3187 5.18945 10.4341C5.18945 7.54939 7.54158 5.19727 10.4263 5.19727C13.3109 5.19727 15.663 7.54939 15.663 10.4341Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`absolute hidden xl:flex items-end justify-center gap-4 z-10 ${isClient && windowWidth < 1800 ? 'top-[0%] right-[13%]' : 'top-[0%] right-[13%]'}`}>
                                    <div style={{ marginBottom: '7%' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="232" height="38" viewBox="0 0 232 38" fill="none">
                                            <path d="M1 36.4783L71.5 11.8913L209 10" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                            <path d="M221.573 20.885C223.859 20.885 226.167 20.1306 228.097 18.5995C232.58 15.0047 233.312 8.41434 229.717 3.90981C226.122 -0.594721 219.532 -1.3048 215.05 2.28995C212.875 4.04294 211.499 6.52821 211.211 9.27974C210.9 12.0535 211.699 14.7828 213.43 16.9574C215.493 19.5314 218.511 20.885 221.573 20.885ZM227.986 5.30776C230.827 8.83595 230.25 14.0284 226.699 16.8687C223.171 19.709 217.979 19.132 215.138 15.5816C213.763 13.873 213.141 11.7206 213.385 9.54603C213.629 7.37143 214.695 5.39652 216.425 4.04295C219.976 1.18046 225.146 1.75739 227.986 5.30776Z" fill="#CCCCCC" fill-opacity="0.5" />
                                            <path d="M216.337 10.4341C216.337 13.3187 218.689 15.6709 221.574 15.6709C224.458 15.6709 226.811 13.3187 226.811 10.4341C226.811 7.54939 224.458 5.19727 221.574 5.19727C218.689 5.19727 216.337 7.54939 216.337 10.4341Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        </svg>
                                    </div>
                                    <BorderTokenomic primaryColor='#3AB3D9' secondaryColor='#3AB3D9' tag={t('mmpInfo.totalSupply')} tagTextColor='#3AB3D9'>
                                        <div className='flex flex-col items-center justify-center gap-4 relative'>
                                            <p
                                                ref={descRef}
                                                className={`text-neutral text-center text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                                            >
                                                {t('mpbInfo.totalValueMPB')}
                                            </p>
                                        </div>
                                    </BorderTokenomic>
                                </div>
                                <div className={`absolute hidden xl:flex items-end justify-center gap-4 ${isClient && windowWidth < 1800 ? 'bottom-[12%] left-[14%]' : 'bottom-[5%] left-[13%]'}`}>
                                    <div className='flex flex-col  gap-2'>
                                        <div className='text-[#3bc2eb] font-bold text-base flex gap-1 items-center'><div className='w-6 h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />{t('mpbInfo.issuanceSchedule')}</div>
                                        <div className='text-neutral text-sm border-l-3 border-primary border-y-0 border-r-0 border-solid pl-2  max-w-[220px]'>
                                            {t('mpbInfo.officialLaunchDescription')}
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
                                <div className={`absolute hidden xl:flex items-end justify-center gap-4 ${isClient && windowWidth < 1800 ? 'bottom-[12%] right-[10%]' : 'bottom-[5%] right-[10%]'}`}>
                                    <div style={{ marginBottom: '10px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="233" height="28" viewBox="0 0 233 28" fill="none">
                                            <path d="M1 1L72 18.8913L209.5 17" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                            <path d="M222.073 27.885C224.359 27.885 226.667 27.1306 228.597 25.5995C233.08 22.0047 233.812 15.4143 230.217 10.9098C226.622 6.40528 220.032 5.6952 215.55 9.28995C213.375 11.0429 211.999 13.5282 211.711 16.2797C211.4 19.0535 212.199 21.7828 213.93 23.9574C215.993 26.5314 219.011 27.885 222.073 27.885ZM228.486 12.3078C231.327 15.8359 230.75 21.0284 227.199 23.8687C223.671 26.709 218.479 26.132 215.638 22.5816C214.263 20.873 213.641 18.7206 213.885 16.546C214.129 14.3714 215.195 12.3965 216.925 11.0429C220.476 8.18046 225.646 8.75739 228.486 12.3078Z" fill="#CCCCCC" fill-opacity="0.5" />
                                            <path d="M216.837 17.4341C216.837 20.3187 219.189 22.6709 222.074 22.6709C224.958 22.6709 227.311 20.3187 227.311 17.4341C227.311 14.5494 224.958 12.1973 222.074 12.1973C219.189 12.1973 216.837 14.5494 216.837 17.4341Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col  gap-2'>
                                        <div className='text-[#3bc2eb] font-bold text-base flex gap-1 items-center'><div className='w-6 h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />{t('mpbInfo.issuanceRate')}</div>
                                        <div className='text-neutral text-sm border-l-3 border-primary border-y-0 border-r-0 border-solid pl-2  max-w-[250px]'>
                                            {t('mpbInfo.issuanceRateDescription')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={` hidden xl:flex flex-col items-center justify-center gap-4 `}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="44" viewBox="0 0 21 44" fill="none">
                                        <path d="M10 1V18.8913" stroke="#3AB3D9" stroke-width="2" stroke-linecap="round" />
                                        <path d="M10.4288 43.885C12.7144 43.885 15.0221 43.1306 16.9526 41.5995C21.435 38.0047 22.1672 31.4143 18.5725 26.9098C14.9777 22.4053 8.38737 21.6952 3.90503 25.2899C1.73042 27.0429 0.354652 29.5282 0.066185 32.2797C-0.244473 35.0535 0.554361 37.7828 2.28517 39.9574C4.34882 42.5314 7.36663 43.885 10.4288 43.885ZM16.8417 28.3078C19.682 31.8359 19.1051 37.0284 15.5547 39.8687C12.0265 42.709 6.83408 42.132 3.99378 38.5816C2.61802 36.873 1.9967 34.7206 2.24079 32.546C2.48488 30.3714 3.54999 28.3965 5.28079 27.0429C8.83116 24.1805 14.0014 24.7574 16.8417 28.3078Z" fill="#CCCCCC" fill-opacity="0.5" />
                                        <path d="M5.19242 33.4341C5.19242 36.3187 7.54454 38.6709 10.4292 38.6709C13.3139 38.6709 15.666 36.3187 15.666 33.4341C15.666 30.5494 13.3139 28.1973 10.4292 28.1973C7.54454 28.1973 5.19242 30.5494 5.19242 33.4341Z" fill="#CCCCCC" fill-opacity="0.5" />
                                    </svg>
                                </div>
                                <div className='flex flex-col  gap-2'>
                                    <div className='text-[#3bc2eb] font-bold text-base flex gap-1 items-center'><div className='w-6 h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />{t('mpbInfo.totalValue')}</div>
                                    <div className='text-[#3bc2eb] font-bold text-base flex gap-1 items-center'><div className='w-6 h-4 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0 uppercase' />{t('mpbInfo.goal')}</div>
                                </div>

                            </div>
                        </div>
                        {/* Mobile Token Info Cards */}
                        <div className='flex flex-col gap-4 w-full max-w-md sm:hidden mb-4'>
                            <div className='bg-gradient-to-r from-[#0b4343]/80 to-[#014185]/80 backdrop-blur-lg rounded-lg p-4 border border-[#3AB3D9]/30'>
                                <div className='text-[#3bc2eb] font-bold text-sm mb-2 flex items-center gap-2'>
                                    <div className='w-4 h-3 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0' />
                                    {t('mmpInfo.tokenName')}
                                </div>
                                <p className='text-neutral text-xs leading-relaxed'>
                                    {t('exchangeToken.mpb.name')}
                                </p>
                            </div>

                            <div className='bg-gradient-to-r from-[#0b4343]/80 to-[#014185]/80 backdrop-blur-lg rounded-lg p-4 border border-[#3AB3D9]/30'>
                                <div className='text-[#3bc2eb] font-bold text-sm mb-2 flex items-center gap-2'>
                                    <div className='w-4 h-3 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0' />
                                    {t('mmpInfo.totalSupply')}
                                </div>
                                <p className='text-neutral text-xs leading-relaxed'>
                                    {t('mpbInfo.totalValueMPB')}
                                </p>
                            </div>

                            <div className='bg-gradient-to-r from-[#0b4343]/80 to-[#014185]/80 backdrop-blur-lg rounded-lg p-4 border border-[#3AB3D9]/30'>
                                <div className='text-[#3bc2eb] font-bold text-sm mb-2 flex items-center gap-2'>
                                    <div className='w-4 h-3 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0' />
                                    {t('mpbInfo.issuanceSchedule')}
                                </div>
                                <p className='text-neutral text-xs leading-relaxed'>
                                    {t('mpbInfo.officialLaunchDescription')}
                                </p>
                            </div>

                            <div className='bg-gradient-to-r from-[#0b4343]/80 to-[#014185]/80 backdrop-blur-lg rounded-lg p-4 border border-[#3AB3D9]/30'>
                                <div className='text-[#3bc2eb] font-bold text-sm mb-2 flex items-center gap-2'>
                                    <div className='w-4 h-3 bg-gradient-to-r from-[#3AB3D9] to-[#3AB3D9]/0' />
                                    {t('mpbInfo.issuanceRate')}
                                </div>
                                <p className='text-neutral text-xs leading-relaxed'>
                                    {t('mpbInfo.issuanceRateDescription')}
                                </p>
                            </div>
                        </div>

                        {/* Mobile Market Potential Card */}
                        <div className='flex items-center justify-center sm:h-[180px] bg-gradient-to-l from-[#0b4343]/70 to-[#014185]/70 w-full backdrop-blur-lg rounded-lg overflow-hidden mx-2 sm:mx-0'>
                            <div className="hidden sm:block border-4 rounded-l-lg border-r-0 border-solid border-[#33FCFF] h-full w-8 sm:w-16" />
                            <div className='flex items-center justify-around flex-1 h-[100%] overflow-hidden px-3 sm:px-0 p-4'>
                                <div className='flex flex-col items-center justify-center gap-2 sm:gap-4'>
                                    <div className='flex items-center gap-1 sm:gap-2 flex-wrap justify-center'>
                                        <h3 className='text-neutral text-2xl sm:text-4xl font-bold bg-transparent text-center'>{t('mpbInfo.marketPotential')}
                                        </h3><span className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-[#33FCFF] to-[#2492FE] bg-clip-text">{t('mpbInfo.marketPotentialOf')}</span>
                                    </div>
                                    <p className='text-neutral text-sm sm:text-base px-2 sm:px-10 text-center leading-relaxed'>
                                        {t('mpbInfo.growOpportunity.description')}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:block border-4 rounded-r-lg border-l-0 border-solid border-[#33FCFF] h-full w-8 sm:w-16" />
                        </div>
                    </div>
                </div>
            </div>
            <BenefitsMPB />
            <GrowOpportunity />
            <FooterComp>
                {t('mpbInfo.footerDescription')}
            </FooterComp>
        </div>
    )
}

export default MmbInfo