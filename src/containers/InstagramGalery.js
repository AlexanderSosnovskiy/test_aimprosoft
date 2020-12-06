import React, { Component } from 'react'
/* eslint-disable import/first */
import Glide from '@glidejs/glide'

import Section from './Section'
import { r2lGalery } from '../data'

export default function InstagramGalery({ galery }) {
  React.useEffect(() => {
    new Glide('.glide', {
      gap: 15,
      focusAt: 'center',
      perTouch: 1,
      perView: 6,
    }).mount()
  }, [])

  return (
    <Section title='galeria de instagram'>
      <div className=' glide'>
        <div className=' glide__track' data-glide-el='track'>
          <ul className=' glide__slides'>
            {r2lGalery.map(galery => (
              <div key={galery.id} className='r2l-galery-img-container'>
                <img
                  className='r2l-galery__img'
                  src={galery.img}
                  alt='galery'
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
