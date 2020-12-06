import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Shipping.scss'

function Shipping() {
  const settings = {
    arrows: false,
    autoplay: true,
    className: 'r2l-slick-slider r2l-slick-slider--bg',
    dots: true,
    dotsClass: 'slick-dots r2l-slick-dots r2l-slick-dots--align-right',
    fade: true,
    initialSlide: 1,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div className='text-center text-uppercase r2l-slick-slider__item'>
        <span className='font-weight-bold'>frete gratis</span>
        <span className='r2l-slick-slider__item--margin'>
          para compras acima de r$300.00
        </span>
      </div>
      <div className='text-center text-uppercase r2l-slick-slider__item'>
        <span className='font-weight-bold'>frete gratis</span>
        <span className='r2l-slick-slider__item--margin'>
          really for free, if you buy something for more than $200
        </span>
      </div>
      <div className='text-center text-uppercase r2l-slick-slider__item'>
        <span className='font-weight-bold'>frete gratis</span>
        <span className='r2l-slick-slider__item--margin'>
          some other text only for $299
        </span>
      </div>
    </Slider>
  )
}

export default Shipping
