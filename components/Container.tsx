import { FC } from 'react'

interface ContainerProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, title, className }) => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center shadow-lg border max-w-5xl p-10 relative m-10'>
      <p className='text-4xl font-bold tracking-tighter font-mono bg-gradient-to-r from-rose-400 to-amber-400 text-transparent bg-clip-text absolute left-10 top-10'>
        @{title}
      </p>
      <div className={className}>{children}</div>
    </div>
  )
}

export default Container
