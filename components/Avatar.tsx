'use client'

import {
  Avatar as AvatarContainer,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { FC } from 'react'

interface AvatarProps {
  src: string
  alt: string
}

export const Avatar: FC<AvatarProps> = ({ src, alt }) => {
  return (
    <AvatarContainer>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarContainer>
  )
}
