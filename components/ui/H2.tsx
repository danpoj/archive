import { FC } from 'react'

interface h2Props {
  children: React.ReactNode
}

const H2: FC<h2Props> = ({ children }) => {
  return (
    <h2 className='mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700'>
      {children}
    </h2>
  )
}

export default H2
