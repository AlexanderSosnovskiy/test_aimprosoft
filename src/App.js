import React from 'react'

import Shipping from './components/Shipping'
import Banner from './components/Banner'
import Productist from './containers/ProductList'
import CategoryList from './containers/CategoryList'
import InstagramGalery from './containers/InstagramGalery'

import './styles/main.scss'

function App() {
  return (
    <>
      <Shipping />
      <Banner />
      <main className='r2l-main-content px-7'>
        <Productist />
        <CategoryList />
        <InstagramGalery />
      </main>
    </>
  )
}

export default App
