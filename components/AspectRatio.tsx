'use client'

import Image from 'next/image'

import { AspectRatio as AR } from '@/components/ui/aspect-ratio'

export function AspectRatio() {
  return (
    <AR ratio={16 / 9} className='bg-slate-50 dark:bg-slate-800'>
      <Image
        src='https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=60'
        alt='Photo by Alvaro Pinot'
        fill
        className='rounded-md object-cover'
      />
    </AR>
  )
}
