import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ArrowRightIcon } from 'lucide-react';
import React from 'react'
import { useLang } from '@/lang/useLang'
import { useRouter } from 'next/navigation';

const BorderExchangeToken = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full relative max-w-[150px] sm:max-w-[300px] xl:max-w-[400px] lg:max-w-[380px] md:max-w-[360px] max-h-[45px] sm:max-h-[49px] xl:max-h-[60px] lg:max-h-[55px] md:max-h-[52px] aspect-[280/45] sm:aspect-[300/49] xl:aspect-[400/60] lg:aspect-[380/55] md:aspect-[360/52]'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 335 49" 
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <foreignObject x="-19.5" y="-19.5396" width="374" height="88"><div style={{ backdropFilter: 'blur(10px)', clipPath: 'url(#bgblur_0_445_1383_clip_path)', height: '100%', width: '100%' }}></div></foreignObject><path data-figma-bg-blur-radius="20" d="M32.6289 47.7104L13.3926 28.7915L13.3926 13.6216C13.3925 13.4331 13.3221 13.2512 13.1943 13.1128L2.21192 1.21042L140.645 1.21043L144.362 4.86571C144.467 4.96913 144.6 5.03865 144.742 5.06688L144.888 5.08153L322.387 5.08154L333.75 16.2593L333.75 47.7104L32.6289 47.7104Z" fill="url(#paint0_linear_445_1383)" stroke="url(#paint1_linear_445_1383)" strokeWidth="1.5" strokeLinejoin="round" />
        <defs>
          <clipPath id="bgblur_0_445_1383_clip_path" transform="translate(19.5 19.5396)"><path d="M32.6289 47.7104L13.3926 28.7915L13.3926 13.6216C13.3925 13.4331 13.3221 13.2512 13.1943 13.1128L2.21192 1.21042L140.645 1.21043L144.362 4.86571C144.467 4.96913 144.6 5.03865 144.742 5.06688L144.888 5.08153L322.387 5.08154L333.75 16.2593L333.75 47.7104L32.6289 47.7104Z" />
          </clipPath><linearGradient id="paint0_linear_445_1383" x1="335.783" y1="34.525" x2="25.843" y2="19.0948" gradientUnits="userSpaceOnUse">
            <stop stop-color="#330C5E" />
            <stop offset="1" stop-color="#0F2A58" />
          </linearGradient>
          <linearGradient id="paint1_linear_445_1383" x1="335.783" y1="31.4282" x2="26.0039" y2="14.4638" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F70FFF" />
            <stop offset="1" stop-color="#12D6DF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex text-neutral w-full items-center flex-col xl:gap-4 gap-1 justify-center h-full top-0 left-0 absolute z-10 ">
        {children}
      </div>
    </div>
  )
}


const ExchangeToken = () => {
  const router = useRouter();
  const { t } = useLang();
  
  const { elementRef: titleRef, isIntersecting: titleInView } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });
  const { elementRef: descRef, isIntersecting: descInView } = useIntersectionObserver<HTMLParagraphElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const { elementRef: mmpButtonRef, isIntersecting: mmpButtonInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const { elementRef: mpbButtonRef, isIntersecting: mpbButtonInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const { elementRef: mmpImageRef, isIntersecting: mmpImageInView } = useIntersectionObserver<HTMLImageElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const { elementRef: mpbImageRef, isIntersecting: mpbImageInView } = useIntersectionObserver<HTMLImageElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const { elementRef: mmpTextRef, isIntersecting: mmpTextInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const { elementRef: mpbTextRef, isIntersecting: mpbTextInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '-50px'
  });

  return (
    <div className='bg-feature bg-[#020616BD]/60 z-50 w-full xl:h-svh flex items-center justify-center relative xl:pt-20 pt-10 overflow-hidden'>
      <div className='absolute top-0 right-0 w-full h-full bg-[#0f121ad6] backdrop-blur-lg' />
      <div className='eclipse-box absolute bottom-[10%] left-[10%] w-[375px] h-[375px] z-20' style={{background: '#0090ff57'}}/>
      <div className='eclipse-box absolute top-[10%] right-[10%] w-[254px] h-[254px] z-20' style={{background: '#15dffd63', filter: 'blur(50px)'}}/>
      <div className='container mx-auto px-4 relative mb-[5%]'>
        <div className='flex flex-col items-center justify-center gap-4 relative h-[50px]'>
          <h2
            ref={titleRef}
            className={`title-feature text-[30px] xl:text-[40px] bg-clip-text absolute top-0 left-0 w-full h-full text-center animate-fade-in-up ${titleInView ? 'in-view' : ''}`}
          >
            {t('exchangeToken.title')}
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 relative h-[50px] xl:mt-10 mt-5'>
          <p
            ref={descRef}
            className={`text-neutral text-center text-xs sm:text-sm  xl:max-w-[950px] max-w-[500px]  animate-fade-in-up-delayed ${descInView ? 'in-view' : ''}`}
          >
            {t('exchangeToken.description')}
          </p>
        </div>
        <div className='flex w-full items-center justify-evenly relative xl:mt-[5%] mt-10'>
          <div className='w-1/2 max-w-[280px] flex flex-col items-center justify-center gap-10'>
            <img 
              ref={mmpImageRef}
              src="/MMP-hex.png" 
              alt="exchange-token" 
              className={`w-full xl:max-w-[280px] max-w-[150px] h-auto object-cover animate-fade-in-up ${mmpImageInView ? 'in-view' : ''}`} 
            />
            <div 
              ref={mmpTextRef}
              className={`flex flex-col items-center justify-center gap-1 animate-fade-in-up-delayed ${mmpTextInView ? 'in-view' : ''}`}
            >
              <span className='text-white text-center text-xs sm:text-base'>{t('exchangeToken.mmp.symbol')}</span>
              <span className='text-white text-center text-xs sm:text-base'>{t('exchangeToken.mmp.name')}</span>
            </div>
         
            <div 
              ref={mmpButtonRef}
              className={`animate-fade-in-up-delayed ${mmpButtonInView ? 'in-view' : ''}`}
            >
              <BorderExchangeToken >
                <div className='text-white text-center text-xs sm:text-base w-full flex items-center justify-center gap-3 cursor-pointer' onClick={() => router.push('/mmp-info')}>
                  {t('exchangeToken.mmp.explore')} <ArrowRightIcon className='w-4 h-4' />
                </div>
              </BorderExchangeToken>
            </div>
          </div>
          <div className='w-1/2 max-w-[280px] flex flex-col items-center justify-center gap-10'>
            <img 
              ref={mpbImageRef}
              src="/MPB-hex.png" 
              alt="exchange-token" 
              className={`w-full xl:max-w-[280px] max-w-[150px] h-auto object-cover animate-fade-in-up ${mpbImageInView ? 'in-view' : ''}`} 
            />
            <div 
              ref={mpbTextRef}
              className={`flex flex-col items-center justify-center gap-1 animate-fade-in-up-delayed ${mpbTextInView ? 'in-view' : ''}`}
            >
              <span className='text-white text-center text-xs sm:text-base'>{t('exchangeToken.mpb.symbol')}</span>
              <span className='text-white text-center text-xs sm:text-base'>{t('exchangeToken.mpb.name')}</span>
            </div>
            <div 
              ref={mpbButtonRef}
              className={`animate-fade-in-up-delayed ${mpbButtonInView ? 'in-view' : ''}`}
            >
              <BorderExchangeToken>
                <div className='text-white text-center text-xs sm:text-base w-full flex items-center justify-center gap-3'>
                  {t('exchangeToken.mpb.explore')} <ArrowRightIcon className='w-4 h-4' />
                </div>
              </BorderExchangeToken>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ExchangeToken