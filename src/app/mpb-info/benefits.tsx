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
        <div className='bg-footer bg-[#020616BD]/60 z-50 w-full xl:h-svh relative pt-[6%] overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[375px] h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <div className='container mx-auto h-full flex flex-col'>
                <div className='flex flex-col items-center justify-center relative'>
                    <h2
                        ref={titleRef}
                        className={`bg-gradient-purple-cyan uppercase text-[36px] xl:text-[43px] bg-clip-text w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                    >
                        {t('mpbInfo.benefits.title')}
                    </h2>
                    <div className='flex flex-col items-center justify-center gap-4 relative h-[50px] mb-10'>
                        <p
                            ref={descRef}
                            className={`text-neutral text-center text-base xl:max-w-[1050px] max-w-[460px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                        >
                           {t('mpbInfo.benefits.description')}
                        </p>

                    </div>
                </div>
                <div className=' flex items-center justify-center z-20 gap-[4vw]'>
                    {
                        listBenefits.map((item, index) => (
                            <div className='max-w-[398px] p-2 bg-transparent border-2 border-[#33FCFF] border-solid rounded-xl '>
                                <div className='w-full min-h-[570px] bg-gradient-to-l from-[#330C5E] to-[#0F2A58] flex flex-col gap-5 p-4 rounded-xl'>
                                    <img src={item.image} alt="benefits" className='w-full h-[244px] object-cover rounded-xl' />
                                    <h4 className='text-[#12D6DF] text-2xl font-bold'>{item.title}</h4>
                                    <p className='text-white text-base'>
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