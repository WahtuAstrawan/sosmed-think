import React from 'react'
import {Button, Link} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";

function Opening() {
  return (
    <>
        <h1 className='text-4xl font-bold text-center my-7'>
            Mau Penjualan Meningkat setelah INSTAGRAM di Optimalkan?
        </h1>
        <p className='text-xl text-center mt-3'>
            Follower PASTI TUMBUH atau uang kembali 100%
        </p>
        <div className='text-center my-5'>
            <Button color='success' as={Link} href='https://go.linkwa.id/s1Z7LFY' target='_blank' className='hover:scale-105'>
                KLAIM SEKARANG
            </Button>
        </div>
        <p className='text-lg text-center'>
            Kebanyakan social media management, merencanakan, desain, posting,
        </p>
        <div className='text-center my-5'>
            <Button className='bg-amber-300 text-center'>
                TAPI
            </Button>
        </div>
        <p className='text-lg text-center'>
            Mereka lupa social media hanya bisa berkembang kalau, digunakan bersosialisasi. Follow, komen ke tempat target market usaha kalian
        </p>
    </>
  )
}

export default Opening