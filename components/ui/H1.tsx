import { cn } from '@/lib/utils'
import { FC } from 'react'

interface h1Props {
  children: React.ReactNode
  className?: string
}

export const H1: FC<h1Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  )
}
