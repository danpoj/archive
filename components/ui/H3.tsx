import { FC } from 'react'

interface h3Props {
  children: React.ReactNode
}

const H3: FC<h3Props> = ({ children }) => {
  return (
    <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
      {children}
    </h3>
  )
}

export default H3
