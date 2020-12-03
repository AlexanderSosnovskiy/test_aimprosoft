import React from 'react'

import Shipping from './components/Shipping'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'
import Productist from './containers/ProductList/ProductList'

import './styles/main.scss'

function App() {
  return (
    <>
      <Shipping />
      <Banner />
      <main className='r2l-main-content'>
        <div className='r2l-inner-wrapper'>
          <Productist />
        </div>
      </main>
    </>
  )
}

export default App
