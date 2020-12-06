import React, { Component } from 'react'
/* eslint-disable import/first */
import Glide from '@glidejs/glide'

import { r2lProducts } from '../data'

import Section from './Section'
import Product from '../components/Product'

export default function ProductList() {
  React.useEffect(() => {
    new Glide('.glide', {
      autoplay: 4000,
      type: 'carousel',
      gap: 15,
      breakpoints: {
        768: {
          perView: 4,
          focusAt: 'center',
        },
        576: {
          perView: 1,
        },
      },
    }).mount()
  }, [])

  return (
    <Section title='productos em destaque'>
      <div className=' glide'>
        <div className=' glide__track' data-glide-el='track'>
          <ul className=' glide__slides'>
            {r2lProducts.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
