import BorderOurTeam from '@/components/border-our-team';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLang } from '@/lang/useLang';
import React, { useEffect, useState } from 'react'

const OurTeam = () => {
    const [isClient, setIsClient] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const { t } = useLang();
    
    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Get team data from translations
    const teamData = [
        {
            name: 'ROBIN',
            role: 'CTO',
            description: t('ourTeam.members.0.description')
        },
        {
            name: 'TIGER P.K',
            role: 'Backend Developer',
            description: t('ourTeam.members.1.description')
        },
        {
            name: 'Qi SNAKE',
            role: 'Blockchain Developer',
            description: t('ourTeam.members.2.description')
        },
        {
            name: 'HLEES',
            role: 'Frontend Developer',
            description: t('ourTeam.members.3.description')
        },
        {
            name: 'WILD',
            role: 'Frontend Developer',
            description: t('ourTeam.members.4.description')
        },
        {
            name: 'Hunter',
            role: 'Frontend Developer',
            description: t('ourTeam.members.5.description')
        },
        {
            name: 'REISHI',
            role: 'UI/UX Designer',
            description: t('ourTeam.members.6.description')
        },
        {
            name: 'ALAN',
            role: 'MKT & Community Manager',
            description: t('ourTeam.members.7.description')
        },
        {
            name: 'POOH',
            role: 'MKT & Community Manager',
            description: t('ourTeam.members.8.description')
        },
        {
            name: 'B.A.O',
            role: 'MKT & Community Manager',
            description: t('ourTeam.members.9.description')
        }
    ];
    
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

    return (
        <div className='bg-feature bg-[#020616BD]/60 z-50 w-full xl:h-svh flex items-center justify-around relative pt-20 overflow-hidden'>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
            <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[375px] h-[375px] z-20' style={{background: '#0090ff57'}}/>
            <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{ background: '#15dffd63', filter: 'blur(50px)' }} />
            <div className=' relative mb-[5%] container mx-auto w-full flex flex-col gap-16'>
                <div className='flex flex-col items-center justify-center gap-4  '>
                    <h2
                        ref={titleRef}
                        className={`title-feature text-[36px] xl:text-[43px] bg-clip-text absolute top-[-1px] left-0 w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
                    >
                        {t('ourTeam.title')}
                    </h2>
                    {/* <h3
                        ref={title2Ref}
                        className={`text-[#DFE0EF] text-[32px] w-fit webkit-text-stroke-1 font-bold h-[50px] bg-black/60 xl:min-w-[300px] min-w-[200px] flex items-center justify-center text-center z-10 leading-none animate-fade-in-up-delayed ${title2InView ? 'in-view' : ''}`}
                    >
                        OUR TEAM
                    </h3> */}
                </div>

                <div className='flex w-full h-full xl:justify-between flex-wrap gap-[1%] mt-10 items-center justify-center'>
                    {teamData.map((item, index) => (
                        <BorderOurTeam key={index} className='w-full xl:max-w-[19%] xl:mb-10 mb-2 max-w-[48%]'>
                            <div className={`text-neutral  font-bold bg-gradient-to-t from-white to-[#00C0FF] bg-clip-text ${isClient && windowWidth < 1600 ? 'text-sm' : 'text-lg'}`}>{item.name}</div>
                            <div className={`text-neutral font-medium  ${isClient && windowWidth < 1600 ? 'text-xs' : 'text-sm'}`}>{item.role}</div>
                            <div className={`text-neutral text-center ${isClient && windowWidth < 1600 ? 'text-xs' : 'text-sm'} mt-1`}>
                                {item.description}
                            </div>
                        </BorderOurTeam>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default OurTeam