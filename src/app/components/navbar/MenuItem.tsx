'use client'
import React from 'react'
import { MenuItemProps } from '../../../../types'

const MenuItem = ({onClick, label}: MenuItemProps) => {
  return (
      <div
          onClick={onClick}
          className=' px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
      {label}
    </div>
  )
}

export default MenuItem
