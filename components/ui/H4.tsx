import { FC } from 'react'

interface h4Props {
  children: React.ReactNode
}

const H4: FC<h4Props> = ({ children }) => {
  return (
    <h4 className='mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  )
}

export default H4
