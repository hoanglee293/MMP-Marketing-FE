'use client';

import { useLang } from '@/lang';
import React, { useMemo } from 'react'

export default function HomePage() {
  const { t } = useLang();
  
  const title = useMemo(() => t('home.title'), [t]);
  
  return (
    <div>
      <h2 className='text-2xl font-bold text-green-600'>{title}</h2>
    </div>
  )
}
