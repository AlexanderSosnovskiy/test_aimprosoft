import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

import img from '../../assets/images/banner_slider_sport_and_lifestyle.jpg'
import './Banner.scss'

function Banner() {
  return (
    <Carousel defaultActiveIndex={2} controls={false} interval={3000}>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption className='r2l-carousel__caption text-center'>
          <h2 className='r2l-carousel__title'>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h2>
          <p className='text-uppercase'>sports & lifestyle</p>
          <Button variant='link' className='r2l-carousel__link text-uppercase'>
            confira
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption className='r2l-carousel__caption text-center'>
          <h2 className='r2l-carousel__title'>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h2>
          <p className='text-uppercase'>sports & lifestyle</p>
          <Button variant='link' className='r2l-carousel__link text-uppercase'>
            confira
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption className='r2l-carousel__caption text-center'>
          <h2 className='r2l-carousel__title'>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h2>
          <p className='text-uppercase'>sports & lifestyle</p>
          <Button variant='link' className='r2l-carousel__link text-uppercase'>
            confira
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption className='r2l-carousel__caption text-center'>
          <h2 className='r2l-carousel__title'>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h2>
          <p className='text-uppercase'>sports & lifestyle</p>
          <Button variant='link' className='r2l-carousel__link text-uppercase'>
            confira
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-responsive' src={img} alt='First slide' />
        <Carousel.Caption className='r2l-carousel__caption text-center'>
          <h2 className='r2l-carousel__title'>
            <span className='text-uppercase font-weight-bold'>c&f</span>
            <span className='text-uppercase'> clothing</span>
          </h2>
          <p className='text-uppercase'>sports & lifestyle</p>
          <Button variant='link' className='r2l-carousel__link text-uppercase'>
            confira
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
