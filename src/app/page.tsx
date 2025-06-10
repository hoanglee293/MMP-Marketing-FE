'use client';

import { useLang } from '@/lang';
import React from 'react'

export default function HomePage() {
  const { t } = useLang();
  return (
    <div>
      <h2 className='text-2xl font-bold text-green-600'>{t('home.title')}</h2>
    </div>
  )
}
