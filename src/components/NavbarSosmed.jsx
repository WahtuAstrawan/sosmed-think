import React, {useState} from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import logo from '../assets/logo.png'

function NavbarSosmed() {
    return (
      <Navbar className='bg-cyan-100 h-20' shouldHideOnScroll>
        <NavbarContent>
          <NavbarBrand>
            <img src={logo} alt="sosmed-think" className='w-16 h-16'/>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="center">
          <NavbarItem className='mx-4'>
            <Link color="foreground" href="#facility-section">
              Fasilitas
            </Link>
          </NavbarItem>
          <NavbarItem className='mx-4'>
            <Link href="#portfolio-section" color="foreground">
              Portofolio
            </Link>
          </NavbarItem>
          <NavbarItem className='mx-4'>
            <Link color="foreground" href="#">
              Paket
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}

export default NavbarSosmed