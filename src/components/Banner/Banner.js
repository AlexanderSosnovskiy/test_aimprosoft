import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import img from '../../assets/images/banner_slider_sport_and_lifestyle.jpg'
import './Banner.scss'

function Banner() {
  return (
    <Carousel defaultActiveIndex={2} controls={false} interval={3000}>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h3>
          <p className='text-uppercase'>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='Second slide' />
        <Carousel.Caption>
          <h3>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h3>
          <p className='text-uppercase'>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h3>
          <p className='text-uppercase'>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h3>
          <p className='text-uppercase'>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h3>
          <p className='text-uppercase'>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
