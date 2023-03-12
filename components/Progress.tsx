'use client'

import { Progress as ProgressAlias } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export function Progress() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <ProgressAlias value={progress} className='w-[60%]' />
}
