import BoxBenefit from '@/components/border-benefit'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useLang } from '@/lang/useLang'
import React from 'react'

const Benefits = () => {
    const { t } = useLang()
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
    const listBenefit = [
        {
            title: 'Strong growth potential',
            description: 'The value of MMP is expected to rise from $0.001/token to $0.328/token, presenting an exceptional profit opportunity. If the daily trading volume reaches between $10 million and $300 million, the value of MMP could increase by 328 times.'
        },
        {
            title: 'User-friendly for newcomers',
            description: 'MMP is designed with a user-friendly interface, suitable for newcomers to the cryptocurrency market. Its integration with the Solana ecosystem and tools like TradingView makes it easy for users to access and use effectively.'
        },
        {
            title: 'Flexible investment',
            description: 'You can start with just $0.001/token, making it suitable for small investors as well.'
        },
        {
            title: 'Airdrop benefits',
            description: 'Holders of MPB (MemePump Bonus) will receive 1.5% monthly and 18% annually for two years through Airdrop.'
        },

    ]
    return (
        <div className='bg-feature bg-[#020616BD]/60 z-50 w-full xl:h-svh relative pt-[6%] overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[375px] h-[375px] z-20' style={{ background: '#0090ff57' }} />
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <div className='container mx-auto h-full flex flex-col'>
                <div className='flex flex-col items-center justify-center gap-10 relative'>
                    <div className='flex flex-col items-center justify-center gap-4 bg-black/60 w-fit '>
                        <h2
                            ref={titleRef}
                            className={`title-feature text-[36px] xl:text-[43px] bg-clip-text absolute top-[8%] left-0 w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                        >
                            Benefits of investing in MMP
                        </h2>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 relative h-[50px] mt-10 mb-10'>
                        <p
                            ref={descRef}
                            className={`text-neutral text-center text-sm  xl:max-w-[1050px] max-w-[460px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
                        >
                            MMP will maximize the potential of the cryptocurrency market, especially in the area of community rewards. It is expected that by 2025, this sector will account for 55% of the total transaction value, and MemePump will play a key role in that growth.
                        </p>

                    </div>
                </div>
                <div className=' flex-1 flex items-center justify-center'>
                    <div className='grid grid-cols-2 gap-12'>
                        {listBenefit.map((item, index) => (
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