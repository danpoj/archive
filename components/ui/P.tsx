import { FC } from 'react'

interface pProps {
  children: React.ReactNode
}

const P: FC<pProps> = ({ children }) => {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>
}

export default P
