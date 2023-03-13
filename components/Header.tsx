import { Dog } from 'lucide-react'
import { FC } from 'react'
import { Navigation } from '@/components/Navigation'
import { ThemeToggle } from '@/components/ThemeToggle'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className='bg-white flex items-center justify-between h-12 py-1 px-2 dark:bg-slate-900 border-b dark:border-slate-700'>
      <div className='flex items-center gap-1 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text '>
        <Dog size={18} />
        <h1 className='text-sm font-bold text-transparent mr-10'>Archive</h1>
        <Navigation />
      </div>
      <ThemeToggle />
    </header>
  )
}
