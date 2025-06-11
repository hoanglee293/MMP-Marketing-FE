'use client'

import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const pathname = usePathname()

  const tabs = [
    { id: 'overview', href: '/', label: 'Overview', icon: '📊' },
    { id: 'swap', href: '/swap', label: 'Swap', icon: '🔄' },
    { id: 'stake', href: '/stake', label: 'Stake', icon: '🔒' },
    { id: 'referral', href: '/referral', label: 'Referral', icon: '👥' },
  ]
  console.log(pathname)
  return (
    <header className="w-full bg-overlay backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-[16px] lg:px-[40px] flex flex-col gap-6 relative mx-auto z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/mmp-logo.png"
              alt="MMP Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          {/* Navigation Tabs */}
          <nav className="flex-1 gap-[100px] flex justify-center items-center">
            {tabs.map((tab) => (
              <Link className={cn('text-sm text-neutral font-medium cursor-pointer', pathname === tab.href && 'bg-gradient-purple-cyan bg-clip-text')} href={tab.href} key={tab.id}>
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-neutral font-medium">Join us</span>
            <div className='w-6 h-6 cursor-pointer flex items-center justify-center bg-neutral rounded-full' ><img src="/tele-icon.png" alt="tele-icon" className='w-3 h-3' style={{ marginLeft: '-3px' }} /></div>
            <div className='w-6 h-6 cursor-pointer flex items-center justify-center bg-neutral rounded-full'><img src="/gg-icon.png" alt="gg-icon" className='w-3 h-3' /></div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
