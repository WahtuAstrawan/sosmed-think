import * as React from 'react'
import NavbarSosmed from './components/NavbarSosmed'
import Opening from './components/Opening'
import Facility from './components/Facility'
import Portfolio from './components/Portfolio'
import Figure from './components/Figure'
import Packet from './components/Packet'
import MetaPixel from './components/MetaPixel'

function App() {
  return (
    <>
      <MetaPixel/>
      <NavbarSosmed/>
      <Opening/>
      <Facility/>
      <Portfolio/>
      <Figure/>
      <Packet/>
    </>
  )
}

export default App