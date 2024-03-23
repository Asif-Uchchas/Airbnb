'use client'
import Image from 'next/image'
import React from 'react'
import { AvatarProps } from '../../../types'
import ClientOnly from './ClientOnly'

const Avatar = ({src}: AvatarProps) => {
  return (
    <ClientOnly>
      <Image
          src={src || '/placeholder.jpg'}
          alt="Avatar"
          width={30}
          height={30}
      className='rounded-full'
      />
      </ClientOnly>
  )
}

export default Avatar
