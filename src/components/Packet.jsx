import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

function Packet() {
  return (
    <>
        <div className='flex flex-col items-center md:flex-row md:justify-center mt-16 mb-10'>
            <Card className="md:max-w-[28%] text-lg max-w-[375px] bg-amber-300 mx-4 my-4 hover:scale-105">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                    <p className="text-lg font-bold text-center my-2">PAKET STARTER <a className='line-through'>Rp. 850.000</a></p>
                    <p className="text-small">Cocok untuk Usaha yang  mau tetap aktif di Instagram, dengan budget yang SUPER HEMAT</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <ul className='list-disc pl-5'>
                        <li><a className='line-through'>Optimasi Profil Instagram</a></li>
                        <li><a className='line-through'>Free 7 Story Highlight (Senilai Rp 70.000)</a></li>
                        <li>30 Hari Konten Planner  (3 Konten dalam 1 Minggu)</li>
                        <li>12 Desain Feed</li>
                        <li><a className='line-through'>Feed Slide</a></li>
                        <li><a className='line-through'>Reels Motion</a></li>
                        <li>3 Desain Story</li>
                        <li>Free Caption</li>
                        <li>Free Hashtag</li>
                        <li><a className='line-through'>Admin Posting</a></li>
                        <li><a className='line-through'>Boost Optimasi Setiap Hari</a></li>
                        <li><a className='line-through'>Free 45 Menit Konsultasi Digital Marketing</a></li>
                    </ul>
                </CardBody>
                <Divider/>
                <CardFooter className='justify-center'>
                    <Button color='warning' as={Link} href='https://wa.link/rco7m5' target='_blank' className='font-bold'>
                        Pesan Paket Starter Kini Cuma Rp. 449.000
                    </Button>
                </CardFooter>
            </Card>
            <Card className="md:max-w-[28%] text-lg max-w-[375px] bg-green-300 mx-4 my-4 hover:scale-105">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                    <p className="text-lg font-bold text-center my-2">PAKET OPTIMAL <a className='line-through'>Rp. 1.600.000</a></p>
                    <p className="text-small">Cocok untuk Usaha yang  mau memaksimalkan Instagram sebagai Penguat Branding dan Selling</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <ul className='list-disc pl-5'>
                        <li>Optimasi Profil Instagram</li>
                        <li>Free 7 Story Highlight (Senilai Rp 70.000)</li>
                        <li>30 Hari Konten Planner  (Setiap  hari 1 Konten)</li>
                        <li>25 Desain Feed</li>
                        <li>4 Feed Slide </li>
                        <li>1 Reels Motion</li>
                        <li>7 Desain Story</li>
                        <li>Super Caption</li>
                        <li>Super Hashtag</li>
                        <li>Admin Posting</li>
                        <li>Boost Optimasi Setiap Hari</li>
                        <li>Free 45 Menit Konsultasi Digital Marketing</li>
                    </ul>
                </CardBody>
                <Divider/>
                <CardFooter className='justify-center'>
                    <Button color='success' as={Link} href='https://wa.link/te5gtf' target='_blank' className='font-bold'>
                        Pesan Paket Optimal Kini Hanya Rp. 889.000
                    </Button>
                </CardFooter>
            </Card>
            <Card className="md:max-w-[28%] text-lg max-w-[375px] bg-violet-300 mx-4 my-4 hover:scale-105">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                    <p className="text-lg font-bold text-center my-2">PAKET OPTIMAL 3 BULAN <a className='line-through'>Rp. 4.800.000</a></p>
                    <p className="text-small">Cocok untuk Usaha yang  mau memaksimalkan Instagram sebagai Penguat Branding dan Selling</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <ul className='list-disc pl-5'>
                        <li>Optimasi Profil Instagram</li>
                        <li>Free 7 Story Highlight (Senilai Rp 70.000)</li>
                        <li>30 Hari Konten Planner  (Setiap  hari 1 Konten)</li>
                        <li>25 Desain Feed</li>
                        <li>4 Feed Slide </li>
                        <li>1 Reels Motion</li>
                        <li>7 Desain Story</li>
                        <li>Super Caption</li>
                        <li>Super Hashtag</li>
                        <li>Admin Posting</li>
                        <li>Boost Optimasi Setiap Hari</li>
                        <li>Free 45 Menit Konsultasi Digital Marketing</li>
                    </ul>
                </CardBody>
                <Divider/>
                <CardFooter className='justify-center'>
                    <Button color='success' as={Link} href='https://wa.link/dfpk4p' target='_blank' className='font-bold bg-violet-500 '>
                        Pesan Paket Optimal 3 Bulan Hanya Rp. 2.000.000
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </>
  )
}

export default Packet