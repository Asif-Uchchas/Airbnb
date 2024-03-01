'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import Usermenu from './Usermenu'
import { NavbarProps } from '../../../../types'


const Navbar = ({
  currentUser
}: NavbarProps) => {
  console.log(currentUser)
  return (
      <nav className='fixed w-full bg-white z-10 shadow-sm'>
          <div className=' py-4 border-b-[1px]'>
              <Container>
                  <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <Usermenu currentUser = { currentUser } />
                  </div>
                  
              </Container>
          </div>
    </nav>
  )
}

export default Navbar
