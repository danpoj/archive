import { FC } from 'react'

interface blockquoteProps {
  children: React.ReactNode
}

const Blockquote: FC<blockquoteProps> = ({ children }) => {
  return (
    <blockquote className='mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200'>
      {children}
    </blockquote>
  )
}

export default Blockquote
