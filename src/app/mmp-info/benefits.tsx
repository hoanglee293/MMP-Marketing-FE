import BoxBenefit from '@/components/border-benefit'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useLang } from '@/lang/useLang'
import React from 'react'

const Benefits = () => {
    const { t, tObject } = useLang()
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

    // Get benefits data from translations
    const benefitsData = tObject('mmpInfo.benefits.items')

    return (
        <div className='bg-feature bg-[#020616BD]/60 z-50 w-full xl:h-svh relative xl:pt-[6%] pt-[50px] overflow-hidden '>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[375px] h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <div className='container xl:px-0 px-4 mx-auto h-full flex flex-col'>
                <div className='flex flex-col items-center justify-center relative'>
                    <h2
                        ref={titleRef}
                        className={`bg-gradient-purple-cyan uppercase text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[43px] bg-clip-text w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                    >
                        {t('mmpInfo.benefits.title')}
                    </h2>
                    <div className='flex flex-col items-center justify-center gap-4 relative h-[50px] mt-10 mb-10'>
                        <p
                            ref={descRef}
                            className={`text-neutral text-center text-xs sm:text-sm md:text-base lg:text-lg xl:max-w-[1050px] max-w-[460px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                        >
                            {t('mmpInfo.benefits.description')}
                        </p>

                    </div>
                </div>
                <div className=' flex-1 flex items-center justify-center w-full'>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-4 xl:gap-12 w-full'>
                        {benefitsData?.map((item: any, index: number) => (
                            <BoxBenefit key={index}>
                                <div className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-sm sm:text-xl'>{item.title}</div>
                                <div className='text-neutral text-xs sm:text-sm mt-1'>
                                    {item.description}
                                </div>
                            </BoxBenefit>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits