import React from 'react'
import Hero from './Hero'
import Type from '../typessection/Type'
import OfferSection from '../offersection/OfferSection'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Type />
      <OfferSection desc='30% OFF' product='Shoes' date='30 Dec 2023 To 7 Jan 2024' src='/images/ProductsImage/Shoes/shoes.png' qulity='Best' sesonSale='Winter Sale'    description="Company that's grown from 270 to 480 employes in the Year" type='shoes' />
    </div>
  )
}
