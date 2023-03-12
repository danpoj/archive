import { FC } from 'react'

interface h1Props {
  children: React.ReactNode
}

const H1: FC<h1Props> = ({ children }) => {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  )
}

export default H1
