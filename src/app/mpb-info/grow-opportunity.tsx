import BorderOurTeam from '@/components/border-our-team';
import BorderPrimary from '@/components/border-primary';
import BoxInvestment from '@/components/box-investment';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import React from 'react'
import { useRouter } from 'next/navigation';
import { useLang } from '@/lang/useLang';

const GrowOpportunity = () => {
    const router = useRouter();
    const { t } = useLang();
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
                        {t('mpbInfo.growOpportunity.title')}
                    </h2>
                </div>
                <div className='flex-1 flex items-center justify-center p-10'>
                    <div className='flex flex-col items-center justify-center z-20 gap-10 basis-1/3'>
                        <div className='flex flex-col items-center justify-center gap-1 w-full max-w-[300px] z-20'>
                            <BorderOurTeam className='w-full '>
                                <p className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-sm sm:text-xl text-center uppercase'>
                                    Price 0.001 USD
                                </p>
                                <p className='text-neutral font-medium text-xs sm:text-sm mt-1'>
                                    until 31/07/2025.
                                </p>
                            </BorderOurTeam>
                            <BoxInvestment>
                                First sale round
                            </BoxInvestment>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1 w-full max-w-[300px] z-20'>
                            <BorderOurTeam className='w-full '>
                                <div className='text-neutral font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text text-sm sm:text-xl uppercase'>
                                    from 0.002 USD
                                </div>
                                <div className='text-neutral text-xs sm:text-sm mt-1 uppercase font-semibold'>
                                    and above
                                </div>
                            </BorderOurTeam>
                            <BoxInvestment>
                                Round 2
                            </BoxInvestment>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-6 z-20 basis-2/3 h-full'>
                        <img
                            ref={mmpImageRef}
                            src="/MMP-hex.png"
                            alt="exchange-token"
                            className={`w-full max-w-[280px] h-auto object-cover animate-fade-in-up z-20 ${mmpImageInView ? 'in-view' : ''}`}
                        />
                        <h3 className='text-neutral text-center text-2xl font-bold  xl:max-w-[1050px] max-w-[460px] mt-4'>
                            {t('mpbInfo.growOpportunity.potentialTitle')}
                        </h3>
                        <p className='text-neutral font-medium text-center text-sm m-0 xl:max-w-[800px] max-w-[460px] '>{t('mpbInfo.growOpportunity.potentialDescription')}</p>
                        <div className='h-[40px] w-[199px] relative' onClick={() => router.push('/swap')}>
                            <BorderPrimary >{t('footer.swapNow')}</BorderPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowOpportunity