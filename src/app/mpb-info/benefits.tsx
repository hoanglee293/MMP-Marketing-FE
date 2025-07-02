import BorderTokenomic from '@/components/border-tokenomic';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLang } from '@/lang/useLang';
import React from 'react'

const BenefitsMPB = () => {
    const { t, tObject } = useLang()
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

    // Get benefits data from translations
    const listBenefits = tObject('mpbInfo.benefits.items')
    return (
        <div className='bg-footer bg-[#020616BD]/60 z-50 w-full min-h-screen xl:h-svh relative pt-[6%] pb-8 xl:pb-0 overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            {/* Mobile: Smaller eclipse boxes, positioned differently */}
            <div className='eclipse-box absolute bottom-[5%] left-[5%] w-[200px] h-[200px] xl:bottom-[10%] xl:left-[10%] xl:w-[375px] xl:h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[5%] right-[5%] w-[150px] h-[150px] xl:top-[10%] xl:right-[10%] xl:w-[254px] xl:h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            
            <div className='container mx-auto h-full flex flex-col px-4 xl:px-0'>
                <div className='flex flex-col items-center justify-center relative'>
                    <h2
                        ref={titleRef}
                        className={`bg-gradient-purple-cyan uppercase text-[24px] sm:text-[28px] md:text-[32px] xl:text-[43px] bg-clip-text w-full h-full text-center animate-fade-in-up leading-tight ${titleInView ? 'in-view' : ''}`}
                    >
                        {t('mpbInfo.benefits.title')}
                    </h2>
                    <div className='flex flex-col items-center justify-center gap-4 relative h-auto xl:h-[50px] mb-6 xl:mb-10 mt-4'>
                        <p
                            ref={descRef}
                            className={`text-neutral text-center text-sm sm:text-base xl:max-w-[1050px] max-w-[460px] px-4 xl:px-0 animate-fade-in-up-delayed leading-relaxed ${descInView ? 'in-view' : ''}`}
                        >
                           {t('mpbInfo.benefits.description')}
                        </p>
                    </div>
                </div>
                
                {/* Mobile: Stack cards vertically, Desktop: Horizontal layout */}
                <div className='flex flex-col xl:flex-row items-center justify-center z-20 gap-6 xl:gap-[4vw] px-2 xl:px-0'>
                    {
                        listBenefits.map((item, index) => (
                            <div key={index} className='w-full max-w-[320px] sm:max-w-[398px] p-2 bg-transparent border-2 border-[#33FCFF] border-solid rounded-xl'>
                                <div className='w-full min-h-[360px] sm:min-h-[520px] xl:min-h-[570px] bg-gradient-to-l from-[#330C5E] to-[#0F2A58] flex flex-col gap-4 xl:gap-5 p-3 sm:p-4 rounded-xl'>
                                    <img 
                                        src={item.image} 
                                        alt="benefits" 
                                        className='w-full h-[180px] sm:h-[220px] xl:h-[244px] object-cover rounded-xl' 
                                    />
                                    <h4 className='text-[#12D6DF] text-lg sm:text-xl xl:text-2xl font-bold leading-tight'>
                                        {item.title}
                                    </h4>
                                    <p className='text-white text-sm sm:text-base leading-relaxed'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BenefitsMPB