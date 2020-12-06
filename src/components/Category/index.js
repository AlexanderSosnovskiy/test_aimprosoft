import React, { Component } from 'react'

import './Category.scss'

export default class Category extends Component {
  render() {
    const { img, desc } = this.props.category
    const { x, y } = this.props
    let className = 'r2l-category px-0 col-sm-12 '

    if (x !== 0 && x % 2 === 1 && y === 0) {
      className += 'col-md-7'
    } else if (x !== 0 && x % 2 === 1 && y === 1) {
      className += 'col-md-5'
    } else if (x !== 0 && x % 2 === 0 && y === 0) {
      className += 'col-md-5'
    } else if (x !== 0 && x % 2 === 0 && y === 1) {
      className += 'col-md-7'
    } else {
      className += 'col-md-6'
    }

    return (
      <div className={className}>
        <div className='r2l-img-container'>
          <img className='r2l-category__img' src={img} alt={desc} />
        </div>
        <div className='r2l-category__desc'>
          <span className='text-uppercase'>{desc}</span>
        </div>
      </div>
    )
  }
}
