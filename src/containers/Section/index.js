import React from 'react'

import Title from '../../components/Title'
import { ReactComponent as ArrowLeft } from '../../assets/images/arrow_left.svg'
import { ReactComponent as ArrowRight } from '../../assets/images/arrow_right.svg'
import { ReactComponent as Delimeter } from '../../assets/images/delimeter.svg'

import './Section.scss'

function Section(props) {
  return (
    <section className={props.className}>
      {props.title && (
        <div className='r2l-section-title'>
          <div className='r2l-arrow-container'>
            <ArrowLeft />
          </div>
          <Title title={props.title} />
          <div className='r2l-arrow-container'>
            <ArrowRight />
          </div>
        </div>
      )}
      {!props.title && (
        <div className='r2l-delimeter-container'>
          <Delimeter />
        </div>
      )}

      {props.children}
    </section>
  )
}

export default Section
