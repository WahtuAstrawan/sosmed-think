import React from 'react'
import {Image} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'

function Portfolio() {
  return (
    <>
        <h1 className='text-3xl font-bold text-center mt-10 mb-16' id='portfolio-section'>Portofolio Desain Feed Kami</h1>
        <ScrollShadow orientation='horizontal' hideScrollBar className='flex flex-row w-[90%] content-center mx-16' size={30}>
            <Image alt="our-portfolio" src={img1} isZoomed className='max-w-[300px] mx-5'/>
            <Image alt="our-portfolio" src={img2} isZoomed className='max-w-[300px] mx-5'/>
            <Image alt="our-portfolio" src={img3} isZoomed className='max-w-[300px] mx-5'/>
            <Image alt="our-portfolio" src={img4} isZoomed className='max-w-[300px] mx-5'/>
            <Image alt="our-portfolio" src={img5} isZoomed className='max-w-[300px] mx-5'/>
        </ScrollShadow>
    </>
  )
}

export default Portfolio