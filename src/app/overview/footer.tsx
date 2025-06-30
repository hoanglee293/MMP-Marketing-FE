import BorderPrimary from '@/components/border-primary'
import { useLang } from '@/lang/useLang'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const router = useRouter()
    const { t } = useLang()
    return (
        <div className='bg-footer w-full xl:min-h-screen flex items-center justify-center relative xl:pt-20 pt-10 overflow-hidden px-4 sm:px-6 lg:px-8'>

            <div className='relative mb-[5%] container mx-auto w-full flex flex-col gap-10 sm:gap-20 lg:gap-32 z-30'>
                {/* Swap Card */}
                <div className='flex flex-col lg:flex-row items-center justify-center min-h-[120px] sm:h-[150px] lg:h-[178px] bg-gradient-to-l from-[#0b4343]/70 to-[#014185]/70 w-full backdrop-blur-lg rounded-lg overflow-hidden'>
                    <div className="hidden lg:block border-4 rounded-l-lg border-r-0 border-solid border-[#33FCFF] h-full w-16" />
                    <div className='flex flex-col lg:flex-row items-center justify-around flex-1 h-[100%] overflow-hidden p-4 sm:p-6 lg:p-0 gap-4 lg:gap-0'>
                        <div className='flex flex-col justify-center gap-2 sm:gap-4 text-center lg:text-left'>
                            <div className='flex flex-row items-center xl:justify-start justify-center gap-1 sm:gap-2'>
                                <h3 className='text-neutral text-base sm:text-2xl lg:text-4xl font-bold bg-gradient-to-t from-[#33FCFF] to-[#2492FE] bg-clip-text'>{t('footer.swapNow')}</h3>
                                <span className="text-neutral bg-transparent text-base sm:text-2xl lg:text-4xl font-bold">- {t('footer.leadFuture')}</span>
                            </div>
                            <p className='text-neutral text-xs sm:text-base lg:text-lg max-w-[750px] px-2 sm:px-0'>
                                {t('footer.swapDescription')}
                            </p>
                        </div>

                        <div className='h-[40px] w-[199px] relative' onClick={() => router.push('/swap')}>
                            <BorderPrimary >{t('footer.swapNow')}</BorderPrimary>
                        </div>
                    </div>
                    <div className="hidden lg:block border-4 rounded-r-lg border-l-0 border-solid border-[#33FCFF] h-full w-16" />
                </div>

                {/* Brand Section */}
                <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-0'>
                    <h1 className='text-[36px] sm:text-[50px] lg:text-[70px] orbitron-font font-bold text-center text-white uppercase bg-gradient-purple-cyan bg-clip-text leading-tight'>
                        MEMEPUMP
                    </h1>
                    
                    {/* Social Icons */}
                    <div className='flex items-center justify-center gap-4 sm:gap-6 lg:gap-8'>
                        {/* Telegram Icon */}
                        <a href="https://t.me/MemePumpOfficial" className="hover:scale-110 transition-transform duration-200 p-2 sm:p-3 rounded-full border-2 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border-solid border-[#1DA1F2]">
                            <img src="/tele-icon.png" alt="Telegram" className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
                        </a>

                        {/* Twitter Icon */}
                        <a href="https://x.com/MemePump7" className="hover:scale-110 transition-transform duration-200 p-2 sm:p-3 rounded-full border-2 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border-solid border-[#1DA1F2]">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                    
                    <p className='text-neutral text-center text-xs sm:text-base max-w-[750px] px-4 sm:px-0'>
                        {t('footer.communityDescription')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer