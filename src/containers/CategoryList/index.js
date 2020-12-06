import React, { Component } from 'react'

import Section from '../Section'
import Category from '../../components/Category'

import { r2lCategories } from '../../data'
import './CategoryList.scss'

export default class CategoryList extends Component {
  render() {
    const categoryGroups = r2lCategories.reduce((rows, key, index) => {
      return (
        (index % 2 === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows
      )
    }, [])

    return (
      <Section>
        {categoryGroups.map((categories, x) => (
          <div key={x} className='container'>
            <div className='row'>
              {categories.map((category, y) => (
                <Category key={category.id} x={x} y={y} category={category} />
              ))}
            </div>
          </div>
        ))}
      </Section>
    )
  }
}
