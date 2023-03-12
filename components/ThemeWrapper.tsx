'use client'

import { ThemeProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const ThemeWrapper: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
