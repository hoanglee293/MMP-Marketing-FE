'use client'
import React from 'react'
import Features from './features'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useActiveSection } from '@/hooks/useActiveSection'
import ExchangeToken from './exchange-token'
import Tokenomics from './tokenomics'
import OurTeam from './our-team'
import RoadMap from './road-map'
import Footer from './footer'
import NavigationTabs from '@/components/NavigationTabs'
import { useLang } from '@/lang/useLang'

const page = () => {
    const { t } = useLang();

    const { elementRef: titleRef, isIntersecting: titleInView } = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const { elementRef: descRef, isIntersecting: descInView } = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const { elementRef: buttonRef, isIntersecting: buttonInView } = useIntersectionObserver<HTMLButtonElement>({
        threshold: 0.3,
        rootMargin: '-50px'
    });

    const activeSection = useActiveSection();

    return (
        <div className='flex flex-col'>
            {/* Join Us Section */}
            <div id="join-us" className='bg-overview bg-blue-200 z-50 w-full h-auto min-h-[50vh] sm:h-svh flex items-center justify-center relative overflow-hidden'>
                <div className='absolute top-[30%] sm:top-[40%] md:top-[50%] right-0  animate-float'>
                    <img src="/box-elips.png" alt="bg-feature" className='max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] 2xl:max-w-[230px] object-cover' />
                </div>
                <div className='absolute top-[10%] sm:top-[15%] md:top-[20%] left-0 animate-float-delayed'>
                    <img src="/box-pan-elips.png" alt="bg-feature" className='max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] 2xl:max-w-[230px] object-cover' />
                </div>
                <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative mb-[5%] sm:mb-[8%] lg:mb-[10%]'>
                    <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10'>
                        <h1
                            ref={titleRef}
                            className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] orbitron-font tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold text-center text-white uppercase bg-gradient-purple-cyan bg-clip-text animate-fade-in-up mobile-text-shadow ${titleInView ? 'in-view' : ''}`}
                        >
                            {t('overview.title')}
                        </h1>
                        <p
                            ref={descRef}
                            className={`text-neutral text-xs sm:text-base md:text-lg 2xl:text-xl max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] 2xl:max-w-[950px] text-center animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                        >
                            {t('overview.description')}
                        </p>
                        <button
                            ref={buttonRef}
                            className={`border-none relative xl:w-[197px] w-[130px] bg-transparent h-[47px] aspect-[417/261] cursor-pointer animate-fade-in-up-more-delayed transition-transform duration-300  touch-manipulation ${buttonInView ? 'in-view' : ''}`}
                        >
                            <svg className='absolute top-0 left-0 w-[130px] h-[49px] xl:w-[194px] xl:h-[49px]' xmlns="http://www.w3.org/2000/svg" width="194" height="49" viewBox="0 0 194 49" fill="none">
                                <path d="M33.7012 0.5C33.3163 0.5 32.9357 0.581777 32.585 0.740234L2.09473 14.5225C1.12415 14.9612 0.5 15.928 0.5 16.9932V45.7891C0.5 47.2863 1.71374 48.5 3.21094 48.5H166.033C166.429 48.5 166.82 48.4132 167.179 48.2461L191.934 36.7119C192.889 36.2669 193.5 35.3086 193.5 34.2549V3.21094C193.5 1.71374 192.286 0.5 190.789 0.5H33.7012Z" fill="#020101" stroke="#15DFFD" />
                            </svg>
                            <span className='flex flex-col xl:gap-4 gap-1 justify-center items-center h-full top-0 text-center w-full absolute z-10 px-2 py-4 text-xs xl:text-sm text-white'>
                                {t('overview.joinUs')}
                            </span>
                        </button>

                    </div>

                </div>
            </div>

            {/* Features Section */}
            <div id="features">
                <Features />
            </div>

            {/* Exchange Token Section */}
            <div id="exchange-token">
                <ExchangeToken />
            </div>

            {/* Tokenomics Section */}
            <div id="tokenomics">
                <Tokenomics />
            </div>

            {/* Our Team Section */}
            <div id="our-team">
                <OurTeam />
            </div>

            {/* Road Map Section */}
            <div id="road-map">
                <RoadMap />
            </div>

            {/* Footer Section */}
            <div id="footer">
                <Footer />
            </div>

            {/* Navigation Tabs */}
            <div className='xl:block hidden'>
                <NavigationTabs activeSection={activeSection} />
            </div>
        </div>

    )
}

export default page