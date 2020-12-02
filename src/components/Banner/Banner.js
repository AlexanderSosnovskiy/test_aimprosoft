import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import img from '../../assets/images/banner_slider_sport_and_lifestyle.jpg'
import './Banner.scss'

function Banner() {
  return (
    <Carousel defaultActiveIndex={2} controls={false}>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span>c&f</span>
            clothing
          </h3>
          <p>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span>c&f</span>
            clothing
          </h3>
          <p>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span>c&f</span>
            clothing
          </h3>
          <p>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span>c&f</span>
            clothing
          </h3>
          <p>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img} alt='First slide' />
        <Carousel.Caption>
          <h3>
            <span>c&f</span>
            clothing
          </h3>
          <p>sports and lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
