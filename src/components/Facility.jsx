import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

function Facility() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-10 mb-5' id='facility-section'>Fasilitas yang kamu dapat kalau sosmedmu kami bantu</h1>
      <div className='flex flex-col items-center md:flex-row md:justify-center'>
        <Card className="max-w-[250px] bg-amber-300 mx-5 my-5 hover:scale-105">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold">
                Konsultasi Private
              </p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Mendapatkan sesi konsultasi hingga 45 menit yang membahas tentang bisnis digital marketing untuk menumbuhkan bisnis Kamu</p>
            <br />
            <br />
            <br />
          </CardBody>
        </Card>
        <Card className="max-w-[250px] bg-cyan-300 mx-5 my-5 hover:scale-105">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold text-center">
                Hemat Biaya Tim
              </p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Sosmed Specialis : 3 Juta</p>
            <p>Desainer : 3 Juta </p>
            <p>Admin Instagram  : 3 Juta </p>
            <p>(Tapi itu kalau kamu rekrut tim yang pemula)</p>
            <br />
            <p>Kalau Profesional seperti tim kami pasti Budgetnya akan membengkak.</p>
          </CardBody>
        </Card>
        <Card className="max-w-[250px] bg-emerald-300 mx-5 my-5 hover:scale-105">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold text-center">
              Optimasi Setiap Hari
              </p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Hal yang tidak dilakukan Sosmed manajemen lain. Kami siapakan waktu khusus buat melakukan interaksi di akun sosmed anda seperti view, like, dan komen di akun target market produk kalian.</p>
            <br />
          </CardBody>
        </Card>
        <Card className="max-w-[250px] bg-violet-300 mx-5 my-5 hover:scale-105">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold text-center">
              Garansi 100%
              </p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Dana akan dikembalikan penuh jika hingga di akhir periode tidak ada perkembangan pada akun instagram anda.</p>
            <br />
            <br />
            <br />
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Facility