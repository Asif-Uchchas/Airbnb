'use client'
import Image from 'next/image'
import React from 'react'
import { AvatarProps } from '../../../types'

const Avatar = ({src}: AvatarProps) => {
  return (
      <Image
          src={src || '/placeholder.jpg'}
          alt="Avatar"
          width={30}
          height={30}
      className='rounded-full'
      />
  )
}

export default Avatar
