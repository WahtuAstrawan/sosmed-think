import React from 'react'
import { Image } from '@nextui-org/react'
import figurePromo from '../assets/figure.png'
import {Card, CardBody} from "@nextui-org/react";

function Figure() {
  return (
    <>
        <div className='flex flex-col items-center justify-center mt-10'>
            <Image alt="figure-promo" src={figurePromo} />
            <Card className='bg-amber-300 md:max-w-[35%] text-lg max-w-[400px]'>
                <CardBody>
                    <p>Kalau dibandingkan investasi bangun tim social media sendiri yang nyampe ngabisin <a className='bg-red-600 font-black'>9 Juta - 20 Juta</a> Bandingan dengan Jasa kita yang cuma <a className=' bg-green-600 font-black'>Ratusan Ribu</a> sudah dipastikan budget usaha anda bisa dialihkan untuk exspansi bisnis dan konten berkualitas di instagram anda tetap konsisten upload oleh tim kita.</p>
                </CardBody>
            </Card>
        </div>
    </>
  )
}

export default Figure