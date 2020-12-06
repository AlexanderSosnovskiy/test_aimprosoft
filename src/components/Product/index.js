import React from 'react'

import './Product.scss'

export default class Product extends React.Component {
  render() {
    const { id, desc, img, price, inCart } = this.props.product

    return (
      <li className='r2l-product__card glide__slide'>
        <div className='r2l-product__img-container'>
          <img className='r2l-product__img' src={img} alt={desc} />
          <div className='r2l-product__desc text-uppercase'>{desc}</div>
        </div>
        <div className='r2l-product__price'>{price}</div>
      </li>
    )
  }
}
